'use strict';
;(function() {
    const icon = document.querySelector('.icon')
    icon.addEventListener('click',function(){
        icon.classList.add('open')
        icon.classList.remove('close')
    })
})()