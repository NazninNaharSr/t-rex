controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let speed = -75
game.splash("T-rex")
game.showLongText("Avoid the cacti", DialogLayout.Center)
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ..................
    ..................
    ..................
    ........fff.......
    ........f11.......
    ........fff.......
    ........fff.......
    .....f.fff........
    ...fffffff........
    .....fffff........
    .....ffff.........
    ......fff.........
    .....ff.ff........
    ......f.f.........
    ......f.f.........
    ..................
    ..................
    ..................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500

info.setScore(0)

game.onUpdateInterval(randint(500, 1500), function () {
    speed -= 5
    
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 . . . . . . . 
        . . . . . 6 7 5 6 . . . . . . 
        . . . . 8 7 7 d 5 e . . c . . 
        . . . . e 6 5 7 7 8 . c b 8 . 
        . . . . e b 7 b 5 8 c 7 1 e . 
        . . . . e b 7 b 7 7 1 7 7 e . 
        . c . . e 1 7 b 5 8 7 7 8 . . 
        6 1 6 . e 6 1 6 5 8 8 8 . . . 
        8 7 7 6 6 7 7 6 d 8 . . . . . 
        8 7 1 7 6 1 7 6 1 6 . . . . . 
        . 8 7 7 7 7 7 7 7 6 . . . . . 
        . . 8 6 e 7 1 b 7 6 . . . . . 
        . . . . e 1 7 6 1 6 . . . . . 
        . . . . e 6 7 6 7 6 . . . . . 
        . . . . e 6 7 7 7 6 . . . . . 
        . . . . e b 7 6 1 6 . . . . . 
        . . . 4 e b 6 6 b e 4 . . . . 
        . . . . . e e e e . . . . . . 
        `, speed, 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(2)
})
