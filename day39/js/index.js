'use strict'
;(function () {
    const icon = document.querySelector('.icon')
    const menu = document.querySelectorAll('.menu a')
    icon.addEventListener('click', function () {
        icon.classList.add('open')
        icon.classList.remove('close')
    })
    menu.forEach((el) => {
        el.addEventListener('click', function (e) {
            e.preventDefault()
            icon.classList.add('close')
            icon.classList.remove('open')
        })
    })
})()
