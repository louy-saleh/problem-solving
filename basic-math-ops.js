/*

    Your task is to create a function that does four basic mathematical operations.
    * The function should take three arguments - operation(string/char), value1(number), value2(number).
    * The function should return result of numbers after applying the chosen operation.

    ? Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
  //important function to use in JS:
  /*
  Using `eval()` in JavaScript can be dangerous if it is used improperly or with untrusted input. The `eval()` function allows the execution of arbitrary JavaScript code represented as a string. This can introduce significant security risks if the input passed to `eval()` comes from an untrusted source, such as user input or external APIs.

Here are a few reasons why using `eval()` can be dangerous:

1. Code Injection: If you directly evaluate user-provided input using `eval()`, it can lead to code injection attacks. An attacker might exploit this by injecting malicious code that can access sensitive information, modify data, or perform unauthorized actions.

2. Security Vulnerabilities: `eval()` can bypass certain security mechanisms, such as Content Security Policies (CSP), by executing code dynamically. This can expose your application to cross-site scripting (XSS) attacks and other vulnerabilities.

3. Performance Impact: `eval()` is a powerful but slow function. Using it unnecessarily or in a loop can significantly impact the performance of your application.

While there might be some legitimate use cases for `eval()`, such as dynamic code generation or parsing JSON, it is generally recommended to find alternative approaches that do not involve executing arbitrary code. For example, you can use `JSON.parse()` for parsing JSON, or evaluate code within a restricted sandbox environment.

Overall, it's important to exercise caution when using `eval()` and ensure that you properly validate and sanitize any input before passing it to this function.
  */
  return eval(value1 + operation + value2);

  // Best practice :
  //   switch (operation) {
  //     case "+":
  //       return value1 + value2;
  //     case "-":
  //       return value1 - value2;
  //     case "*":
  //       return value1 * value2;
  //     case "/":
  //       return value1 / value2;
  //     default:
  //       return -1;
  //   }
}

console.log(basicOp("&", 1, 2));
