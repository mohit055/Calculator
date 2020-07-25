// Function to Calculate the Output
function calc() {
  var a = parseInt(document.querySelector("#a").value);
  var b = parseInt(document.querySelector("#b").value);
  var op = document.querySelector("#op").value;
  var result;
  if (op == "Addition") {
    result = a + b;
  } else if (op == "Subtraction") {
    result = a - b;
  } else if (op == "Multiplication") {
    result = a * b;
  } else if (op == "Division") {
    result = a / b;
  }

  document.querySelector("#result").innerHTML = result;
}
