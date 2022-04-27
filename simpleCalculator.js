function calculator(arg) {
  num1 = parseInt(document.querySelector("#num1").value);
  num2 = parseInt(document.querySelector("#num2").value);
  result = document.querySelector("#result");

  if (arg == "sum") {
    myvalue = num1 + num2;
    result.value = myvalue;
  } else if (arg == "sub") {
    myvalue = num1 - num2;
    result.value = myvalue;
  } else if (arg == "mul") {
    myvalue = num1 * num2;
    result.value = myvalue;
  } else if (arg == "div") {
    myvalue = num1 / num2;
    result.value = myvalue;
  }
}

function darkmode(arg) {
  X = document.querySelector(".calc");

  if (arg == "click2") {
    X.classList.toggle("dark");
  }
}
