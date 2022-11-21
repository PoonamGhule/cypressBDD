Feature:validate the practice automation login functionality

    Scenario:validate with valid credantial
        Given Visit the practice automation site for login
        When Enter valid practice automation username and password
            | username               | password   |
            | punamtambe27@gmail.com | poonam@789 |
        Then Click on submit button
        And Validate the dashboard text


    Scenario Outline: validate with valid credantial with multipleuser
        Given Visit the practice automation site for login
        When Enter valid practice automation "<username>" and "<password>"
        Then Click on submit button
        And Validate the dashboard text

        Examples:
            | username               | password    |
            | punamtambe27@gmail.com | poonam@789  |
            | gauri@test.com         | 12Minskole@ |
            | pratik@test.com        | @Minskole12 |

