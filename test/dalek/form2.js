'use strict';

var data = require('./functions/configuration');
var selectors = require('./functions/selectors');
var helper = require('./functions/formHelper');

module.exports = {

  'Can fill out form, submit & protected mail': function (test) {
    test.open(data.url);
    data.public = false; 
    helper.fillFormSubmit(data, selectors, test);
    data.checkMail = 'HIDDEN';
    helper.checkForm(data, selectors, test)
    test.done();
  },

  'Can fill out form, submit & public mail': function (test) {
    test.open(data.url);
    data.public = true; 
    helper.fillFormSubmit(data, selectors, test);
    data.checkMail = data.mail;
    helper.checkForm(data, selectors, test)
    test.done();
  }

};
