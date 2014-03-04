'use strict';

var globalData = {
	name: 'Sebastian Golasch',
	mail: 'public@asciidisco.de',
	msg: 'Some comment'
};

module.exports = {

	'Can fill out form': function (test) {
		test.open('http://localhost:5001/comments.html')
			.type('#name', 'Sebastian Golasch')
			.type('#email', 'foo@bar.de')
			.click('#submit')
			.wait(4000)
			.done();
	},

	'Can fill out form & submit comment': function (test) {
		test.open('http://localhost:5001/comments.html')
			.type('#name', 'Sebastian Golasch')
			.type('#email', 'public@asciidisco.de')
			.type('#comments', 'Some comment')
			.click('#submit')
			.waitFor(function (baseVal) {
				return (window.commentTimestamp && (window.commentTimestamp !== baseVal));
			}, [0], 10000)
			.assert.text('#comment-placeholder p:first-child span', 'Sebastian Golasch')
			.done();
	},

	'Can fill out form, submit & protected mail': function (test) {
		var data = {
			name: 'Sebastian Golasch',
			mail: 'public@asciidisco.de',
			msg: 'Some comment'
		};

		test.open('http://localhost:5001/comments.html')
			.type('#name', data.name)
			.type('#email', data.mail)
			.type('#comments', data.msg)
			.click('input[value="notpublic"]')
			.click('#submit')
			.waitFor(function (baseVal) {
				return (window.commentTimestamp && (window.commentTimestamp !== baseVal));
			}, [0], 7500)
			.assert.text('#comment-placeholder p:first-child span', data.name)
			.assert.text('#comment-placeholder p:nth-child(2) span', 'HIDDEN')
			.assert.text('#comment-placeholder p:last-child span', data.msg)
			.done();
	},

	'Can fill out form, submit & public mail': function (test) {
		test.open('http://localhost:5001/comments.html')
			.type('#name', globalData.name)
			.type('#email', globalData.mail)
			.type('#comments', globalData.msg)
			.click('input[value="public"]')
			.click('#submit')
			.waitFor(function (baseVal) {
				return (window.commentTimestamp && (window.commentTimestamp !== baseVal));
			}, [0], 7500)
			.assert.text('#comment-placeholder p:first-child span', globalData.name)
			.assert.text('#comment-placeholder p:nth-child(2) span', globalData.mail)
			.assert.text('#comment-placeholder p:last-child span', globalData.msg)
			.done();
	}

};
