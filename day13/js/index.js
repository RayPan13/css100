'use strict'
;(function () {
    let add = Array.from(document.querySelectorAll('.add'))
    let infoBox = document.querySelector('.infoBox')
    document.querySelector('.infoBox .close').addEventListener('click', function () {
        infoBox.classList.remove('active')
    })
    add.forEach((el) => {
        el.addEventListener('click', function () {
            infoBox.classList.add('active')
        })
    })
})()
