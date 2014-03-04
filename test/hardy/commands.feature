Feature: Comments test
As a user I want visual consistency of comments displayed

Scenario: Comments styling

Given I visit "http://localhost:5001/comments.html"
Then I enter 'Sebastian' into '#name'
Then I enter 'foo@bar.de' into '#email'
Then I submit the form 'form'
Given I wait for "4" seconds
Then "heading-2" should have "font-size" of "48px"
Then "#comment-placeholder p:first-child span" should have "color" of "rgba(67, 33, 0, 1)"