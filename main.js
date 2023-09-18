const display = document.getElementById("display");
display.value = 0;
function hesabla() {
  display.value = eval(display.value);
}
function yaz(x) {
  if (display.value === "0") {
    display.value = x;
  } else {
    display.value += x;
  }

  // display.value = display.value === "" ? x : display.value + x;
  // display.value = display.value + x;
}

function remove() {
  display.value = "0";
  // display.value = '0';
}

function clearDisplay() {
  display.value = display.value.slice(0, -1);
}
