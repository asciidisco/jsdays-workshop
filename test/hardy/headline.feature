Feature: Headline test
As a user I want visual consistency of all headlines on the Frontend Testing website

Scenario: Headline consistency

Given I visit "http://localhost:5001/index.html"
Then "heading-1" should have "color" of "rgba(67, 33, 0, 1)"
Then "heading-1" should have "font-size" of "96px"
Then "heading-1" should have "background-color" of "rgba(0, 0, 0, 0)"
Then "heading-2" should have "color" of "rgba(67, 33, 0, 1)"
Then "heading-2" should have "font-size" of "48px"
Then "heading-2" should have "background-color" of "rgba(0, 0, 0, 0)"