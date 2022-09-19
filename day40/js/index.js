'use strict'
;(function () {
    let pics = document.querySelectorAll('.pic')
    pics.forEach((el, index) => {
        el.addEventListener('click', function () {
            setAway(index)
        })
    })
    function setAway(idx) {
        pics.forEach((pic, index) => {
            idx === index ? pic.classList.add('active') : pic.classList.add('away')
        })
    }
})()
