'use strict';
;(function() {
    const tabs = document.querySelectorAll('.tab')
    function clickTab(target){
        tabs.forEach(el => el.classList.remove('active'))
        target.classList.add('active')
    }
    tabs.forEach(el => {
        el.addEventListener('click',function(e){
            clickTab(e.target)
        })
    })
})()