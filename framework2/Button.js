
'use strict'

class Button {
  constructor(createNode,k,type,graph,buttons){
    this.graph = graph
    this.buttons = buttons

    this.createNode = createNode
    this.type = type
    this.canvas = document.createElement('canvas')
    this.tempNode = createNode(20,20,20)
    this.ctx = this.canvas.getContext('2d')
    this.on = false
    this.canvas.id = 'button'+String(k)
    this.canvas.width =  40
    this.canvas.height = 40
    this.canvas.style.zIndex = 8;
    this.canvas.style.position = 'absolute'
    this.canvas.style.border = "1px solid"
	
    this.canvas.style.left = String((k % 3)*45 + 10)+'px'
    this.canvas.style.top = String(Math.floor(k/3)*45 + 10)+ 'px'


    var div = document.getElementsByTagName('div')[0];
    div.appendChild(this.canvas);
    this.tempNode.drawButton(this.canvas)

  }

  Switch(event){
    var old_element = document.getElementById('graphpanel')
    var new_element = old_element.cloneNode(true)
    var ctx = this.canvas.getContext('2d')
    old_element.parentNode.replaceChild(new_element,old_element)
    if(this.on){
      this.on = false
      ctx.beginPath()
      ctx.rect(0,0,40,40)
      ctx.fillStyle = 'white'
      ctx.fill()
      this.tempNode.drawButton(this.canvas)
    }
    else{
      for (const button of this.buttons){
        button.on = false
        ctx = button.canvas.getContext('2d')
        ctx.beginPath()
        ctx.rect(0,0,40,40)
        ctx.fillStyle = 'white'
        ctx.fill()
        button.tempNode.drawButton(button.canvas)
      }
      ctx = this.canvas.getContext('2d')
      this.on = true
      ctx.beginPath()
      ctx.rect(0,0,40,40)
      ctx.fillStyle = 'silver'
      ctx.fill()
      this.tempNode.drawButton(this.canvas)

      updateGraphListener(this,this.buttons,this.graph)	    
    }
    this.graph.draw()
  }
}






