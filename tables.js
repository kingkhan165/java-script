alert("You Can Search Any Type Of Table Such As: 1000 , 2000");
function table(arg) {
  ///////////// make the condition that user cannot enter alphabet's
  input = document.querySelector("#input");
  div = document.querySelector("div");
  const re = /^[a-zA-Z\s]+$/;

  if (re.test(input.value) == true || input.value == "") {
    div.innerHTML = "please enter somme NUMBER!";
    div.style.color = "red";
  } else {
    div.innerHTML = "";
    div.style.color = "black";

    ////////////// fetch the value of input feild
    valueofinput = parseInt(document.querySelector("#input").value);
    ////////////// |FOR LOOP ARE SARTED| \\\\\\\\\\\\\\
    // for (num1 = num1; num1 <= num3; num1 = num1 + num2) {
    for (let i = 1; i <= 10; i++) {
      ///////////// making the h4 element in div
      let h4 = document.createElement("h4");
      h4.innerText = valueofinput + " x " + i + " = " + valueofinput * i;
      div.appendChild(h4);
    }

    table_heading = document.getElementById("table_heading");
    table_heading.textContent = "Table of: " + valueofinput;

    span = document.getElementById("span");
    span.classList.add("blink");
  }
}

function del() {
  ///////////// get elements
  var parent = document.getElementById("main");
  var child = document.querySelector("div");
  ///////////// Delete child
  child.textContent = "";

  table_heading.textContent = "Tables:";
  input.value = "";

  span.classList.remove("blink");
}
