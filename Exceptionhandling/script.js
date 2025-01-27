function performDivision() {
  const numerator = parseFloat(document.getElementById("numerator").value);
  const denominator = parseFloat(document.getElementById("denominator").value);
  const resultElement = document.getElementById("result");

  try {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    let result = numerator / denominator;

    if (!isFinite(result)) {
      throw new Error("Result is not a valid number.");
    }

    resultElement.textContent = result;
  } catch (error) {
    resultElement.textContent = error.message;
    console.error("Something went wrong ${error.message}");
  }
}
