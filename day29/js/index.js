'use strict';
;(function() {
    const input = document.querySelector('.search input')
    const autocomplete = document.querySelector('.autocomplete')
    input.addEventListener('keyup',function(e){
        console.log(e.target.value)
        let value = e.target.value
        if(value === ''){
            autocomplete.style.display = 'none'
        }else{
            autocomplete.style.display = 'block'
            setAutocomplete(value)
        }
    })

    function setAutocomplete(value){
        let els = autocomplete.querySelectorAll('span')
        els.forEach(el => {
            el.textContent = value
        })
    }

})()