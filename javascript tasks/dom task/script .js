
const modeToggleButton = document.getElementById('btn');
const statusMessage = document.getElementById('mode');
const bodyElement = document.body; 

modeToggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    if (bodyElement.classList.contains('dark-mode')) {
        
        modeToggleButton.textContent = 'Switch to Light Mode';
        
        statusMessage.textContent = 'Current Mode: Dark';
        
    } else {
        
        modeToggleButton.textContent = 'Switch to Dark Mode';

        statusMessage.textContent = 'Current Mode: Light';
    }
});
