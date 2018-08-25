Feature: Login feature

Scenario: Successful User Login
Given I am able to access magento web page
And I am able to navigate to user page
When I update the crentials 
And I click on Login
Then I should get magento ID