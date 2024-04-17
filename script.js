// Average Calculator
document.getElementById("calc-btn").addEventListener("click", calcAverage);

function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  s;
  let rounded = num1.toFixed(2);
  let tangent = Math.tan(num1);
  let random = Math.random() * 10;

  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("jamal1").innerHTML = sum;
  document.getElementById("jamal2").innerHTML = product;
  document.getElementById("jamal3").innerHTML = remainder;
  document.getElementById("jamal4").innerHTML = power;
  document.getElementById("jamal5").innerHTML = rounded;
  document.getElementById("jamal6").innerHTML = tangent;
  document.getElementById("jamal7").innerHTML = random;
}
