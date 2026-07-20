const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', () => {
    const name = nameInput.ariaValueMax.trim();
    greeting.textContent = name ? `Nice to meet you, ${name}!` : '';

});
