Feature: Headline test
As a user I want a mobile friendly website of DalekJS

Scenario: Responsive layout

Given I visit "http://dalekjs.com"
And the window size is "1280" by "1024"
Then "h1.home" should have "font-size" of "116px"
And the window size is "480" by "320"
Then "h1.home" should have "font-size" of "60px"