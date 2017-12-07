var PasteTable = require('../')

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
