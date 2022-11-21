Feature: visit ecommerce site

    Scenario:add to cart send delivery
        Given Visits the online vegies sites
        When Enter the veggies name which start from "ca"
        And Clicks on the "Carrot" cart
        Then place the order and select country and click check box
        And Validate the thank you message on dashboard


