'use strict'
;(function () {
    let pics = document.querySelectorAll('.pic')
    pics.forEach((el, index) => {
        el.addEventListener('click', function () {
            setAway()
        })
    })
    function setAway() {
        pics.forEach(pic => {
            pic.classList.toggle('away')
        })
    }
})()
