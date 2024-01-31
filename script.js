function generateMatrix() {
    const matrixSize = parseInt(document.getElementById("matrix-size").value);

    if (isNaN(matrixSize) || matrixSize < 2) {
        alert("Please enter a valid matrix size (minimum 2).");
        return;
    }

    const matrixContainer = document.getElementById("matrix-container");
    matrixContainer.innerHTML = "";

    for (let i = 1; i <= matrixSize; i++) {
        for (let j = 1; j <= matrixSize; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.placeholder = `Enter A[${i}][${j}]`;
            input.id = `A${i}_${j}`;
            matrixContainer.appendChild(input);
        }
        const breakLine = document.createElement("br");
        matrixContainer.appendChild(breakLine);
    }
}

function calculate() {
    // Implement Gauss Elimination with Back Substitution
    // Retrieve values from the input fields, perform the calculations, and display the result
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "Result will be displayed here";
}
