'use strict'
;(function () {
    let btn = document.querySelector('.btn')
    let circle = document.querySelector('.circle')
    let mail = document.querySelector('.mail')
    let plane = document.querySelector('.plane')
    function setButtonAnimation() {
        if (btn.classList.contains('reset')) {
            initStatus()
        } else {
            btn.classList.add('send')
            setMailAnimation()
            setCircleAnimation()
            setTimeout(() => {
                btn.classList.remove('send')
                btn.classList.add('reset')
                btn.style.transform = 'translateX(-50%) scale(0)'
                btn.style.opacity = '0'
                btn.textContent = 'RESET'
            }, 3200)
            setTimeout(() => {
                btn.style.transform = 'translateX(-50%) scale(1)'
                btn.style.opacity = '1'
            }, 3700)
        }
    }
    function setMailAnimation() {
        mail.classList.add('send')
        plane.classList.add('send')
    }
    function setCircleAnimation() {
        circle.classList.add('send')
    }
    function initStatus() {
        btn.style = ''
        btn.classList.remove('reset')
        circle.classList.remove('send')
        mail.classList.remove('send')
        plane.classList.remove('send')
        btn.textContent = 'SEND MAIL'
    }
    btn.addEventListener('click', setButtonAnimation)
})()
