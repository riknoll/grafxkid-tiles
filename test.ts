const allImages = [spritePackSprites.springBackground,spritePackSprites.springGroundTopLeft,spritePackSprites.springGroundTop,spritePackSprites.springGroundTopRight,spritePackSprites.springGroundLeft,spritePackSprites.springGround,spritePackSprites.springGroundRight,spritePackSprites.springGroundInnerBottomRight,spritePackSprites.springBush,spritePackSprites.springGroundInnerBottomLeft,spritePackSprites.fenceLeft,spritePackSprites.fence,spritePackSprites.fenceRight,spritePackSprites.springTree1,spritePackSprites.springTree2,spritePackSprites.springTree3,spritePackSprites.springTree4,spritePackSprites.winterBackground,spritePackSprites.winterGroundTopLeft,spritePackSprites.winterGroundTop,spritePackSprites.winterGroundTopRight,spritePackSprites.winterGroundLeft,spritePackSprites.winterGround,spritePackSprites.winterGroundRight,spritePackSprites.winterGroundInnerBottomRight,spritePackSprites.winterGroundInnerBottomLeft,spritePackSprites.winterBush,spritePackSprites.winterFenceLeft,spritePackSprites.winterFence,spritePackSprites.winterFenceRight,spritePackSprites.winterTree1,spritePackSprites.winterTree2,spritePackSprites.winterTree3,spritePackSprites.winterTree4,spritePackSprites.summerBackground,spritePackSprites.summerGroundTopLeft,spritePackSprites.summerGroundTop,spritePackSprites.summerGroundTopRight,spritePackSprites.summerGroundLeft,spritePackSprites.summerGround,spritePackSprites.summerGroundRight,spritePackSprites.summerGroundInnerBottomRight,spritePackSprites.summerGroundInnerBottomLeft,spritePackSprites.summerRock,spritePackSprites.summerFenceLeft,spritePackSprites.summerFence,spritePackSprites.summerFenceRight,spritePackSprites.summerTree1,spritePackSprites.summerTree2,spritePackSprites.summerTree3,spritePackSprites.summerTree4,spritePackSprites.fallBackground,spritePackSprites.fallGroundTopLeft,spritePackSprites.fallGroundTop,spritePackSprites.fallGroundTopRight,spritePackSprites.fallGroundLeft,spritePackSprites.fallGround,spritePackSprites.fallGroundRight,spritePackSprites.fallGroundInnerBottomRight,spritePackSprites.fallGroundInnerBottomLeft,spritePackSprites.fallBush,spritePackSprites.fallFenceLeft,spritePackSprites.fallFence,spritePackSprites.fallFenceRight,spritePackSprites.fallTree1,spritePackSprites.fallTree2,spritePackSprites.fallTree3,spritePackSprites.fallTree4,spritePackSprites.springBackgroundAlt,spritePackSprites.springGroundTopLeftAlt,spritePackSprites.springGroundTopAlt,spritePackSprites.springGroundTopRightAlt,spritePackSprites.springGroundLeftAlt,spritePackSprites.springGroundAlt,spritePackSprites.springGroundRightAlt,spritePackSprites.springBlock,spritePackSprites.blueBrickBlock,spritePackSprites.lightBrickBlock,spritePackSprites.pinkBrickBlock,spritePackSprites.brickBlock,spritePackSprites.obstacleBlock,spritePackSprites.springTree1Alt,spritePackSprites.springTree2Alt,spritePackSprites.springGrass,spritePackSprites.springTree3Alt,spritePackSprites.springTree4Alt,spritePackSprites.iceBlock,spritePackSprites.winterBackgroundAlt,spritePackSprites.winterGroundTopLeftAlt,spritePackSprites.winterGroundTopAlt,spritePackSprites.winterGroundTopRightAlt,spritePackSprites.winterGroundLeftAlt,spritePackSprites.winterGroundAlt,spritePackSprites.winterGroundRightAlt,spritePackSprites.winterBlock,spritePackSprites.blueBrickBlockAlt,spritePackSprites.lightBrickBlockAlt,spritePackSprites.pinkBrickBlockAlt,spritePackSprites.iceCubeBlock,spritePackSprites.obstacleBlockAlt,spritePackSprites.winterTree1Alt,spritePackSprites.winterTree2Alt,spritePackSprites.winterSnow,spritePackSprites.winterTree3Alt,spritePackSprites.winterTree4Alt,spritePackSprites.iceBlockAlt]

const padding = 10;
const speed = 50;
game.onUpdate(function() {
    for (const sprite of sprites.allOfKind(SpriteKind.Player)) {
        if (sprite.vx > 0 && sprite.x >= screen.width - padding) {
            sprite.x = screen.width - padding;
            sprite.vx = 0;
            sprite.vy = speed;
        }
        else if (sprite.vy > 0 && sprite.y >= screen.height - padding) {
            sprite.y = screen.height - padding;
            sprite.vx = -speed;
            sprite.vy = 0;
        }
        else if (sprite.vx < 0 && sprite.x <= padding) {
            sprite.x = padding;
            sprite.vx = 0;
            sprite.vy = -speed;
        }
        else if (sprite.vy < 0 && sprite.bottom <= 0) {
            sprite.destroy();
        }
    }
})

let index = 0;
game.onUpdateInterval(700, function() {
    const asset = sprites.create(allImages[index], SpriteKind.Player);
    asset.x = padding;
    asset.y = padding;
    asset.vx = speed;
    asset.setFlag(SpriteFlag.Ghost, true)
    index = (index + 1) % allImages.length;
})

let line1 = sprites.create(img`0`, SpriteKind.Food)
line1.say("PRESS A TO  ")

let line2 = sprites.create(img`0`, SpriteKind.Food)
line2.say("CHANGE COLOR")
line2.top += 10

let bgColor = 0;
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    scene.setBackgroundColor(bgColor);
    bgColor = (bgColor + 1) % 15
})