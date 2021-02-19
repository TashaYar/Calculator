// display value function
function dis(val) {
  document.getElementById("result").value += val;
}

//result function
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// display result function
function clr() {
  document.getElementById("result").value = "";
}
