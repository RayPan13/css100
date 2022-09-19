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
            pic.classList.toggle('small')
            if(idx === index){
                pic.classList.remove('small')
                pic.classList.toggle('big')
            }
        })
    }
})()
