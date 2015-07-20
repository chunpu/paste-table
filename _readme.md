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
