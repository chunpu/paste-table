(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var PasteTable = require('../')

$(function() {
	var $input = $('#input')
	PasteTable.onpaste($input, function(err, table) {
		// console.log(table.markdown())
		// console.log(table.confluence())
		if (err) {
			return console.error(err)
		}
		$input.val(table.html())
		table.console()
		$('#element').empty().append(table.element())
		$('#markdown').val(table.markdown())
		$('#confluence').val(table.confluence())
		return false
	})
})

},{"../":2}],2:[function(require,module,exports){
(function (global){
var debug = require('min-debug')('totable')
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
			$('<td>').text(val).appendTo($tr)
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
	var max = _.reduce(table.body, function(max, val) {
		var len = val.length
		if (max > len) return max
		return len
	}, head.length)
	var arr = []
	if (hasHead) {
		arr.push(head)
	}
	arr.push.apply(arr, table.body)
	arr = _.map(arr, function(val, i) {
		for (var i = val.length; i < max; i++) {
			val.push(padding)
		}
		var sep = '|'
		if (1 == i && hasHead) {
			sep = '||'
		}
		return val.join(' ' + sep + ' ')
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

/*
var ui = exports.ui = {}

exports.bindEvent = function(el, fn) {
	$(el).on('paste', function(ev) {
		var transfer = ev.originalEvent.clipboardData
		var data = transfer.getData('text/html')
		debug('paste', data)
		var ret = exports.handler(data)
		if (ret) {
			fn(null, ret)
			console.log(ui.markdown(ret))
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

*/

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-debug":3,"min-util":4}],3:[function(require,module,exports){
(function (global){
module.exports = exports = Debug

var colors = 'lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson'.split(' ')
var colorIndex = 0
var prev
var inherit = 'color:inherit'
var console = global.console
var doc = global.document
var names = []
var skips = []
var debugElement

init()

exports.prefix = ''
exports.init = init

function Debug(namespace) {
	var color = 'color:' + getColor()
	return enabled(namespace) ? function() {
		exports.log(namespace, arguments, color)
	} : noop
}

function init(key) {
	key = key || 'debug'
	var reg = new RegExp(key + '=(\\S+)')
	var res = reg.exec(location.href)
	if (res) {
		enable(res[1])
		exports.log = elementLog
	} else if (global.localStorage && console) {
		exports.log = consoleLog
		try {
			enable(localStorage[key])
		} catch (ignore) {}
	}
}

function noop() {}

function enable(namespaces) {
	if (!namespaces) return
	skips = []
	names = []
	var split = namespaces.split(/[\s,]+/)
	for (var i = 0; i < split.length; i++) {
		if (!split[i]) continue
		namespaces = split[i].replace(/\*/g, '.*?')
		if ('-' == namespaces[0])
			skips.push(new RegExp('^' + namespaces.substr(1) + '$'))
		else
			names.push(new RegExp('^' + namespaces + '$'))
	}
}

function enabled(name) {
	var i = 0, reg
	for (i = 0; reg = skips[i++];) {
		if (reg.test(name)) return false
	}
	for (i = 0; reg = names[i++];) {
		if (reg.test(name)) return true
	}
}

function getColor() {
	return colors[colorIndex++ % colors.length]
}

function elementLog(namespace, args, color) {
	// init element when first log, cannot cancel after inited
	debugElement = debugElement || initDebugElement()

	var items = ['[' + namespace + ']']
	var len = args.length

	for (var i = 0; i < len; i++) {
		var val = args[i]
		try {
			val = JSON.stringify(val, 0, 4)
		} catch (e) {
			val += ''
		}
		items.push(val)
	}

	debugElement.value += items.join(' ') + '\n'
	debugElement.scrollTop = debugElement.scrollHeight
}

function initDebugElement() {
	var elem = doc.createElement('textarea')
	elem.style.cssText = 'z-index:999;width:100%;height:300px;overflow:auto;line-height:1.4;background:#333;color:#fff;font:16px Consolas;border:none;'
	var box = doc.body || doc.documentElement
	box.insertBefore(elem, box.firstChild)
	return elem
}

function consoleLog(namespace, args, color) {
	var curr = +new Date
	var ms = curr - (prev || curr)
	prev = curr

	var label = exports.prefix + namespace
	var main = '%c' + label + '%c'
	var arr = [null, color, inherit]
	for (var i = 0; i < args.length; i++) {
		arr.push(args[i])
		main += ' %o'
	}
	arr.push(color)
	main += '%c +' + ms + 'ms'
	arr[0] = main
	console.debug.apply(console, arr)
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
module.exports = require('./src')

},{"./src":10}],5:[function(require,module,exports){
var is = require('min-is')

var slice = [].slice

var _ = exports

_.is = is

_.extend = _.assign = extend

_.each = each

_.map = function(arr, fn) {
	var ret = []
	each(arr, function(item, i, arr) {
		ret[i] = fn(item, i, arr)
	})
	return ret
}

_.filter = function(arr, fn) {
	var ret = []
	each(arr, function(item, i, arr) {
		var val = fn(item, i, arr)
		if (val) ret.push(item)
	})
	return ret
}

_.some = function(arr, fn) {
	return -1 != findIndex(arr, fn)
}

_.every = function(arr, fn) {
	return -1 == findIndex(arr, negate(fn))
}

_.reduce = reduce

_.findIndex = findIndex

_.find = function(arr, fn) {
	var index = _.findIndex(arr, fn)
	if (-1 != index) {
		return arr[index]
	}
}

_.indexOf = indexOf

_.includes = function(val, sub) {
	return -1 != indexOf(val, sub)
}

_.toArray = toArray

_.slice = function(arr, start, end) {
	var ret = []
	var len = getLength(arr)
	if (len) {
		start = start || 0
		end = end || len
		if (!(arr instanceof Object)) {
			// IE8- dom object
			arr = toArray(arr)
		}
		ret = slice.call(arr, start, end)
	}
	return ret
}

_.negate = negate

_.forIn = forIn

_.keys = keys

_.size = function(arr) {
	var len = getLength(arr)
	if (null == len) {
		len = keys(arr).length
	}
	return len
}

var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g

_.trim = function(str) {
	if (null == str) return ''
	return ('' + str).replace(rtrim, '')
}

_.noop = function() {}

function getLength(arr) {
	if (null != arr) return arr.length
}

function each(arr, fn) {
	var len = getLength(arr)
	if (len && is.fn(fn)) {
		for (var i = 0; i < len; i++) {
			if (false === fn(arr[i], i, arr)) break
		}
	}
	return arr
}

function findIndex(arr, fn) {
	var ret = -1
	each(arr, function(item, i, arr) {
		if (fn(item, i, arr)) {
			ret = i
			return false
		}
	})
	return ret
}

function toArray(arr) {
	var ret = []
	each(arr, function(item) {
		ret.push(item)
	})
	return ret
}


function extend(target) {
	if (target) {
		var sources = slice.call(arguments, 1)
		each(sources, function(src) {
			forIn(src, function(val, key) {
				if (!is.undef(val)) {
					target[key] = val
				}
			})
		})
	}
	return target
}

function negate(fn) {
	return function() {
		return !fn.apply(this, arguments)
	}
}

function indexOf(val, sub) {
	if (is.str(val)) return val.indexOf(sub)

	return findIndex(val, function(item) {
		// important!
		return sub === item
	})
}

function reduce(arr, fn, prev) {
	each(arr, function(item, i) {
		prev = fn(prev, item, i, arr)
	})
	return prev
}

function forIn(hash, fn) {
	if (hash) {
		for (var key in hash) {
			if (is.owns(hash, key)) {
				if (false === fn(hash[key], key, hash)) break
			}
		}
	}
	return hash
}

function keys(hash) {
	var ret = []
	forIn(hash, function(val, key) {
		ret.push(key)
	})
	return ret
}


},{"min-is":6}],6:[function(require,module,exports){
(function (global){
var is = exports

var obj = Object.prototype

is.browser = (function() {
	return global.window == global
})()

// simple modern browser detect
is.h5 = (function() {
	if (is.browser && navigator.geolocation) {
		return true
	}
	return false
})()

function _class(val) {
	var name = obj.toString.call(val)
	// [object Class]
	return name.substring(8, name.length - 1).toLowerCase()
}

function _type(val) {
	// undefined object boolean number string symbol function
	return typeof val
}

function owns(owner, key) {
	return obj.hasOwnProperty.call(owner, key)
}

is._class = _class

is._type = _type

is.owns = owns

// not a number
is.nan = function(val) {
	return !is.num(val)
}

is.infinite = function(val) {
	return val == Infinity || val == -Infinity
}

is.num = is.number = function(num) {
	return !isNaN(num) && 'number' == _class(num)
}

// int or decimal
is.iod = function(val) {
	if (is.num(val) && !is.infinite(val)) {
		return true
	}
	return false
}

is.decimal = function(val) {
	if (is.iod(val)) {
		return 0 != val % 1
	}
	return false
}

is.int = function(val) {
	if (is.iod(val)) {
		return 0 == val % 1
	}
	return false
}

// object or function
is.oof = function(val) {
	if (val) {
		var tp = _type(val)
		return 'object' == tp || 'function' == tp
	}
	return false
}

// regexp should return object
is.obj = is.object = function(obj) {
	return is.oof(obj) && 'function' != _class(obj)
}

is.hash = is.plainObject = function(hash) {
	if (hash) {
		if ('object' == _class(hash)) {
			// old window is object
			if (hash.nodeType || hash.setInterval) {
				return false
			}
			return true
		}
	}
	return false
}

is.undef = function(val) {
	return 'undefined' == _type(val)
}

// host function should return function, e.g. alert
is.fn = function(fn) {
	return 'function' == _class(fn)
}

is.str = is.string = function(str) {
	return 'string' == _class(str)
}

// number or string
is.nos = function(val) {
	return is.iod(val) || is.str(val)
}

is.array = function(arr) {
	return 'array' == _class(arr)
}

is.arraylike = function(arr) {
	// window has length for iframe too, but it is not arraylike
	if (!is.window(arr) && is.obj(arr)) {
		var len = arr.length
		if (is.int(len) && len >= 0) {
			return true
		}
	}
	return false
}

is.window = function(val) {
	if (val && val.window == val) {
		return true
	}
	return false
}

is.empty = function(val) {
	if (is.str(val) || is.arraylike(val)) {
		return 0 === val.length
	}
	if (is.hash(val)) {
		for (var key in val) {
			if (owns(val, key)) {
				return false
			}
		}
	}
	return true
}

is.element = function(elem) {
	if (elem && 1 === elem.nodeType) {
		return true
	}
	return false
}

is.regexp = function(val) {
	return 'regexp' == _class(val)
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
var _ = module.exports = require('./')

var each = _.each
var includes = _.includes
var is = _.is

_.reject = function(arr, fn) {
	return _.filter(arr, function(val, i, arr) {
		return !fn(val, i, arr)
	})
}

_.without = function(arr) {
	var other = _.slice(arguments, 1)
	return _.difference(arr, other)
}

_.difference = function(arr, other) {
	var ret = []
	_.each(arr, function(val) {
		if (!includes(other, val)) {
			ret.push(val)
		}
	})
	return ret
}

_.pluck = function(arr, key) {
	return _.map(arr, function(item) {
		if (item) return item[key]
	})
}

_.asyncMap = function(arr, fn, cb) {
	var ret = []
	var count = 0
	var hasDone, hasStart

	each(arr, function(arg, i) {
		hasStart = true
		fn(arg, function(err, val) {
			if (hasDone) return
			count++
			if (err) {
				hasDone = true
				return cb(err)
			}
			ret[i] = val
			if (count == arr.length) {
				hasDone = true
				cb(null, ret)
			}
		})
	})

	if (!hasStart) cb(null) // empty
}

_.uniq = function(arr) {
	var ret = []
	each(arr, function(item) {
		if (!includes(ret, item)) ret.push(item)
	})
	return ret
}

_.flatten = function(arrs) {
	var ret = []
	each(arrs, function(arr) {
		if (is.arraylike(arr)) {
			each(arr, function(item) {
				ret.push(item)
			})
		} else ret.push(arr)
	})
	return ret
}

_.union = function() {
	return _.uniq(_.flatten(arguments))
}

_.sample = function(arr, n) {
	var ret = _.toArray(arr)
	var len = ret.length
	var need = Math.min(n || 1, len)
	for (var i = 0; i < len; i++) {
		var rand = _.random(i, len - 1)
		var tmp = ret[rand]
		ret[rand] = ret[i]
		ret[i] = tmp
	}
	ret.length = need
	if (null == n) {
		return ret[0]
	}
	return ret
}

_.shuffle = function(arr) {
	return _.sample(arr, Infinity)
}

_.compact = function(arr) {
	return _.filter(arr, _.identity)
}

_.rest = function(arr) {
	return _.slice(arr, 1)
}

_.invoke = function() {
	var args = arguments
	var arr = args[0]
	var fn = args[1]
	var isFunc = is.fn(fn)
	args = _.slice(args, 2)

	return _.map(arr, function(item) {
		if (isFunc) {
			return fn.apply(item, args)
		}
		if (null != item) {
			var method = item[fn]
			if (is.fn(method)) {
				return method.apply(item, args)
			}
		}
	})
}

_.partition = function(arr, fn) {
	var hash = _.groupBy(arr, function(val, i, arr) {
		var ret = fn(val, i, arr)
		if (ret) return 1
		return 2
	})
	return [hash[1], hash[2]]
}

_.groupBy = function(arr, fn) {
	var hash = {}
	_.each(arr, function(val, i, arr) {
		var ret = fn(val, i, arr)
		hash[ret] = hash[ret] || []
		hash[ret].push(val)
	})
	return hash
}

},{"./":10}],8:[function(require,module,exports){
var _ = require('./')
var is = _.is

module.exports = Cache

function Cache() {
	this.data = {}
}

var proto = Cache.prototype

proto.has = function(key) {
	return is.owns(this.data, key)
}

proto.get = function(key) {
	return this.data[key]
}

proto.set = function(key, val) {
	this.data[key] = val
}

proto['delete'] = function(key) {
	delete this.data[key]
}

},{"./":10}],9:[function(require,module,exports){
var _ = module.exports = require('./')

var is = _.is
var slice = _.slice

_.bind = function(fn, ctx) {
	if (is.str(ctx)) {
		var obj = fn
		fn = obj[ctx]
		ctx = obj
	}
	if (!is.fn(fn)) return fn
	var args = slice(arguments, 2)
	ctx = ctx || this
	return function() {
		return fn.apply(ctx, _.flatten([args, arguments]))
	}
}

// from lang.js `Function.prototype.inherits`
// so belong to function
_.inherits = function(ctor, superCtor) {
	ctor.super_ = superCtor
	ctor.prototype = _.create(superCtor.prototype, {
		constructor: ctor
	})
}

_.delay = function(fn, wait) {
	var args = _.slice(arguments, 2)
	return setTimeout(function() {
		fn.apply(this, args)
	}, wait)
}

_.before = function(n, fn) {
	return function() {
		if (n > 1) {
			n--
			return fn.apply(this, arguments)
		}
	}
}

_.once = function(fn) {
	return _.before(2, fn)
}

_.after = function(n, fn) {
	return function() {
		if (n > 1) {
			n--
		} else {
			return fn.apply(this, arguments)
		}
	}
}

_.throttle = function(fn, wait, opt) {
	wait = wait || 0
	opt = _.extend({
		leading: true,
		trailing: true,
		maxWait: wait
	}, opt)
	return _.debounce(fn, wait, opt)
}

_.debounce = function(fn, wait, opt) {
	wait = wait || 0
	opt = _.extend({
		leading: false,
		trailing: true
	}, opt)
	var maxWait = opt.maxWait
	var lastExec = 0 // wait
	var lastCall = 0 // just for maxWait
	var now = _.now()
	var timer

	if (!opt.leading) {
		lastExec = now
	}

	function ifIsCD() {
		if (now - lastExec > wait) return false
		if (maxWait && now - lastCall > maxWait) return false
		return true
	}

	function exec(fn, ctx, args) {
		lastExec = _.now() // update last exec
		return fn.apply(ctx, args)
	}

	function cancel() {
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
	}

	function debounced() {
		now = _.now() // update now
		var isCD = ifIsCD()
		lastCall = now // update last call
		var me = this
		var args = arguments

		cancel()

		if (!isCD) {
			exec(fn, me, args)
		} else {
			if (opt.trailing) {
				timer = _.delay(function() {
					exec(fn, me, args)
				}, wait)
			}
		}
	}

	debounced.cancel = cancel

	return debounced
}

function memoize(fn) {
	var cache = new memoize.Cache
	function memoized() {
		var args = arguments
		var key = args[0]
		if (!cache.has(key)) {
			var ret = fn.apply(this, args)
			cache.set(key, ret)
		}
		return cache.get(key)
	}
	memoized.cache = cache
	return memoized
}

memoize.Cache = require('./cache')

_.memoize = memoize

_.wrap = function(val, fn) {
	return function() {
		var args = [val]
		args.push.apply(args, arguments)
		return fn.apply(this, args)
	}
}

},{"./":10,"./cache":8}],10:[function(require,module,exports){
var cou = require('cou')

module.exports = cou.extend(_, cou)

require('./array')
require('./object')
require('./function')
require('./util')
require('./string')

_.mixin(_, _)

function _(val) {
	if (!(this instanceof _)) return new _(val)
	this.__value = val
	this.__chain = false
}


},{"./array":7,"./function":9,"./object":11,"./string":12,"./util":13,"cou":5}],11:[function(require,module,exports){
var _ = module.exports = require('./')

var is = _.is
var each = _.each
var forIn = _.forIn

_.only = function(obj, keys) {
	obj = obj || {}
	if (is.str(keys)) keys = keys.split(/ +/)
	return _.reduce(keys, function(ret, key) {
		if (null != obj[key]) ret[key] = obj[key]
		return ret
	}, {})
}

_.values = function(obj) {
	return _.map(_.keys(obj), function(key) {
		return obj[key]
	})
}

_.pick = function(obj, fn) {
	if (!is.fn(fn)) {
		return _.pick(obj, function(val, key) {
			return key == fn
		})
	}
	var ret = {}
	forIn(obj, function(val, key, obj) {
		if (fn(val, key, obj)) {
			ret[key] = val
		}
	})
	return ret
}

_.functions = function(obj) {
	return _.keys(_.pick(obj, function(val) {
		return is.fn(val)
	}))
}

_.mapObject = _.mapValues = function(obj, fn) {
	var ret = {}
	forIn(obj, function(val, key, obj) {
		ret[key] = fn(val, key, obj)
	})
	return ret
}

_.get = function(obj, arr) {
	var hasStart = false
	var flag = _.every(arr, function(key) {
		hasStart = true
		if (null != obj && key in Object(obj)) {
			obj = obj[key]
			return true
		}
	})
	if (hasStart && flag) return obj
}

_.has = is.owns // TODO

_.set = function(obj, arr, val) {
	// TODO
}

_.create = (function() {
	function Object() {} // so it seems like Object.create
	return function(proto, property) {
		// not same as Object.create, Object.create(proto, propertyDescription)
		if ('object' != typeof proto) {
			// null is ok
			proto = null
		}
		Object.prototype = proto
		return _.extend(new Object, property)
	}
})()

_.defaults = function() {
	var args = arguments
	var target = args[0]
	var sources = _.slice(args, 1)
	if (target) {
		_.each(sources, function(src) {
			_.mapObject(src, function(val, key) {
				if (is.undef(target[key])) {
					target[key] = val
				}
			})
		})
	}
	return target
}

_.isMatch = function(obj, src) {
	var ret = true
	obj = obj || {}
	forIn(src, function(val, key) {
		if (val !== obj[key]) {
			ret = false
			return false
		}
	})
	return ret
}

_.toPlainObject = function(val) {
	var ret = {}
	forIn(val, function(val, key) {
		ret[key] = val
	})
	return ret
}

},{"./":10}],12:[function(require,module,exports){
var _ = module.exports = require('./')

_.tostr = tostr

_.capitalize = function(str) {
	str = tostr(str)
	return str.charAt(0).toUpperCase() + str.substr(1)
}

_.decapitalize = function(str) {
	str = tostr(str)
	return str.charAt(0).toLowerCase() + str.substr(1)
}

_.camelCase = function(str) {
	str = tostr(str)
	var arr = str.split(/[^\w]|_+/)
	arr = _.map(arr, function(val) {
		return _.capitalize(val)
	})
	return _.decapitalize(arr.join(''))
}

function tostr(str) {
	if (str || 0 == str) return str + ''
	return ''
}

},{"./":10}],13:[function(require,module,exports){
var _ = module.exports = require('./')
var is = _.is

_.now = function() {
	return +new Date
}

_.constant = function(val) {
	return function() {
		return val
	}
}

_.identity = function(val) {
	return val
}

_.random = function(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1))
}

_.mixin = function(dst, src, opt) {
	var keys = _.functions(src)
	if (dst) {
		if (is.fn(dst)) {
			opt = opt || {}
			var isChain = !!opt.chain
			// add to prototype
			var proto = dst.prototype
			_.each(keys, function(key) {
				var fn = src[key]
				proto[key] = function() {
					var me = this
					var args = [me.__value]
					args.push.apply(args, arguments)
					var ret = fn.apply(me, args)
					if (me.__chain) {
						me.__value = ret
						return me
					}
					return ret
				}
			})
		} else {
			_.each(keys, function(key) {
				dst[key] = src[key]
			})
		}
	}
	return dst
}

_.chain = function(val) {
	var ret = _(val)
	ret.__chain = true
	return ret
}

_.value = function() {
	this.__chain = false
	return this.__value
}

},{"./":10}]},{},[1]);
