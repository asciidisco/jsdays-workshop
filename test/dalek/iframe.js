'use strict';

module.exports = {

	'Embedded page works': function (test) {
		test.open('http://localhost:5001/info.html')
			.toFrame('[src="/iframe_contents.html"]')
				.assert.exists('h1', 'Headline exists')
				.assert.text('h1', 'Information', 'Headline text is correct')
				.assert.exists('h2', '2nd Headline exists')
				.assert.text('h2', 'I could be from another Domain', 'Headline text is correct')				
			.toParent()
			.done();
	},

	'Evented content updater works': function (test) {
		test.expect(1)
			.open('http://localhost:5001/info.html')
			.toFrame('[src="/iframe_contents.html"]')
				.waitFor(function () {
					return $('p').length > 0;
				}, [], 7500)
				.execute(function () {
					var lastmsg = $('p').text();
					this.assert.ok(lastmsg === window.lastMessage, 'Content updater works');
				})		
			.toParent()
			.done();
	}

};