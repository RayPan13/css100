'use strict'
;(function () {
    let isClose = false
    document.querySelector('.btn').addEventListener('click', function () {
        if (isClose) {
            document.querySelector('.top').classList.toggle('rotate')
            document.querySelector('.bottom').classList.toggle('rotate')
            setTimeout(() => {
                this.classList.toggle('active')
            }, 500)
        } else {
            this.classList.toggle('active')
            setTimeout(() => {
                document.querySelector('.top').classList.toggle('rotate')
                document.querySelector('.bottom').classList.toggle('rotate')
            }, 500)
        }
        isClose = !isClose
    })
})()
