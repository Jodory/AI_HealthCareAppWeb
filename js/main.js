const loading = document.querySelector(".loading-container")
const login = document.querySelector('.login')
const login__h1 = document.querySelector('.login h1')

loading.addEventListener('click', function() {
    loading.style.display = 'none';

    login.style.display = 'contents'
})