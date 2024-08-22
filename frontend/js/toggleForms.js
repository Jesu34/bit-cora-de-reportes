document.getElementById('loginToggle').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('active-form');
    document.getElementById('registerForm').classList.remove('active-form');
    this.classList.add('active');
    document.getElementById('registerToggle').classList.remove('active');
});

document.getElementById('registerToggle').addEventListener('click', function () {
    document.getElementById('registerForm').classList.add('active-form');
    document.getElementById('loginForm').classList.remove('active-form');
    this.classList.add('active');
    document.getElementById('loginToggle').classList.remove('active');
});