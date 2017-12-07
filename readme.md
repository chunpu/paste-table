totable
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/totable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/totable
[downloads-image]: http://img.shields.io/npm/dm/totable.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/totable
[david-image]: http://img.shields.io/david/chunpu/paste-table.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/paste-table




Installation
---

```sh
npm i totable
```

Usage
---

[Try it online](http://chunpu.github.io/paste-table/browser/)

```js
var PasteTable = require('paste-table')

PasteTable.onpaste(element, function(err, table) {
	if (!err) {
		var markdown = table.markdown()
		console.log(markdown)
	}
})
```

| `paste-table` need jQuery

UI
---

transfer table format

- `.markdown()` return [GFM table markdown](https://help.github.com/articles/github-flavored-markdown/) text string
- `.element()` return table element
- `.console()` use `console.table` to print table in console
- `.html()` return raw html text
- `.json()` return inside table value by json object
- `.confluence()` return [confluence wiki markup](https://confluence.atlassian.com/display/DOC/Confluence+Wiki+Markup)

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/totable.svg?style=flat-square
[license-url]: #
