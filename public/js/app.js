async function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    const response = await fetch(`/api/${operation}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2 })
    });

    const result = await response.json();
    if (response.ok) {
        resultDiv.textContent = `Resultado: ${result.result}`;
    } else {
        resultDiv.textContent = `Error: ${result.error}`;
    }
}
