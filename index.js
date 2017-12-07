var debug = require('min-log/debug')('totable')
var _ = require('min-util')

debug('init')

var doc = global.document
var is = _.is

module.exports = exports = PasteTable

function PasteTable(data) {
	this.raw = data
	var table = handler(data)
	if (!is.empty(_.get(table, ['body']))) {
		this.table = table
	}
}

PasteTable.onpaste = function(el, fn) {
	return $(el).on('paste', function(ev) {
		var transfer = ev.originalEvent.clipboardData
		if (!transfer) {
			return fn(new Error('fail to get clipboardData'))
		}
		var data = transfer.getData('text/html')
		debug('onpaste')
		var pasteTable = new PasteTable(data)
		if (!pasteTable.table) {
			debug('error', pasteTable.raw)
			return fn(new Error('fail to get table data'))
		}
		return fn(null, pasteTable)
	})
}

var proto = PasteTable.prototype

proto.markdown = function() {
	// GFM: https://help.github.com/articles/github-flavored-markdown/
	var table = this.table
	var arr = []
	if (table.head) {
		arr.push(table.head)
		arr.push(_)
	}
	var lines = table.body
	lines = _.map(lines, function(line) {
		line = _.map(line, function(item) {
			item = item.trim()
			item = item.split('|').join('\\|')
			item = item.split('\n').join('<br>') // 处理换行
			return item
		})
		return line
	})
	arr.push.apply(arr, lines)
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

proto.element = function() {
	var table = this.table
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
			var $td = $('<td>').appendTo($tr)
			var items = val.split('\n')
			_.each(items, function(item, i) {
				$td.append(item)
				if (i != items.length - 1) {
					$td.append('<br>')
				}
			})
		})
	})
	return $table[0]
}

proto.console = function() {
	var table = this.table
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

proto.html = function() {
	return this.raw
}

proto.json = function() {
	return this.table
}

proto.confluence = function() {
	var table = this.table
	var head = table.head || []
	var hasHead = !is.empty(head)

	var lines = table.body
	lines = _.map(lines, function(line) {
		line = _.map(line, function(item) {
			item = item.trim()
			item = item.split('|').join('\\|')
			item = item.split('\n').join(' \\\\ ') // 处理换行
			return item
		})
		return line
	})
	var max = _.reduce(lines, function(max, val) {
		var len = val.length
		if (max > len) return max
		return len
	}, head.length)
	var arr = []
	if (hasHead) {
		arr.push(head)
	}
	arr.push.apply(arr, lines)
	arr = _.map(arr, function(val, j) {
		for (var i = val.length; i < max; i++) {
			val.push(padding)
		}
		var sep = '|'
		if (0 == j && hasHead) {
			sep = '||'
		}
		return sep + ' ' + val.join(' ' + sep + ' ')
	})
	return arr.join('\n')
}

function handler(data) {
	// TODO more safe
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
			var text = ''
			if ('innerText' in item) {
				return item.innerText // 自带换行, 很关键
			} else {
				text = $(item).text()
			}
			return text
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
