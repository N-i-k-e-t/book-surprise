const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Boy'; // Changed to 'Boy' to match index.html
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();

    if (userInput === secretCode) {
        resultDiv.textContent = 'Access Granted, Friend!'; // Friendlier success message
        window.location.href = nextPageUrl;
    } else {
        resultDiv.textContent = 'Nope, not you! Try again, buddy.'; // Friendlier rejection message
    }
});