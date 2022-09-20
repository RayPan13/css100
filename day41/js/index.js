'use strict';
;(function() {
    document.querySelector('button').addEventListener('click',function(e){
        e.preventDefault()
        this.parentElement.classList.remove('show')
    })
})()