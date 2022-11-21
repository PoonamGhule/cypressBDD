Feature: validate the Automation Exersise site

    Scenario:login the valid credantial
        Given Visit the Automation Exersise site
        When Enter username and password
        Then click login button
        And Validate the dashboard

    Scenario: upload files
        Given open then contactus page
        When add your details
        Then validate the file upload message


