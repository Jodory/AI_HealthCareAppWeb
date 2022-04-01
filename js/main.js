const loading = document.querySelector(".loading-container")
const login = document.querySelector('.login')
const nonMembers = document.querySelector('.login .none-members')

const btn = document.querySelector('.btn')
const all = document.querySelector('body')

loading.addEventListener('click', function() {
    loading.style.display = 'none';

    login.style.display = 'contents'
})