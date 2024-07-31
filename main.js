const cookieImg = document.querySelector('#cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnCookie = document.querySelector('button')

cookieImg.addEventListener('click', toggleScreen)

btnCookie.addEventListener('click', toggleScreen)

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}