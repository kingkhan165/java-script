function square(arg) {
  num1 = parseInt(document.querySelector("#input").value);
  result = document.querySelector("#output");

  if (arg == "click") {
    myvalue = num1 * num1;
    result.value = myvalue;
  }
}

function darkmode(arg) {
  X = document.querySelector(".main");

  if (arg == "click2") {
    X.classList.toggle("dark");
  }
}

function myfunction() {
  x = document.querySelector("#container");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
