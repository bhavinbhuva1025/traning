document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.calculator-buttons');
    let currentInput = '';

    buttons.addEventListener('click', (e) => {
        const value = e.target.textContent;            

        if (e.target.classList.contains('number') || e.target.classList.contains('operator')) {
            currentInput += value;
            display.value = currentInput; 
        } else if (e.target.classList.contains('clear')) {
            currentInput = '';
            display.value = '';
        } else if (e.target.classList.contains('equals')) {
            try {
                // Use eval for a basic calculator, but be aware of security risks for complex apps
                display.value = eval(currentInput);
                currentInput = display.value;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        }
    });
});

  