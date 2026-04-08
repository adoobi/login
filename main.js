import { login } from './auth.js';

const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    message.textContent = "Loading...";

    try {
        const result = await login(email, password);
        message.style.color = "green";
        message.textContent = result;

        // redirect contoh
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (error) {
        message.style.color = "red";
        message.textContent = error;
    }
});
