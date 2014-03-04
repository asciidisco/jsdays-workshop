'use strict';

module.exports = {

	'Top Navigation works': function (test) {
		test.open('http://localhost:5001')
			.click('nav a[href="/about.html"]')
			.assert.title('Frontend Testing Workshop - About', 'Can reach "About" page')
			.click('nav a[href="/comments.html"]')
			.assert.title('Frontend Testing Workshop - Comments', 'Can reach "Comments" page')
			.click('nav a[href="/info.html"]')
			.assert.title('Frontend Testing Workshop - Info', 'Can reach "Info" page')
			.done();
	},

	'Top Navigation works (with page-id)': function (test) {
		test.open('http://localhost:5001')
			.click('nav a[href="/about.html"]')
			.assert.attr('body', 'data-qa', 'pa-2', 'Can reach "About" page')
			.click('nav a[href="/comments.html"]')
			.assert.attr('body', 'data-qa', 'pa-3', 'Can reach "Comments" page')
			.click('nav a[href="/info.html"]')
			.assert.attr('body', 'data-qa', 'pa-4', 'Can reach "Info" page')
			.done();
	},

	'Top Navigation works (with page-id && back/forward buttons)': function (test) {
		test.open('http://localhost:5001')
			.click('nav a[href="/about.html"]')
			.assert.attr('body', 'data-qa', 'pa-2', 'Can reach "About" page')
			.back()
			.assert.attr('body', 'data-qa', 'pa-1', 'Can reach "Index" page via back button')
			.forward()
			.assert.attr('body', 'data-qa', 'pa-2', 'Can reach "About" page via forward button')
			.click('nav a[href="/comments.html"]')
			.assert.attr('body', 'data-qa', 'pa-3', 'Can reach "Comments" page')
			.back()
			.assert.attr('body', 'data-qa', 'pa-2', 'Can reach "About" page via back button')
			.forward()
			.assert.attr('body', 'data-qa', 'pa-3', 'Can reach "Comments" page via forward button')			
			.click('nav a[href="/info.html"]')
			.assert.attr('body', 'data-qa', 'pa-4', 'Can reach "Info" page')
			.back()
			.assert.attr('body', 'data-qa', 'pa-3', 'Can reach "Comments" page via back button')
			.forward()
			.assert.attr('body', 'data-qa', 'pa-4', 'Can reach "Info" page via forward button')				
			.done();
	}		

};