'use strict'
;(function () {
    const topLine = document.querySelector('.top')
    const bottomLine = document.querySelector('.bottom')
    const btn = document.querySelector('.btn')
    let isOpen = false
    function open() {
        btn.classList.add('active')
        setTimeout(() => {
            topLine.classList.add('rotate')
            bottomLine.classList.add('rotate')
        }, 500)
    }
    function close() {
        topLine.classList.remove('rotate')
        bottomLine.classList.remove('rotate')
        setTimeout(() => {
            btn.classList.remove('active')
        }, 500)
    }
    btn.addEventListener('click', function () {
        isOpen = !isOpen
        isOpen ? open() : close()
        console.log(isOpen)
    })
})()
