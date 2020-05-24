class Tank {
  constructor(number, image, keyUp, keyDown, keyLeft, keyRight, keyFire) {
    this.firstSpawn = true
    this.image = image
    this.number = number
    this.spawnX = 0
    this.spawnY = 0
    this.x = 0
    this.y = 0
    this.angle = 0
    this.speed = 2
    this.keyUp = keyUp
    this.keyDown = keyDown
    this.keyLeft = keyLeft
    this.keyRight = keyRight
    this.keyFire = keyFire
    this.reset()
  }
  draw() {
    if(this.show && !this.destroyed) drawImage(this.image, this.x, this.y, this.angle)
  }
  reset() {
    const index = grids.indexOf(4)
    if(this.firstSpawn) {
      this.x = (index % gridCols) * gridW
      this.y = Math.floor(index / gridCols) * gridH
      this.spawnX = this.x
      this.spawnY = this.y
    }
    else {
      this.x = this.spawnX
      this.y = this.spawnY
    }
    grids[index] = 0

    this.firstSpawn = false

    if(this.number == 1) this.angle = 180
    else this.angle = 0

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.show = true
    this.fired = false
    this.destroyed = false
  }
  move() {
    if(this.up || this.down || this.left || this.right) {
      switch(this.angle) {
        case 0:
          this.y -= this.speed
          break
        case 90:
          this.x += this.speed
          break
        case 180:
          this.y += this.speed
          break
        case 270:
          this.x -= this.speed
          break
      }
    }

    this.checkGrid()
  }
  checkGrid() {
    const centerCol = Math.floor((this.x + this.image.width/2) / gridW)
    const centerRow = Math.floor((this.y + this.image.height/2) / gridH)
    const center = grids[centerRow*gridCols+centerCol]

    // tree
    this.show = true
    if (center == 2) this.show = false

    if(center == 1 || center == 3 || center == undefined) {
      if(this.up) this.y += this.speed
      if(this.down) this.y -= this.speed
      if(this.left) this.x += this.speed
      if(this.right) this.x -= this.speed

      this.up = false
      this.down = false
      this.left = false
      this.right = false
    }
  }
  fire() {
    bullets.push({x: this.x + this.image.width/2, y: this.y + this.image.height/2, angle: this.angle, owner: this.number})
  }
  hit() {
    this.destroyed = true
    setTimeout(() => {  
      gameStatus = 2
      gameWinner = this.number == 1 ? 2 : 1
    }, 100);
  }
  keydown(key) {
    switch(key) {
      case this.keyUp:
        this.up = true
        this.angle = 0
        break
      case this.keyDown:
        this.down = true
        this.angle = 180
        break
      case this.keyLeft:
        this.left = true
        this.angle = 270
        break
      case this.keyRight:
        this.right = true
        this.angle = 90
        break
      case this.keyFire:
        if(!this.fired) {
          this.fired = true
          this.fire()
        }
        break
    }
  }
  keyup(key) {
    switch(key) {
      case this.keyUp:
        this.up = false
        break
      case this.keyDown:
        this.down = false
        break
      case this.keyLeft:
        this.left = false
        break
      case this.keyRight:
        this.right = false
        break
      case this.keyFire:
        this.fired = false
        break
    }
  }
}