Feature: Reqres API

    Scenario:Get user via API
        Given user send GET request toretrive multiple users
        Then users list should be display

    Scenario Outline: Create user
        Given user send POST request toretrive multiple users with "<name>" and "<job>"
        Then users should be display with "<name>" and "<job>"
        Examples:
            | name      | job          |
            | monika    | software eng |
            | pratiksha | software dev |
            | poonam    | E and TC     |

    Scenario Outline: update user
        Given user send PUT request toretrive multiple users with "<name>" and "<job>"
        Then users should be updated with "<name>" and "<job>"
        Examples:
            | name      | job      |
            | monika    | QA       |
            | pratiksha | Tester   |
            | poonam    | Electronics |
