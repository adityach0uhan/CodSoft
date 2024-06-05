document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll(".key");

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const action = key.getAttribute("data-action");
      const keyValue = key.textContent;
      const displayValue = display.value;
      let newValue;

      if (!action) {
        if (displayValue === "0") {
          newValue = keyValue;
        } else {
          newValue = displayValue + keyValue;
        }
      } else if (action === "clear") {
        newValue = "";
      } else if (action === "delete") {
        newValue = displayValue.slice(0, -1);
      } else if (action === "percent") {
        newValue = (parseFloat(displayValue) / 100).toString();
      } else if (
        action === "divide" ||
        action === "multiply" ||
        action === "subtract" ||
        action === "add"
      ) {
        newValue = displayValue + ` ${keyValue} `;
      } else if (action === "calculate") {
        newValue = eval(
          displayValue.replace("×", "*").replace("÷", "/")
        ).toString();
      }

      display.value = newValue;
    });
  });
});
