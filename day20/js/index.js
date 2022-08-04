'use strict'
;(function () {
    document.querySelector('.btn').addEventListener('click', function () {
        if (this.classList.contains('reset')) {
            this.style = ''
            this.classList.remove('reset')
            this.textContent = 'SEND MAIL'
        } else {
            this.classList.add('send')
            setTimeout(() => {
                this.classList.remove('send')
                this.classList.add('reset')
                this.style.transform = 'scale(0)'
                this.style.opacity = '0'
                this.textContent = 'RESET'
            }, 3200)
            setTimeout(() => {
                this.style.transform = 'scale(1)'
                this.style.opacity = '1'
            }, 3700)
        }
    })
})()
