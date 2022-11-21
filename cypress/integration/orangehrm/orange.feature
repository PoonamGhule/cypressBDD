Feature:validate the login functionality

    Scenario:validate with valid credantial
        Given Visit the orange hrm site
        When Enter valid orange hrm username
        And Enter the valid orange hrm password
        Then Click on submit button
        And Validate the orange hrm dashboard

  Scenario:validate with invalid credantial
    Given Visit the orange hrm site
    When Enter invalid username
    And Enter the invalid password
    Then Click on submit button
    And Validate the error
