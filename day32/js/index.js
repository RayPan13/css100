'use strict';
;(function() {
    let nowNumber = 5
    const number = document.querySelector('.number span')

    function setNumber(){
        number.textContent = nowNumber
    }
    function calcNumber(direction){
        nowNumber = nowNumber + direction
        setNumber()
    }
    document.querySelector('.minus').addEventListener('click',function(){
        calcNumber(-1)
    })
    document.querySelector('.plus').addEventListener('click',function(){
        calcNumber(1)
    })
    setNumber()
})()