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
