function solveGauss() {
    var inputMatrix = document.getElementById("inputMatrix").value;
    var matrixRows = inputMatrix.split('\n');

    // Parse the input matrix
    var augmentedMatrix = matrixRows.map(row => row.split(' ').map(Number));

    // Perform Gaussian Elimination
    for (var i = 0; i < augmentedMatrix.length; i++) {
        for (var j = i + 1; j < augmentedMatrix.length; j++) {
            var ratio = augmentedMatrix[j][i] / augmentedMatrix[i][i];
            for (var k = 0; k <= augmentedMatrix.length; k++) {
                augmentedMatrix[j][k] -= ratio * augmentedMatrix[i][k];
            }
        }
    }

    // Perform Back Substitution
    var solution = new Array(augmentedMatrix.length);
    for (var i = augmentedMatrix.length - 1; i >= 0; i--) {
        solution[i] = augmentedMatrix[i][augmentedMatrix.length] / augmentedMatrix[i][i];
        for (var j = i - 1; j >= 0; j--) {
            augmentedMatrix[j][augmentedMatrix.length] -= augmentedMatrix[j][i] * solution[i];
        }
    }

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<strong>Solusi:</strong> " + solution.join(', ');
}
