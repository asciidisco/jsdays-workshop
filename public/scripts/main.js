(function () {
	// set initial stamp
	window.commentTimestamp = 0;

	$('#comments-form').on('submit', function (event) {
		// prevent form submit
		event.preventDefault();

		// reset comment timestamp
		window.commentTimestamp = 0;

		// get values
		var name = $('#name').val().trim();
		var email = $('#email').val().trim();
		var isPublic = $('#comments-form input[type="radio"]:checked').val() === 'public';
		var comment = $('#comments').val().trim();

		var $placeholder = $('#comment-placeholder');

		// template
		var tmpl = [
			'<p><strong>Name:</strong>&nbsp;<span>{{name}}</span></p>',
			'<p><strong>Mail:</strong>&nbsp;<span>{{email}}</span></p>',
			'<p><strong>Comment:</strong>&nbsp;<span>{{comment}}</span></p>'
		].join('');

		// check if mail should be public
		email = isPublic ? email : 'HIDDEN';
		
		// insert values into tmpl.
		var html = tmpl.replace('{{name}}', name).replace('{{email}}', email).replace('{{comment}}', comment);

		// processing
		$placeholder.html('processing');

		// simulate server roundtrip with settimeout
		setTimeout(function () {
			// set timestamp of the last commit
			window.commentTimestamp = (new Date());
			// insert template
			$placeholder.html(html);
		}, 2000);
	});

	// Custom event
	$(document).on('addMessage', function (event, message) {
		$('.about-content').append('<br/><p>' + message + '</p>');
	});

})();