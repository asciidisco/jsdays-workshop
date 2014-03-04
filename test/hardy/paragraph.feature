Feature: Paragraph test
As a user I want visual consistency of paragraphs on the Frontend Testing website

Scenario: Paragraph consistency

Given I visit "http://localhost:5001/index.html"
Then "standard paragraph" should have "color" of "rgba(67, 33, 0, 1)"
Then "standard paragraph" should have "font-size" of "16px"
Then "standard paragraph" should have "background-color" of "rgba(0, 0, 0, 0)"