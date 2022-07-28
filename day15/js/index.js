'use strict'
;(function () {
    const uploadBox = document.querySelector('.uploadBox')
    const uploadIcon = document.querySelector('.upload')
    const uploadBtn = document.querySelector('.uploadBtn')
    const fileName = document.querySelector('.uploadBox span')
    const transitionIcon = document.querySelector('.transition')
    const doneIcon = document.querySelector('.done')
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
        setTimeout(() => {
            uploadDone()
        }, 3000)
    }
    function uploadDone() {
        uploadBox.style.display = 'none'
        doneIcon.style.display = 'flex'
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
