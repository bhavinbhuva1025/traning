const inputElement = document.getElementById('text-input');
const outputElement = document.getElementById('output-area');
inputElement.addEventListener('input', function() {
    outputElement.textContent = inputElement.value;
});
