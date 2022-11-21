Feature: visit ecommerce site

    Scenario:add to cart send delivery
        Given Visit the online vegies site
        When Enter the veggies name start from "ca"
        And  Click on "Carrot" cart
        Then place order and select country and click check box
        And Validate the thank you message

    Scenario:add to cart send delivery
        Given Visit the online vegies site
        When Enter the veggies name start from "br"
        And  Click on "Brocolli" cart
        Then place order and select country and click check box
        And Validate the thank you message

    Scenario:add to cart send delivery
        Given Visit the online vegies site
        When Enter the veggies name start from "cu"
        And  Click on "Cucumber" cart
        Then place order and select country and click check box
        And Validate the thank you message


