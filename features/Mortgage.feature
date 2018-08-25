Feature: Test Mortgage application
Scenario: Test for basic business flow
Given I am able to access mortgage cart home page
When I click on Let's begin here
And I click on First time Buyer
And I click on Start Here
And I select I'm applying on my own
And I select Wales
And I slide the slide bar to 11,323
And I slide the slide bar to 4,678
And I select Yes
And I slide the slide bar to 20,969
And I select None of the above
And I select Yes
And I click on proceed
And I select A low introductory rate
Then I should see Reset Goals