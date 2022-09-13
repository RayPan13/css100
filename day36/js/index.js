'use strict';
;(function() {
    const tabs = document.querySelectorAll('.tab')
    const content = document.querySelector('.content')
    const textMapping = ['Dashboard','Comments','Notifications','Settings']
    let animation = false
    function clickTab(target){
        animation = true
        tabs.forEach(el => el.classList.remove('active'))
        content.classList.remove('active')
        target.classList.add('active')
        content.classList.add('active')
        setTimeout(() => {
            content.querySelector('h3').textContent = textMapping[target.dataset.idx]
        }, 500);
        setTimeout(() => {
            content.classList.remove('active')
            animation = false
        }, 1100);
    }
    tabs.forEach((el,index) => {
        if(index < textMapping.length){
            el.addEventListener('click',function(e){
                animation ? '': clickTab(e.target)
            })
        }

    })
})()