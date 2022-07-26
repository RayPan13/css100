'use strict'
;(function () {
    const info = document.querySelector('.info')
    const tooltip = document.querySelector('.tooltip')
    tooltip.addEventListener('mouseenter', function () {
        info.classList.add('active')
    })
    tooltip.addEventListener('mouseleave', function () {
        info.classList.remove('active')
    })
    info.addEventListener('mouseenter', function () {
        info.classList.add('active')
    })
    info.addEventListener('mouseleave', function () {
        info.classList.remove('active')
    })
})()
