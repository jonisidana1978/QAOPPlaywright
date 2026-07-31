Feature: Ecommerce validations
@Regression 
Scenario Outline: Placing the order
    Given   a login to the Ecommerce application with "<username>" and  "<password>"
    Then Add "ZARA COAT 3" to Cart
    
    Examples:
        | username | password |
        | pallavsidana@yahoo.com | Sidana@10 |
  
  Scenario Outline: Placing the order
    Given   a login to the Ecommerce application with "<username>" and  "<password>"
    Then Add "ZARA COAT 3" to Cart
    
    Examples:
        | username | password |
        | pallavsidana@yahoo.com | Sidana@10 |
     