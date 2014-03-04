'use strict';

module.exports = {
 
  'A lot of screenshots': function (test) {
		var resolutions = [
			{width: 1280, height: 1024}, 
			{width: 1024, height: 768}, 
			{width: 800, height: 600},
			{width: 640, height: 480},
			{width: 480, height: 320}
		];
		var pages = ['http://dalekjs.com'];
 		
 		pages.forEach(function (page) {
			resolutions.forEach(function (res) {
				test.open(page)
					.resize(res)
					.screenshot('report/pics/:browser_' + res.width + '_' + res.height + '_' + page.replace('http://', '') + '.png')
			});
		});
 
		test.done();
	}
}