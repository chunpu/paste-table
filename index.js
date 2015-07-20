var totable = exports = module.exports
var debug = require('min-debug')('totable')
var _ = require('min-util')

debug('init')

var doc = global.document
var ui = exports.ui = {}

exports.bindEvent = function(el, fn) {
	$(el).on('paste', function(ev) {
		var transfer = ev.originalEvent.clipboardData
		var data = transfer.getData('text/html')
		debug('paste', data)
		var ret = exports.handler(data)
		if (ret) {
			fn(null, ret)
		} else {
			fn(new Error('fail to find table'))
		}
	})
}

exports.handler = function(data) {
	var iframe = document.createElement('iframe')
	var $iframe = $(iframe)
	$iframe.hide().appendTo(doc.body)
	var idoc = iframe.contentDocument
	try {
		idoc.write(data)
		idoc.close()
	} catch (e) {
		debug('error', e)
		return
	}
	var $table = $('table', idoc)
	debug('table', $table[0])
	var $tr = $table.find('tr')
	var ret = {
		head: [],
		body: []
	}
	_.each($tr, function(tr) {
		var $children = $(tr).children()
		var isHead = _.every($children, function(th) {
			return 'TH' == th.tagName.toUpperCase()
		})
		var data = _.map($children, function(item) {
			return $(item).text()
		})
		if (isHead) {
			ret.head.push(data)
		} else {
			ret.body.push(data) // ignore footer
		}
	})
	ret.head = ret.head[0] // only one head
	$iframe.remove()
	return ret
}


ui.markdown = function(table) {
	// GFM: https://help.github.com/articles/github-flavored-markdown/
	var arr = []
	if (table.head) {
		arr.push(table.head)
		arr.push(_)
	}
	arr.push.apply(arr, table.body)
	var max = _.reduce(arr, function(max, val) {
		var len = val.length
		if (max > len) return max
		return len
	}, 0)
	arr = _.map(arr, function(val) {
		var padding = ''
		if (_ == val) {
			padding = '---'
			val = []
		}
		for (var i = val.length; i < max; i++) {
			val.push(padding)
		}
		return val.join(' | ')
	})
	return arr.join('\n')
}

ui.element = function(table) {
	var $table = $('<table>')
	if (table.head) {
		var $thead = $('<thead>').appendTo($table)
		var $tr = $('<tr>').appendTo($thead)
		_.each(table.head, function(val) {
			$('<th>').text(val).appendTo($tr)
		})
	}
	var $tbody = $('<tbody>').appendTo($table)
	_.each(table.body, function(arr) {
		var $tr = $('<tr>').appendTo($tbody)
		_.each(arr, function(val) {
			$('<td>').text(val).appendTo($tr)
		})
	})
	return $table[0]
}

ui.console = function(table) {
	var console = global.console
	if (console && console.table) {
		var data = table.body
		if (table.head) {
			data = _.map(data, function(arr) {
				var ret = {}
				_.each(arr, function(val, i) {
					ret[table.head[i]] = val
				})
				return ret
			})
		}
		console.table(data)
	}
}
