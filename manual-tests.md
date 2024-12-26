# 3. Manual tests
Given the following form:
```
<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles" min="10" max="100">
<button>Send</button>
```
Write all necessary test cases using Gherkin language to make sure the input field is working as expected; valid values will lead to a "Success" message, and invalid to an "Error" message.


## Test plan
The number of test cases needed depends on how thorough we want the testing to be. And how much time we have for testing. In general, it's important to cover all relevant scenarios to ensure the input validation behaves as expected. For the given form, the following 11 test cases should be sufficient. I have arranged them in order of priority from high to low. Also, there is no information that it is possibe to enter only integer numbers or decimal as well. I assume that the decimal numbers would return "Error".

1. Valid mid-range value: Enter 50 (expect "Success").
2. Invalid value range 100-...: Enter 500 (expect "Error").
3. Minimum valid value: Enter 10 (expect "Success").
4. Maximum valid value: Enter 100 (expect "Success").
5. Below minimum value: Enter 9 (expect "Error").
6. Above maximum value: Enter 101 (expect "Error").
7. Empty input: Leave the field empty (expect "Error").
8. Non-numeric input: Enter abc or special characters (e.g., ten) (expect "Error").
9. Invalid value 0: Enter 0 (expect "Error").
10. Decimal number within range: Enter 25.5 (expect "Error").
11. Negative values: Enter -50 (expect "Error").

## Test cases
### Feature: Tentacle Count Input Validation
    1. Scenario: User enters a valid number within range
        Given the user navigates to the form
        When the user enters "50" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Success" message

    2. Scenario: User enters an invalid number outside range
        Given the user navigates to the form
        When the user enters "500" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message

    3. Scenario: User enters a minimum valid number within range
        Given the user navigates to the form
        When the user enters "10" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Success" message

    4. Scenario: User enters a maximum valid number within range
        Given the user navigates to the form
        When the user enters "100" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Success" message

    5. Scenario: User enters a number below minimum value of the range
        Given the user navigates to the form
        When the user enters "9" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message

    6. Scenario: User enters a number above maximum value of the range
        Given the user navigates to the form
        When the user enters "101" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message

    7. Scenario: User leaves the form empty
        Given the user navigates to the form
        When the user leaves the "Number of tentacles" field emty
        And the user clicks the "Send" button
        Then the user sees a "Error" message

    8. Scenario: User enters a non-numeric value
        Given the user navigates to the form
        When the user enters "ten" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message

    9. Scenario: User enters 0
        Given the user navigates to the form
        When the user enters "0" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message
    
    10. Scenario: User enters decimal number within range
        Given the user navigates to the form
        When the user enters "25.5" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message
    
    11. Scenario: User enters negative number within range
        Given the user navigates to the form
        When the user enters "-50" in the "Number of tentacles" field
        And the user clicks the "Send" button
        Then the user sees a "Error" message
