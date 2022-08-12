'use strict'
;(function () {
    const card = document.querySelector('.card')
    document.querySelector('button').addEventListener('click', function () {
        card.classList.add('first')
        setTimeout(() => {
            card.classList.remove('first')
        }, 1000)
    })
})()
