const button = document.querySelector('.one');
const scherm = document.querySelector('.scherm');

button.addEventListener('click', function () {
    // if (button.className === 'nummer') {
    scherm.textContent = button.textContent; 
})
