'use strict'
;(function () {
    let btn = document.querySelector('.btn')
    let mail = document.querySelector('.mail')
    let plane = document.querySelector('.plane')
    function setButtonAnimation() {
        if (btn.classList.contains('reset')) {
            btn.style = ''
            btn.classList.remove('reset')
            mail.classList.remove('send')
            plane.classList.remove('send')
            btn.textContent = 'SEND MAIL'
        } else {
            btn.classList.add('send')
            setMailAnimation()
            setTimeout(() => {
                btn.classList.remove('send')
                btn.classList.add('reset')
                btn.style.transform = 'scale(0)'
                btn.style.opacity = '0'
                btn.textContent = 'RESET'
            }, 3200)
            setTimeout(() => {
                btn.style.transform = 'scale(1)'
                btn.style.opacity = '1'
            }, 3700)
        }
    }
    function setMailAnimation() {
        mail.classList.add('send')
        plane.classList.add('send')
    }
    btn.addEventListener('click', setButtonAnimation)
})()
