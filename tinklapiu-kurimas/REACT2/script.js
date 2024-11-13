function calculate(num1, num2, operation) {
  try {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        if (num2 == 0) throw new Error("Cannot divide by zero");
        break;
      default:
        throw new Error("Invalid operation");
    }
    return result;
  } catch (error) {
    console.error(error);
    if (obj[operation] === "undifined") {
      delete obj[operation];
    }
  }
}
console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 2, "&"));
