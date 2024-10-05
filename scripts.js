// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const emberContainer = document.querySelector('.ember-container');
    for (let i = 0; i < 50; i++) { // Adjust the number of embers as needed
        const ember = document.createElement('div');
        ember.className = 'ember';
        ember.style.left = `${Math.random() * 100}vw`;
        ember.style.top = `${Math.random() * 100}vh`;
        emberContainer.appendChild(ember);
    }
});
