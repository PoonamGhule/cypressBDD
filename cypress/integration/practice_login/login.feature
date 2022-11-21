Feature:validate the login functionality

  Scenario:validate with valid credantial
    Given Visit the practice automation site
    When Enter valid username
    And Enter the valid password
    Then Click on submit button
    And Validate the dashboard

  Scenario:validate with invalid credantial
    Given Visit the practice automation site
    When Enter invalid username
    And Enter the invalid password
    Then Click on submit button
    And Validate the error

