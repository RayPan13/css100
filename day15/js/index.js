'use strict'
;(function () {
    const fileName = document.querySelector('.uploadBox span')
    const uploadIcon = document.querySelector('.upload')
    const transitionIcon = document.querySelector('.transition')
    const process = document.querySelector('.process')
    let hasFiles = false
    function showFileName(name) {
        uploadIcon.style.display = 'none'
        fileName.style.opacity = 1
        fileName.textContent = name
    }
    function syncing() {
        fileName.style.opacity = 0
        transitionIcon.style.display = 'block'
        transitionIcon.classList.add('rotate')
        process.style.width = '100%'
    }
    document.querySelector('.uploadBox input').addEventListener('change', function (e) {
        hasFiles = e.target.files.length >= 1
        showFileName(e.target.files[0].name)
    })
    document.querySelector('.uploadBtn').addEventListener('click', function () {
        if (hasFiles) {
            syncing()
        }
    })
})()
