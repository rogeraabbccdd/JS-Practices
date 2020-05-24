var drawImage = (image, x, y, ang = 0) => {
  if(ang > 0) {
    ctx.save()
    ctx.translate(x+image.width/2, y+image.height/2)
    ctx.rotate(Math.PI*ang/180)
    ctx.drawImage(image, -image.width/2, -image.height/2)
    ctx.restore()
  }
  else ctx.drawImage(image, x, y)
}

const drawCircle = (x, y, radius, color) => {
  // 填充圖形
  // 開始路徑 .beginPath()
  // 畫圓 .arc(X, Y, 半徑, 起始角(弧度), 結束角(弧度), 是否逆時針)，0.5 PI 為 1/4 圓
  // 填充目前路徑 .fill()
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI*2, true)
  ctx.fill()
}

var drawColor = (x, y, width, height, color) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

var drawText = (x, y, text) => {
  ctx.font = `40px Arial`
  ctx.textAlign = 'center'
  ctx.fillStyle = 'yellow'
  ctx.fillText(text, x, y)
}

var getGridType = (col, row) => {
  return grids[col*gridCols+row]
}