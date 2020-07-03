Feature: Get a quote on the homepage
As a new cusomter I want to get a quote

@test
Scenario: Get a quick quote on the homepage
 Given I am on the landing page
 When I click on get a quote
 Then I fill the claims form