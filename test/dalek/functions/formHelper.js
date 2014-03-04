'use strict';

module.exports = {

  fillFormSubmit: function (data, selectors, test) {
    test.type(selectors['name'], data.name)
        .type(selectors['mail'], data.mail)
        .type(selectors['message'], data.msg)
        .click((data.public ? selectors['public'] : selectors['notpublic']))
        .click(selectors['submit'])
        .waitFor(function (baseVal) {
            return (window.commentTimestamp && (window.commentTimestamp !== baseVal));
        }, [data.commentTimestampDefault], 7500);

    return test;
  },

  checkForm: function (data, selectors, test) {
    test.assert.text(selectors['comment-name'], data.name)
        .assert.text(selectors['comment-mail'], data.checkMail)
        .assert.text(selectors['comment-message'], data.msg);

    return test;
  }

};
