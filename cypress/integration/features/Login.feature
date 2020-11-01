Feature: Login

Feature Description
I want to log into Link Springer

Scenario: LegalBox Negative Login
Given I open LegalBox login page
When I type invalid
    | email | password |
    | yusufolaideyusuf@gmail.com | junio |
And I click on Log in button
Then "password is incorrect" should definitely be shown

Scenario: LegalBox Positive Login
Given I open LegalBox login page
When I type in valid
    | email | password |
    | yusufolaideyusuf@gmail.com | Junior@12 |
And I click on Log in button
Then "Welcome! You are successfully logged in" should be shown
Then New URL should be shown