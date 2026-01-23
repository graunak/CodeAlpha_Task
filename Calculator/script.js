const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    appendValue(e.key);
  }
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});
