Feature: Navigate Auden Credit/ShortTermLoan

@prod
Scenario: Monthly Loan Repayment Option
 Given I am on the auden short loan page
 When I select monthly loan instalment 
 Then I set first repayment day to weekend option will change to friday
 And I select min and max amounts of loan slider.
 Then I should see slider amount is loan