'use strict'
;(function () {
    const uploadIcon = document.querySelector('.upload')
    const fileName = document.querySelector('.uploadBox span')
    const transitionIcon = document.querySelector('.transition')
    const process = document.querySelector('.process')
    const uploadBox = document.querySelector('.uploadBox')
    const doneIcon = document.querySelector('.done')
    const uploadBtn = document.querySelector('.uploadBtn')
    let hasFiles = false
    function showFileName(name) {
        uploadIcon.style.opacity = 0
        fileName.style.opacity = 1
        fileName.textContent = name
    }
    function syncing() {
        fileName.style.opacity = 0
        transitionIcon.style.opacity = 1
        transitionIcon.classList.add('rotate')
        process.style.width = '100%'
        setTimeout(() => {
            uploadDone()
        }, 3000)
    }
    function uploadDone() {
        uploadBox.style.display = 'none'
        doneIcon.style.opacity = 1
        doneIcon.style.position = 'relative'
        uploadBtn.textContent = 'Done'
        hasFiles = false
    }
    document.querySelector('.uploadBox input').addEventListener('change', function (e) {
        hasFiles = e.target.files.length >= 1
        showFileName(e.target.files[0].name)
    })
    uploadBtn.addEventListener('click', function () {
        if (hasFiles) {
            syncing()
        }
    })
})()
