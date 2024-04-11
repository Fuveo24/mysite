const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navbar = document.getElementById('navbar');
const img = document.getElementById('img');
const text = document.getElementById('text');
const container = document.getElementById('container');
menuBtn.addEventListener('click', () => {
    navbar.style.display = 'block';
    menuBtn.style.display = 'none';
    img.style.top = '800px';
    text.style.top = '330px';
    container.style.height = '200vh';
});

closeBtn.addEventListener('click', () => {
    navbar.style.display = 'none';
    menuBtn.style.display = 'block';
    img.style.top = '500px';
    text.style.top = '0px';
    container.style.height = '180vh';
});