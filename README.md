# Mask phone number in JS

This script does the following: it checks the `<input>` fields on the page, puts "+7" at the very beginning when focusing on the input field, does not allow you to enter anything but numbers, and formats the input using the mask `+7 (123) 456-7890`

String 24 & 56: `var phone_inputs = document.querySelectorAll('input.phone');` - replace `'input.phone` to your class or id of input area

String 55: `const element = await waitForElementToExist('#expected-element');` - replace `'#expected-element'` to class or id of expected element (a modal window, for example)
