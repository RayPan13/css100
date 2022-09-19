'use strict'
;(function () {
    let pics = document.querySelectorAll('.pic')
    pics.forEach((el, index) => {
        el.addEventListener('click', function () {
            toggleActive(index)
        })
    })
    function toggleActive(idx) {
        pics.forEach((pic,index) => {
            pic.classList.toggle('away')
            if(idx === index){
                pic.classList.remove('away')
                pic.classList.toggle('active')
            }
        })
    }
})()
