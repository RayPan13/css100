'use strict'
;(function () {
    const viewLine = document.querySelector('#viewLine')
    const viewLineCtx = viewLine.getContext('2d')
    viewLineCtx.save()
    viewLineCtx.moveTo(20, 44)
    viewLineCtx.lineTo(59, 15)
    viewLineCtx.lineTo(98, 22)
    viewLineCtx.lineTo(139, 10)
    viewLineCtx.lineTo(179, 34)
    viewLineCtx.lineTo(219, 45)
    viewLineCtx.lineTo(259, 18)
    viewLineCtx.strokeStyle = '#fa7373'
    viewLineCtx.lineWidth = 2
    viewLineCtx.stroke()
    viewLineCtx.restore()

    const purchasesLine = document.querySelector('#purchasesLine')
    const purchasesLineCtx = purchasesLine.getContext('2d')
    purchasesLineCtx.save()
    purchasesLineCtx.moveTo(20, 19)
    purchasesLineCtx.lineTo(59, 11)
    purchasesLineCtx.lineTo(98, 24)
    purchasesLineCtx.lineTo(139, 18)
    purchasesLineCtx.lineTo(179, 24)
    purchasesLineCtx.lineTo(219, 33)
    purchasesLineCtx.lineTo(259, 23)
    purchasesLineCtx.strokeStyle = '#7ba2ff'
    purchasesLineCtx.lineWidth = 2
    purchasesLineCtx.stroke()
    purchasesLineCtx.restore()
})()
