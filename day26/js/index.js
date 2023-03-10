'use strict'
;(function () {
    const card = document.querySelector('.card')
    let count = 0
    let animation = false
    let data = [
        {
            id: 1,
            title: 'The couch',
            desc: 'If you want to grow, get outside your comfort zone.',
        },
        {
            id: 2,
            title: 'Failing is learning',
            desc: 'Pick yourself up, dust yourself off, and start again.',
        },
        {
            id: 3,
            title: 'Flowers and rainbows',
            desc: 'Always be yourself, unless you can be a unicorn.',
        },
    ]
    document.querySelector('button').addEventListener('click', function () {
        if (!animation) {
            card.classList.add('first')
            animation = true
            count++
            setTimeout(() => {
                setContent(count)
            }, 750)
            setTimeout(() => {
                card.classList.remove('first')
                animation = false
            }, 1500)
        }
    })

    function setContent(count) {
        let obj = data[count % 3]
        document.querySelector('.number span').textContent = obj.id
        document.querySelector('.txt h3').textContent = obj.title
        document.querySelector('.txt p').textContent = obj.desc
    }
})()
