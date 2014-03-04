'use strict';

module.exports = {

	'Can execute a JS event': function (test) {
		var message = 'Hello World!';

		test.open('http://localhost:5001/about.html')
			.execute(function (message) {
				$(document).trigger('addMessage', [message]);
			}, message)
			.assert.text('.about-content p:last-child', message, 'Message added')
			.done();
	},

	'Form submit adds a timestamp': function (test) {
		test.open('http://localhost:5001/comments.html')
			.type('#name', 'Sebastian Golasch')
			.type('#email', 'public@asciidisco.de')
			.type('#comments', 'Some comment')
			.click('#submit')
			.waitFor(function (baseVal) {
				return (window.commentTimestamp && (window.commentTimestamp !== baseVal));
			}, [0], 10000)
			.execute(function () {
				var time = new Date(window.commentTimestamp);
				this.assert.ok((time.getMonth() === 2), 'Month has been set correct in the timestamp');
			})
			.done();
	},

	'Can move data around': function (test) {
		test.open('http://localhost:5001/about.html')
			.execute(function () {
				var message = Math.random().toString(36).substring(7);
				$(document).trigger('addMessage', [message]);
				this.data('lastMessage', message);
			})
			.execute(function () {
				var msg = $('.about-content p:last-child').text();
				this.assert.ok(msg === this.data('lastMessage'), 'Random message added');
			})
			.done();
	},


};