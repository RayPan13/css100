'use strict';
;(function() {
    let nowNumber = 0
    const number = document.querySelector('.number span')

    function setNumber(){
        number.textContent = nowNumber
    }
    function calcNumber(direction){
        nowNumber = nowNumber + direction
        setTimeout(() => {
            number.classList.remove('down')
            number.classList.remove('up')
            setNumber()
        }, 500);
    }
    document.querySelector('.minus').addEventListener('click',function(){
        number.classList.add('down')
        calcNumber(-1)
    })
    document.querySelector('.plus').addEventListener('click',function(){
        number.classList.add('up')
        calcNumber(1)
    })
    setNumber()
})()