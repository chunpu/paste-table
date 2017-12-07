/*! paste-table@1.1.1 by  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_"] = factory();
	else
		root["_"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var cou = __webpack_require__(7)

module.exports = cou.extend(_, cou)

__webpack_require__(30)
__webpack_require__(31)
__webpack_require__(32)
__webpack_require__(33)
__webpack_require__(34)
__webpack_require__(36)
__webpack_require__(37)

_.mixin(_, _)

function _(val) {
	if (!(this instanceof _)) return new _(val)
	this.__value = val
	this.__chain = false
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var cou = __webpack_require__(7)

module.exports = cou.extend(_, cou)

__webpack_require__(17)
__webpack_require__(18)
__webpack_require__(19)
__webpack_require__(21)
__webpack_require__(22)
__webpack_require__(23)

_.mixin(_, _)

function _(val) {
	if (!(this instanceof _)) return new _(val)
	this.__value = val
	this.__chain = false
}



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1)

/* webpack only
if (DEBUG && global.console) {
	console.debug('debug mode')
}
*/


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.hasConsole = function() {
  if (global.console) {
    return true
  }
  return false
}

exports.console = function(level, arr) {
  // support ie8+
  // http://stackoverflow.com/questions/5538972/console-log-apply-not-working-in-ie9
  var apply = Function.prototype.apply || console[level].apply // wechat has no Function.prototype.apply
  apply.call(console[level], console, arr)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// https://logging.apache.org/log4j/2.x/manual/customloglevels.html
var _ = __webpack_require__(2)

var keys = 'verbose debug log info warn error fatal off'.split(' ')

_.each(keys, function(level, i) {
  exports[_.upper(level)] = i + 1
})

exports.toCode = function(levelName) {
  return exports[_.upper(levelName)] || levelName
}

exports.toName = function(levelCode) {
  return _.find(keys, function(key) {
    return exports[_.upper(key)] === levelCode
  })
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _ = __webpack_require__(2)
var is = _.is
var qs = __webpack_require__(9)

function isIE() {
  if (is.browser()) {
    if (/Trident/i.test(navigator.userAgent)) {
      return true
    }
  }
  return false
}

function supportBrowserColor() {
  if (is.wechatApp()) {
    return true
  }
  if (isIE()) { // 可能可以改成 is.h5
    return false
  }
  if (!is.browser()) {
    return false
  }
  return true
}

function text(el, val) {
  var key = 'textContent'
  if (!is.owns(el, key)) {
    key = 'innerText'
  }
  el[key] = val
}

function safeStringify(val) {
  try {
    val = JSON.stringify(val, 0, 4)
  } catch (e) {
    val += ''
  }
  return val
}

function getUserOptions(keys) {
  // url.query, localStorage, process.env
  var pool = []
  if (global.location) {
    var query = qs.parse(_.slice(location.search, 1))
    pool.push(query)
  }
  if (global.localStorage) {
    pool.push(localStorage)
  }
  var env = _.get(global, ['process', 'env'])
  if (env) {
    pool.push(env)
  }
  var opt = _.find(pool, function(obj) {
    var opt
    try {
      opt = pick(obj, keys)
    } catch (e) {
      opt = null
    }
    if (opt) {
      return opt
    }
  })
  return opt || {}
}

function pick(obj, keys) {
  var ret = {}
  var picked = false
  _.each(keys, function(key) {
    if (is.owns(obj, key)) {
      picked = true
      ret[key] = obj[key]
    }
  })
  if (picked) {
    return ret
  }
}

exports.isIE = isIE
exports.supportBrowserColor = supportBrowserColor
exports.safeStringify = safeStringify
exports.text = text
exports.getUserOptions = getUserOptions

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(16)

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
	// support array and string
	var ret = [] // default return array
	var len = getLength(arr)
	if (len >= 0) {
		start = start || 0
		if (0 !== end) {
			end = end || len
		}
		// raw array and string use self slice
		if (!is.fn(arr.slice)) {
			arr = toArray(arr)
		}
		ret = arr.slice(start, end)
	}
	return ret
}

_.negate = negate

_.forIn = forIn

_.keys = keys

var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g

_.trim = function(str) {
	if (null == str) return ''
	return ('' + str).replace(rtrim, '')
}

_.noop = function() {}

_.len = getLength

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
	if (is.string(val)) return val.indexOf(sub)

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



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Level = __webpack_require__(5)
var safeConsole = __webpack_require__(4)

exports.handler = function(item) {
  var level = item.level
  if (level < Level.DEBUG) {
    level = Level.DEBUG
  } else if (level > Level.ERROR) {
    level = Level.ERROR
  }
  var levelName = Level.toName(level)
  safeConsole.console(levelName, item.data)
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(10)
var is = _.is

var defaultOption = {
	sep: '&',
	eq: '=',
	encode: encodeURIComponent,
	decode: decodeURIComponent,
	keepRaw: false,
	sort: null,
	ignoreValues: [undefined]
}

exports.parse = function(qs, sep, eq, opt) {
	qs += ''
	opt = getOpt(sep, eq, opt)
	var decode = opt.decode
	// var ret = {}
	qs = qs.split(opt.sep)

	return _.reduce(qs, function(ret, arr) {
		arr = arr.split(opt.eq)
		if (2 == arr.length) {
			var k = arr[0]
			var v = arr[1]
			if (!opt.keepRaw) {
				try {
					k = decode(k)
					v = decode(v)
				} catch (ignore) {}
			}
			ret[k] = v
		}
		return ret
	}, {})
}

exports.stringify = function(obj, sep, eq, opt) {
	opt = getOpt(sep, eq, opt)

	var keys = _.keys(obj)

	var sort = opt.sort
	if (sort) {
		if (is.fn(sort)) {
			keys.sort(sort)
		} else {
			keys.sort()
		}
	}

	var encode = opt.encode

	var arr = []
	_.each(keys, function(key) {
		var val = obj[key]
		if (!_.includes(opt.ignoreValues, val)) {
			if (is.nan(val) || null == val) {
				val = ''
			}
			if (!opt.keepRaw) {
				key = encode(key)
				val = encode(val)
			}
			arr.push(key + opt.eq + val)
		}
	})
	return arr.join(opt.sep)
}

function getOpt(sep, eq, opt) {
	// can be
	// _
	// opt
	// sep, opt
	// sep, eq, opt
	opt = _.find(arguments, function(val) {
		return is.object(val)
	})
	sep = is.nos(sep) ? sep : undefined
	eq = is.nos(eq) ? eq : undefined
	opt = _.extend({}, defaultOption, opt, {sep: sep, eq: eq})
	return opt
}



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0)

/* webpack only
if (DEBUG && global.console) {
	console.debug('debug mode')
}
*/


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var PasteTable = __webpack_require__(12)

var $input = $('#input')

$(function() {
	PasteTable.onpaste($input, function(err, table) {
		if (err) {
			return console.error(err)
		}
		renderByTable(table)
		return false
	})
})

autoInit()

function autoInit() {
	var txt = `
<meta charset='utf-8'><h3 id="表格" style="outline: none; box-sizing: border-box; margin: 1.2em 0px 0.6em; font-size: 1.6em; font-weight: 400; color: rgb(68, 68, 68); text-align: start; position: relative; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;\\5FAE软雅黑&quot;, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">表格</h3><table class="table-quc" style="outline: none; box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; max-width: 100%; display: block; overflow-x: auto; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;\\5FAE软雅黑&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"><thead style="outline: none; box-sizing: border-box;"><tr style="outline: none; box-sizing: border-box;"><th style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 0.533333rem; max-width: 60%; white-space: nowrap; background-color: rgb(250, 251, 255); font-size: 0.116667rem; text-align: left;">Item</th><th style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 0.533333rem; max-width: 60%; white-space: nowrap; background-color: rgb(250, 251, 255); font-size: 0.116667rem; text-align: right;">Value</th><th style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 0.533333rem; max-width: 60%; white-space: nowrap; background-color: rgb(250, 251, 255); font-size: 0.116667rem; text-align: center;">Qty</th></tr></thead><tbody style="outline: none; box-sizing: border-box;"><tr style="outline: none; box-sizing: border-box;"><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: left;">Computer</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: right;">1600 USD</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: center;">5</td></tr><tr style="outline: none; box-sizing: border-box;"><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: left;">Phone</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: right;">12 USD</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: center;">12</td></tr><tr style="outline: none; box-sizing: border-box;"><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: left;">Pipe</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: right;">1 USD</td><td style="outline: none; box-sizing: border-box; padding: 0.5em 1em; border: 1px solid rgb(243, 243, 243); line-height: 1.5; max-width: 60%; text-align: center;">234</td></tr></tbody></table><h2 id="emphasis" style="outline: none; box-sizing: border-box; margin: 1.2em 0px 0.6em; font-size: 1.8em; font-weight: 400; color: rgb(68, 68, 68); text-align: start; position: relative; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;\\5FAE软雅黑&quot;, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"><a class="markdownIt-Anchor" href="https://quc.qihoo.net/resource/9901#emphasis" style="outline: none; box-sizing: border-box; background-color: transparent; text-decoration: none; color: rgb(68, 68, 68); cursor: pointer; visibility: hidden; font-weight: 300; position: absolute; width: 20px; left: -20px; padding-right: 20px; font-size: 18px; top: 20px; transform: translateY(-50%);"></a>Emp</h2>
	`
	var table = new PasteTable(txt.trim())
	renderByTable(table)
}

function renderByTable(table) {
	$input.val(table.html())
	table.console()
	$('#element').empty().append(table.element())
	$('#markdown').val(table.markdown())
	$('#confluence').val(table.confluence())
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var debug = __webpack_require__(13)('totable')
var _ = __webpack_require__(10)

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
			var text = $(item).text()
			var innerText = item.innerText
			if (isHead) {
				return text
			}
			return innerText || text // 优先 innerText, 因为自带换行
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var log = __webpack_require__(14)

var Debug = function(name) {
  return log.getLevelFunction('debug')
}

module.exports = exports = Debug


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Log = __webpack_require__(15)

module.exports = exports = Log.getLogger() // export default logger


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(2)
var is = _.is
var Level = __webpack_require__(5)
var Sdk = __webpack_require__(24)
var util = __webpack_require__(6)
var qs = __webpack_require__(9)
var sdk = new Sdk()

module.exports = exports = Log

function Log(opt) {
  var log = this
  if (is.string(opt)) {
    opt = {name: opt}
  }
  opt = opt || {}
  var name = opt.name || 'default' // namespace
  log.name = name
  log.Level = Level
  log.sdk = sdk
  log.enabled = sdk.isNameEnabled(name)
  log.color = opt.color || log.sdk.getRandomColor(name)

  // just for handy usage
  log.util = util
  log._ = _
  log.qs = qs
}

var levelNames = _.map(_.keys(Level), function(level) {
  return _.lower(level)
})

function getLogger(name) {
  // inspired by log4j getLogger
  // 需要 new Log 所以不能写在 sdk 中
  var loggers = sdk.loggers
  var logger = loggers[name]
  if (!logger) {
    logger = loggers[name] = new Log(name)
  }
  return logger
}

var proto = Log.prototype

proto.getLogger = Log.getLogger = getLogger

proto.output = function(levelCode, data) {
  var log = this
  var item = {
    level: levelCode,
    name: log.name,
    enabled: log.enabled,
    timestamp: _.now(),
    data: data,
    color: log.color
  }
  sdk.output(item)
}

_.each(levelNames, function(levelName) {
  var levelCode = Level.toCode(levelName)
  proto[levelName] = function() {
    this.output(levelCode, arguments)
  }
  // is enabled function
  var isLevelEnabled = 'is' + _.capitalize(levelName) + 'Enabled'
  proto[isLevelEnabled] = function() {
    return this.sdk.isLevelEnabled(levelCode)
  }
})

var sdkFuncNames = 'setOptions setOutputer setName setLevel setHistorySize getHistory disableHistory clear save'.split(' ')

_.each(sdkFuncNames, function(name) {
  proto[name] = function() {
    return this.sdk[name].apply(this.sdk, arguments)
  }
})

proto.getLevelFunction = function(level) {
  var log = this
  var levelCode = Level.toCode(level) || Level.DEBUG
  return function() {
    log.output(levelCode, arguments)
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var is = exports

var obj = Object.prototype

var navigator = global.navigator

// reserved words in es3: instanceof null undefined arguments boolean false true function int
// only have is.string and is.object, not is.str and is.obj
// instanceof null undefined arguments boolean false true function int

is.browser = function() {
	if (!is.wechatApp()) {
		if (navigator && global.window == global) {
			return true
		}
	}
	return false
}

// simple modern browser detect
is.h5 = function() {
	if (is.browser() && navigator.geolocation) {
		return true
	}
	return false
}

is.mobile = function() {
	if (is.browser() && /mobile/i.test(navigator.userAgent)) {
		return true
	}
	return false
}

is.wechatApp = function() {
	if ('object' == typeof wx) {
		if (wx && is.fn(wx.createVideoContext)) {
			// wechat js sdk has no createVideoContext
			return true
		}
	}
	return false
}

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
	return val !== val
}

is.bool = function(val) {
	return 'boolean' == _class(val)
}

is.infinite = function(val) {
	return val == Infinity || val == -Infinity
}

is.number = function(num) {
	return !isNaN(num) && 'number' == _class(num)
}

// integer or decimal
is.iod = function(val) {
	if (is.number(val) && !is.infinite(val)) {
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

is.integer = function(val) {
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
is.object = function(obj) {
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

is.string = function(str) {
	return 'string' == _class(str)
}

// number or string
is.nos = function(val) {
	return is.iod(val) || is.string(val)
}

is.array = function(arr) {
	return 'array' == _class(arr)
}

is.arraylike = function(arr) {
	// window has length for iframe too, but it is not arraylike
	if (!is.window(arr) && is.object(arr)) {
		var len = arr.length
		if (is.integer(len) && len >= 0) {
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
	if (is.string(val) || is.arraylike(val)) {
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


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)

var each = _.each
var includes = _.includes
var is = _.is
var proto = Array.prototype

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

_.size = function(arr) {
	var len = _.len(arr)
	if (null == len) {
		len = _.keys(arr).length
	}
	return len
}

_.first = function(arr) {
	if (arr) return arr[0]
}

_.last = function(arr) {
	var len = _.len(arr)
	if (len) {
		return arr[len - 1]
	}
}

_.asyncMap = function(arr, fn, cb) {
	// desperate
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
	return _.uniqBy(arr)
}

_.uniqBy = function(arr, fn) {
	var ret = []
	var pool = []
	if (!is.fn(fn)) {
		fn = null
	}
	each(arr, function(item) {
		var val = item
		if (fn) {
			val = fn(item)
		}
		if (!includes(pool, val)) {
			pool.push(val)
			ret.push(item)
		}
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
	return [hash[1] || [], hash[2] || []]
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

_.range = function() {
	var args = arguments
	if (args.length < 2) {
		return _.range(args[1], args[0])
	}
	var start = args[0] || 0
	var last = args[1] || 0
	var step = args[2]
	if (!is.number(step)) {
		step = 1
	}
	var count = last - start
	if (0 != step) {
		count = count / step
	}
	var ret = []
	var val = start
	for (var i = 0; i < count; i++) {
		ret.push(val)
		val += step
	}
	return ret
}

_.pullAt = function(arr) {
	// `_.at` but mutate
	var indexes = _.slice(arguments, 1)
	return mutateDifference(arr, indexes)
}

function mutateDifference(arr, indexes) {
	var ret = []
	var len = _.len(indexes)
	if (len) {
		indexes = indexes.sort(function(a, b) {
			return a - b
		})
		while (len--) {
			var index = indexes[len]
			ret.push(proto.splice.call(arr, index, 1)[0])
		}
	}
	ret.reverse()
	return ret
}

_.remove = function(arr, fn) {
	// `_.filter` but mutate
	var len = _.len(arr) || 0
	var indexes = []
	while (len--) {
		if (fn(arr[len], len, arr)) {
			indexes.push(len)
		}
	}
	return mutateDifference(arr, indexes)
}

_.fill = function(val, start, end) {
	// TODO
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)

var is = _.is
var each = _.each
var forIn = _.forIn

_.only = function(obj, keys) {
	obj = obj || {}
	if (is.string(keys)) keys = keys.split(/ +/)
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

_.mapKeys = function(obj, fn) {
	var ret = {}
	forIn(obj, function(val, key, obj) {
		var newKey = fn(val, key, obj)
		ret[newKey] = val
	})
	return ret
}

_.mapObject = _.mapValues = function(obj, fn) {
	var ret = {}
	forIn(obj, function(val, key, obj) {
		ret[key] = fn(val, key, obj)
	})
	return ret
}

// return value when walk through path, otherwise return empty
_.get = function(obj, path) {
	path = toPath(path)
	if (path.length) {
		var flag = _.every(path, function(key) {
			if (null != obj) { // obj can be indexed
				obj = obj[key]
				return true
			}
		})
		if (flag) return obj
	}
}

_.has = function(obj, path) {
	path = toPath(path)
	if (path.length) {
		var flag = _.every(path, function(key) {
			if (null != obj && is.owns(obj, key)) {
				obj = obj[key]
				return true
			}
		})
		if (flag) return true
	}
	return false
}

_.set = function(obj, path, val) {
	path = toPath(path)
	var cur = obj
	_.every(path, function(key, i) {
		if (is.oof(cur)) {
			if (i + 1 == path.length) {
				cur[key] = val
			} else {
				var item = cur[key]
				if (null == item) {
					// fill value with {} or []
					var item = {}
					if (~~key == key) {
						item = []
					}
				}
				cur = cur[key] = item
				return true
			}
		}
	})
	return obj
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

_.invert = function(obj) {
	var ret = {}
	forIn(obj, function(val, key) {
		ret[val] = key
	})
	return ret
}

// topath, copy from lodash

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g
var reEscapeChar = /\\(\\)?/g;

function toPath(val) {
	if (is.array(val)) return val
	var ret = []
	_.tostr(val).replace(rePropName, function(match, number, quote, string) {
		var item = number || match
		if (quote) {
			item = string.replace(reEscapeChar, '$1')
		}
		ret.push(item)
	})
	return ret
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)

var is = _.is
var slice = _.slice

_.bind = function(fn, ctx) {
	if (is.string(ctx)) {
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

memoize.Cache = __webpack_require__(20)

_.memoize = memoize

_.wrap = function(val, fn) {
	return function() {
		var args = [val]
		args.push.apply(args, arguments)
		return fn.apply(this, args)
	}
}

_.curry = function(fn) {
	var len = fn.length
	return setter([])

	function setter(args) {
		return function() {
			var arr = args.concat(_.slice(arguments))
			if (arr.length >= len) {
				arr.length = len
				return fn.apply(this, arr)
			}
			return setter(arr)
		}
	}
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(1)
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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)
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


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)

_.tostr = tostr // lodash toString

var indexOf = _.indexOf

_.split = function(str, separator, limit) {
	str = tostr(str)
	return str.split(separator, limit)
}

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

_.startsWith = function(str, val) {
	return 0 == indexOf(str, val)
}

_.endsWith = function(str, val) {
	val += '' // null => 'null'
	return val == _.slice(str, _.len(str) - _.len(val))
}

_.lower = function(str) {
	// lodash toLower
	return tostr(str).toLowerCase()
}

_.upper = function(str) {
	// lodash toUpper
	return tostr(str).toUpperCase()
}

_.repeat = function(str, count) {
	return _.map(_.range(count), function() {
		return str
	}).join('')
}

_.padStart = function(str, len, chars) {
	str = _.tostr(str)
	len = len || 0
	var delta = len - str.length
	return getPadStr(chars, delta) + str
}

_.padEnd = function(str, len, chars) {
	str = _.tostr(str)
	len = len || 0
	var delta = len - str.length
	return str + getPadStr(chars, delta)
}

function getPadStr(chars, len) {
	chars = _.tostr(chars) || ' ' // '' will never end
	var count = Math.floor(len / chars.length) + 1
	return _.repeat(chars, count).slice(0, len)
}

function tostr(str) {
	if (str || 0 == str) return str + ''
	return ''
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(1)

_.sum = function(arr) {
	return _.reduce(arr, function(sum, val) {
		return sum + val
	}, 0)
}

_.max = function(arr, fn) {
	var index = -1
	var data = -Infinity
	fn = fn || _.identity
	_.each(arr, function(val, i) {
		val = fn(val)
		if (val > data) {
			data = val
			index = i
		}
	})
	if (index > -1) {
		return arr[index]
	}
	return data
}

_.min = function(arr, fn) {
	var index = -1
	var data = Infinity
	fn = fn || _.identity
	_.each(arr, function(val, i) {
		val = fn(val)
		if (val < data) {
			data = val
			index = i
		}
	})
	if (index > -1) {
		return arr[index]
	}
	return data
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Level = __webpack_require__(5)
var outputers = __webpack_require__(25)
var safeConsole = __webpack_require__(4)
var util = __webpack_require__(6)
var _ = __webpack_require__(2)
var is = _.is

module.exports = Sdk

// global set: name level output

function Sdk() {
  var sdk = this
  sdk.history = []
  sdk.Level = Level
  sdk.loggers = {} // logger cache
  sdk.level = null
  sdk.prefix = ''
  sdk.pattern = {} // match namespace pattern
  sdk.lastItem = null // last log item
  sdk.outputers = outputers
  sdk.colorMap = {} // color map cache
  sdk.colors = 'lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson'.split(' ')
  sdk.colorIndex = 0
  sdk.historySize = 3000
  sdk.setOutputer(_.noop) // default is noop
  sdk.autoInit()
}

// TODO formatters https://en.wikipedia.org/wiki/Printf_format_string

var proto = Sdk.prototype

proto.autoInit = function() {
  // auto init: outputer name level
  var sdk = this
  var defaultOpt = sdk.getDefaultOptions()
  var userOpt = sdk.getUserOptions()
  var opt = _.extend({}, defaultOpt, userOpt)
  sdk.setOptions(opt)
}

proto.setOptions = function(opt) {
  var sdk = this
  sdk.setName(opt.name)
  sdk.setLevel(opt.level)
  sdk.setOutputer(opt.outputer)
}

proto.getDefaultOptions = function() {
  var sdk = this
  var ret = {
    level: Level.INFO, // default use info level, so debug and verbose log is hidden
    outputer: sdk.autoChooseOutputer(),
    name: '*' // enable all namespace
  }
  return ret
}

proto.getUserOptions = function() {
  var opt = util.getUserOptions('log_name log_level log_outputer'.split(' '))
  return {
    name: opt.log_name,
    level: opt.log_level,
    outputer: opt.log_outputer
  }
}

proto.autoChooseOutputer = function() {
  var outputer = _.noop
  if (safeConsole.hasConsole()) {
    if (util.supportBrowserColor()) {
      outputer = 'browser_console'
    } else {
      outputer = 'node_console'
    }
  }
  return outputer
}

proto.setOutputer = function(outputName) {
  var sdk = this
  var outputer = null
  if (is.string(outputName)) {
    outputer = sdk.outputers[outputName]
  } else if (is.fn(outputName)) {
    outputer = {handler: outputName}
  }
  if (outputer) {
    sdk.outputer = outputer
    if (is.fn(outputer.init)) {
      outputer.init(sdk)
    }
  }
}

proto.output = function(item) {
  var sdk = this
  if (item.enabled) {
    if (sdk.isLevelEnabled(item.level)) {
      // output enabled log
      sdk.outputer.handler(item, sdk)
      sdk.lastItem = item // save last enabled log
    }
  }
  sdk.appendHistory(item) // save all log
}

proto.isLevelEnabled = function(level) {
  var sdk = this
  if (level >= sdk.level) {
    return true
  }
  return false
}

proto.getRandomColor = function(name) {
  var sdk = this
  var color = sdk.colorMap[name]
  if (!color) {
    var colors = sdk.colors
    color = sdk.colorMap[name] = colors[sdk.colorIndex++ % colors.length]
  }
  return color
}

proto.setName = function(name) {
  // alias for setNamePattern
  return this.setNamePattern(name)
}

proto.setNamePattern = function(patternStr) {
  // refresh all loggers's enabled state
  var sdk = this
  sdk.pattern = normalizePattern(patternStr)
  _.forIn(sdk.loggers, function(logger) {
    logger.enabled = sdk.isNameEnabled(logger.name)
  })
}

proto.isNameEnabled = function(name) {
  var sdk = this
  var pattern = sdk.pattern
  function regMatch(reg) {
    return reg.test(name)
  }
  if (_.some(pattern.skips, regMatch)) {
    return false
  }
  if (_.some(pattern.names, regMatch)) {
    return true
  }
  return false
}

proto.setLevel = function(level) {
  this.level = Level.toCode(level)
}

proto.appendHistory = function(item) {
  var sdk = this
  sdk.history.push(item)
  if (sdk.history.length > sdk.historySize) {
    sdk.history.shift()
  }
}

proto.setHistorySize = function(historySize) {
  this.historySize = historySize
}

proto.getHistory = function() {
  return this.history
}

proto.disableHistory = function() {
  this.setHistorySize(0)
}

proto.clear = function() {
  this.history.length = 0
}

proto.save = function() {
  var sdk = this
  return _.map(sdk.history, function(item) {
    return _.map(item.data, function(val) {
      var ret = util.safeStringify(val)
      return ret
    }).join(' ')
  }).join('\r\n')
}

function normalizePattern(pattern) {
  var skips = []
  var names = []

  if (pattern && is.string(pattern)) {
    _.each(pattern.split(/[\s,]+/), function(name) {
      name = name.replace(/\*/g, '.*?')
      var first = name.charAt(0)
      if ('-' === first) {
        skips.push(new RegExp('^' + _.slice(name, 1) + '$'))
      } else {
        names.push(new RegExp('^' + name + '$'))
      }
    })
  }

  return {
    skips: skips,
    names: names
  }
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports.console = __webpack_require__(8)
exports.browser_console = __webpack_require__(26)
exports.node_console = __webpack_require__(27)
exports.file = __webpack_require__(28)
exports.browser_html = __webpack_require__(29)
exports.vconsole = __webpack_require__(38)


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(2)
var safeConsole = __webpack_require__(4)

var inherit = 'color:inherit'

exports.handler = function(item, sdk) {
  var lastItem = sdk.lastItem || {}
  var lastTime = lastItem.timestamp || item.timestamp

  var delta = item.timestamp - lastTime
  var colorStyle = 'color:' + item.color
  var label = sdk.prefix + item.name
  var main = '%c' + label + '%c'
  var arr = [null, colorStyle, inherit]

  _.each(item.data, function(val) {
    arr.push(val)
    main += ' %o'
  })

  arr.push(colorStyle)
  main += '%c +' + delta + 'ms'
  arr[0] = main
  safeConsole.console('log', arr)
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var safeConsole = __webpack_require__(4)

// TODO
exports.handler = function(item) {
  safeConsole.console('log', item.data)
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// TODO


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _ = __webpack_require__(2)
var util = __webpack_require__(6)

function Output() {
  this.inited = false
  this.box = null
}

var proto = Output.prototype

proto.init = function(sdk) {
  if (!this.inited) {
    this.inited = true
    var doc = global.document
    if (doc) {
      this.box = doc.createElement('div')
      this.box.style.cssText = 'z-index:999;padding:16px;height:300px;overflow:auto;line-height:1.4;background:#242424;color:#fff;font:16px Consolas;border:none;text-align:left'
      var parent = doc.body || doc.documentElement
      parent.insertBefore(this.box, parent.firstChild)
    }
  }
}

proto.handler = function(item, sdk) {
  if (!global.document) {
    return
  }
  var lastItem = sdk.lastItem || {}
  var lastTime = lastItem.timestamp || item.timestamp

  var delta = item.timestamp - lastTime
  var label = sdk.prefix + item.name
  var arr = [label]

  _.each(item.data, function(val) {
    arr.push(util.safeStringify(val))
  })
  arr.push('+' + delta + 'ms')
  var line = document.createElement('div')
  util.text(line, arr.join(' '))
  line.style.color = item.color
  this.box.appendChild(line)
}

module.exports = new Output()

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)
var is = _.is

_.isString = is.string

_.isArray = is.array

_.isArrayLike = is.arraylike

_.isBoolean = is.bool

_.isElement = is.element

_.isEmpty = is.empty

_.isFunction = is.fn

_.isInteger = is.integer

_.isNaN = is.nan

_.isNumber = is.number

_.isObject = is.object

_.isPlainObject = is.plainObject

_.isRegExp = is.regexp

_.isString = is.string

_.isUndefined = is.undef


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)
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


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)

var each = _.each
var includes = _.includes
var is = _.is
var proto = Array.prototype

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

_.first = function(arr) {
	if (arr) return arr[0]
}

_.last = function(arr) {
	var len = _.len(arr)
	if (len) {
		return arr[len - 1]
	}
}

_.asyncMap = function(arr, fn, cb) {
	// desperate
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
	return _.uniqBy(arr)
}

_.uniqBy = function(arr, fn) {
	var ret = []
	var pool = []
	if (!is.fn(fn)) {
		fn = null
	}
	each(arr, function(item) {
		var val = item
		if (fn) {
			val = fn(item)
		}
		if (!includes(pool, val)) {
			pool.push(val)
			ret.push(item)
		}
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
	return [hash[1] || [], hash[2] || []]
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

_.range = function() {
	var args = arguments
	if (args.length < 2) {
		return _.range(args[1], args[0])
	}
	var start = args[0] || 0
	var last = args[1] || 0
	var step = args[2]
	if (!is.number(step)) {
		step = 1
	}
	var count = last - start
	if (0 != step) {
		count = count / step
	}
	var ret = []
	var val = start
	for (var i = 0; i < count; i++) {
		ret.push(val)
		val += step
	}
	return ret
}

_.pullAt = function(arr) {
	// `_.at` but mutate
	var indexes = _.slice(arguments, 1)
	return mutateDifference(arr, indexes)
}

function mutateDifference(arr, indexes) {
	var ret = []
	var len = _.len(indexes)
	if (len) {
		indexes = indexes.sort(function(a, b) {
			return a - b
		})
		while (len--) {
			var index = indexes[len]
			ret.push(proto.splice.call(arr, index, 1)[0])
		}
	}
	ret.reverse()
	return ret
}

_.remove = function(arr, fn) {
	// `_.filter` but mutate
	var len = _.len(arr) || 0
	var indexes = []
	while (len--) {
		if (fn(arr[len], len, arr)) {
			indexes.push(len)
		}
	}
	return mutateDifference(arr, indexes)
}

_.fill = function(val, start, end) {
	// TODO
}

_.size = function(val) {
	// size is safe length
	var size = 0
	if (val) {
		var len = val.length
		if (_.isInteger(len) && len >= 0) {
			size = len
		} else if (_.isObject(val)) {
			size = _.keys(val).length
		}
	}
	return size
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)

var is = _.is
var each = _.each
var forIn = _.forIn

_.only = function(obj, keys) {
	obj = obj || {}
	if (is.string(keys)) keys = keys.split(/ +/)
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

_.mapKeys = function(obj, fn) {
	var ret = {}
	forIn(obj, function(val, key, obj) {
		var newKey = fn(val, key, obj)
		ret[newKey] = val
	})
	return ret
}

_.mapObject = _.mapValues = function(obj, fn) {
	var ret = {}
	forIn(obj, function(val, key, obj) {
		ret[key] = fn(val, key, obj)
	})
	return ret
}

// return value when walk through path, otherwise return empty
_.get = function(obj, path) {
	path = toPath(path)
	if (path.length) {
		var flag = _.every(path, function(key) {
			if (null != obj) { // obj can be indexed
				obj = obj[key]
				return true
			}
		})
		if (flag) return obj
	}
}

_.has = function(obj, path) {
	path = toPath(path)
	if (path.length) {
		var flag = _.every(path, function(key) {
			if (null != obj && is.owns(obj, key)) {
				obj = obj[key]
				return true
			}
		})
		if (flag) return true
	}
	return false
}

_.set = function(obj, path, val) {
	path = toPath(path)
	var cur = obj
	_.every(path, function(key, i) {
		if (is.oof(cur)) {
			if (i + 1 == path.length) {
				cur[key] = val
			} else {
				var item = cur[key]
				if (null == item) {
					// fill value with {} or []
					var item = {}
					if (~~key == key) {
						item = []
					}
				}
				cur = cur[key] = item
				return true
			}
		}
	})
	return obj
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

_.invert = function(obj) {
	var ret = {}
	forIn(obj, function(val, key) {
		ret[val] = key
	})
	return ret
}

// topath, copy from lodash

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g
var reEscapeChar = /\\(\\)?/g;

function toPath(val) {
	if (is.array(val)) return val
	var ret = []
	_.tostr(val).replace(rePropName, function(match, number, quote, string) {
		var item = number || match
		if (quote) {
			item = string.replace(reEscapeChar, '$1')
		}
		ret.push(item)
	})
	return ret
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)

var is = _.is
var slice = _.slice

_.bind = function(fn, ctx) {
	if (is.string(ctx)) {
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

memoize.Cache = __webpack_require__(35)

_.memoize = memoize

_.wrap = function(val, fn) {
	return function() {
		var args = [val]
		args.push.apply(args, arguments)
		return fn.apply(this, args)
	}
}

_.curry = function(fn) {
	var len = fn.length
	return setter([])

	function setter(args) {
		return function() {
			var arr = args.concat(_.slice(arguments))
			if (arr.length >= len) {
				arr.length = len
				return fn.apply(this, arr)
			}
			return setter(arr)
		}
	}
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0)
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


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)

_.tostr = tostr // lodash toString

var indexOf = _.indexOf

_.split = function(str, separator, limit) {
	str = tostr(str)
	return str.split(separator, limit)
}

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

_.startsWith = function(str, val) {
	return 0 == indexOf(str, val)
}

_.endsWith = function(str, val) {
	val += '' // null => 'null'
	return val == _.slice(str, _.len(str) - _.len(val))
}

_.lower = function(str) {
	// lodash toLower
	return tostr(str).toLowerCase()
}

_.upper = function(str) {
	// lodash toUpper
	return tostr(str).toUpperCase()
}

_.repeat = function(str, count) {
	return _.map(_.range(count), function() {
		return str
	}).join('')
}

_.padStart = function(str, len, chars) {
	str = _.tostr(str)
	len = len || 0
	var delta = len - str.length
	return getPadStr(chars, delta) + str
}

_.padEnd = function(str, len, chars) {
	str = _.tostr(str)
	len = len || 0
	var delta = len - str.length
	return str + getPadStr(chars, delta)
}

function getPadStr(chars, len) {
	chars = _.tostr(chars) || ' ' // '' will never end
	var count = Math.floor(len / chars.length) + 1
	return _.repeat(chars, count).slice(0, len)
}

function tostr(str) {
	if (str || 0 == str) return str + ''
	return ''
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _ = module.exports = __webpack_require__(0)

_.sum = function(arr) {
	return _.reduce(arr, function(sum, val) {
		return sum + val
	}, 0)
}

_.max = function(arr, fn) {
	var index = -1
	var data = -Infinity
	fn = fn || _.identity
	_.each(arr, function(val, i) {
		val = fn(val)
		if (val > data) {
			data = val
			index = i
		}
	})
	if (index > -1) {
		return arr[index]
	}
	return data
}

_.min = function(arr, fn) {
	var index = -1
	var data = Infinity
	fn = fn || _.identity
	_.each(arr, function(val, i) {
		val = fn(val)
		if (val < data) {
			data = val
			index = i
		}
	})
	if (index > -1) {
		return arr[index]
	}
	return data
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// inspired by https://github.com/AlloyTeam/AlloyLever/blob/master/alloy-lever.js

var console = __webpack_require__(8)

function Output() {
  this.inited = false
}

var proto = Output.prototype

proto.init = function() {
  if (!this.inited) {
    this.inited = true
    var vConsoleUrl = '//s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js'
    loadScript(vConsoleUrl, function() {
      // default show
      try {
        vConsole.show()
      } catch (e) {}
      window.addEventListener('load', function() {
        vConsole.show()
      })
    })
  }
}

proto.handler = console.handler

function loadScript(src, callback){
  var s,
    r,
    t
  r = false
  s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = src
  s.onload = s.onreadystatechange = function() {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if ( !r && (!this.readyState || this.readyState == 'complete') ) {
      r = true
      callback()
    }
  }
  t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}

module.exports = new Output()


/***/ })
/******/ ]);
});