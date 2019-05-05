
'use strict'

function createButton(createNode,k) {
    //this class requires every edge and node to have a function
    //that can draw a miniture version of itself in an area of 30 by 30
    //pixels in a function called drawButtonImage(Button), which takes a canvas element.
    //The function will be used to
    //draw an image of the node or edge on the button in the canvas element.
    var canvas = document.createElement('canvas')
    var tempNode = createNode(20,20,20)
    canvas.id = 'button'+String(k)
    canvas.width =  40
    canvas.height = 40
    canvas.style.zIndex = 8;
    canvas.style.position = 'absolute'
    canvas.style.border = "1px solid"
   
    canvas.style.left = String((k % 2)*45 + 10)+'px'
    canvas.style.top = String(Math.floor(k/2)*45 + 10)+ 'px'


    var div = document.getElementsByTagName('div')[0];
    div.appendChild(canvas);
    tempNode.drawButton(canvas)

    return canvas
}




