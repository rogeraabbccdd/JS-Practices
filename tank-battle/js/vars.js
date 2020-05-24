var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')

var fps = 60

var gridCols = 20
var gridRows = 15
var gridW = 40
var gridH = 40
// 0 = road
// 1 = wall
// 2 = tree
// 3 = brick
// 4 = spawn
var gridsDefault = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1,
  1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 2, 1,
  1, 2, 0, 1, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 3, 2, 1, 1, 1, 1, 1, 1, 2, 3, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 1, 2, 1,
  1, 2, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
  1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1,
  1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]
var grids = gridsDefault.slice()

var wallImg = new Image()
wallImg.src = './images/track_wall.png'
var roadImg = new Image()
roadImg.src = './images/track_road.png'
var brickImg = new Image()
brickImg.src = './images/track_brick.png'
var treeImg = new Image()
treeImg.src = './images/track_tree.png'
var tank1Img = new Image()
tank1Img.src = './images/tank1.png'
var tank2Img = new Image()
tank2Img.src = './images/tank2.png'

var bullets = []
var bulletSpeed = 3
var bulletRadius = 5

// status
// 0 = not start
// 1 = in game
// 2 = finish
var gameStatus = 0
var gameWinner = 0
var titleImg = new Image()
titleImg.src = './images/title.png'
var titleW = 370
var titleH = 136
var titleX = canvas.width/2 - titleW/2
var titleY = canvas.height/2 - titleH/2 - 100
var startImg = new Image()
startImg.src = './images/start.png'
var startW = 227
var startH = 87
var startX = (canvas.width/2) - (startW/2)
var startY = (canvas.height/2) - (startH/2) + 100
var ggImg = new Image()
ggImg.src = './images/gg.png'
var ggW = 370
var ggH = 179
var ggX = (canvas.width/2) - (ggW/2)
var ggY = (canvas.height/2) - (ggH/2) - 100