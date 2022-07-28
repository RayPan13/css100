'use strict'
;(function () {
    const fileName = document.querySelector('.uploadBox span')
    const uploadIcon = document.querySelector('.uploadIcon')
    function showFileName(name) {
        uploadIcon.style.display = 'none'
        fileName.style.opacity = 1
        fileName.textContent = name
    }
    document.querySelector('.uploadBox input').addEventListener('change', function (e) {
        showFileName(e.target.files[0].name)
    })
})()
