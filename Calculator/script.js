const display = document.getElementById("display");
const closeButton = document.getElementById("close");

function clearDisplay() {
  display.value = "";
}

function addToDisplay(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

closeButton.addEventListener("click", () => {
  window.close();
});
