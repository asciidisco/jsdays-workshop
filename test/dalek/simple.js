'use strict';

module.exports = {

	'Homepage title is as expected': function (test) {
		test.open('http://localhost:5001')
			.assert.title('Frontend Testing Workshop', 'Homepage title is as expected')
			.done();
	}

};