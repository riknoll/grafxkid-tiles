const allImages = [grafxkid.springBackground,grafxkid.springGroundTopLeft,grafxkid.springGroundTop,grafxkid.springGroundTopRight,grafxkid.springGroundLeft,grafxkid.springGround,grafxkid.springGroundRight,grafxkid.springGroundInnerBottomRight,grafxkid.springBush,grafxkid.springGroundInnerBottomLeft,grafxkid.fenceLeft,grafxkid.fence,grafxkid.fenceRight,grafxkid.springTree1,grafxkid.springTree2,grafxkid.springTree3,grafxkid.springTree4,grafxkid.winterBackground,grafxkid.winterGroundTopLeft,grafxkid.winterGroundTop,grafxkid.winterGroundTopRight,grafxkid.winterGroundLeft,grafxkid.winterGround,grafxkid.winterGroundRight,grafxkid.winterGroundInnerBottomRight,grafxkid.winterGroundInnerBottomLeft,grafxkid.winterBush,grafxkid.winterFenceLeft,grafxkid.winterFence,grafxkid.winterFenceRight,grafxkid.winterTree1,grafxkid.winterTree2,grafxkid.winterTree3,grafxkid.winterTree4,grafxkid.summerBackground,grafxkid.summerGroundTopLeft,grafxkid.summerGroundTop,grafxkid.summerGroundTopRight,grafxkid.summerGroundLeft,grafxkid.summerGround,grafxkid.summerGroundRight,grafxkid.summerGroundInnerBottomRight,grafxkid.summerGroundInnerBottomLeft,grafxkid.summerRock,grafxkid.summerFenceLeft,grafxkid.summerFence,grafxkid.summerFenceRight,grafxkid.summerTree1,grafxkid.summerTree2,grafxkid.summerTree3,grafxkid.summerTree4,grafxkid.fallBackground,grafxkid.fallGroundTopLeft,grafxkid.fallGroundTop,grafxkid.fallGroundTopRight,grafxkid.fallGroundLeft,grafxkid.fallGround,grafxkid.fallGroundRight,grafxkid.fallGroundInnerBottomRight,grafxkid.fallGroundInnerBottomLeft,grafxkid.fallBush,grafxkid.fallFenceLeft,grafxkid.fallFence,grafxkid.fallFenceRight,grafxkid.fallTree1,grafxkid.fallTree2,grafxkid.fallTree3,grafxkid.fallTree4,grafxkid.springBackgroundAlt,grafxkid.springGroundTopLeftAlt,grafxkid.springGroundTopAlt,grafxkid.springGroundTopRightAlt,grafxkid.springGroundLeftAlt,grafxkid.springGroundAlt,grafxkid.springGroundRightAlt,grafxkid.springBlock,grafxkid.blueBrickBlock,grafxkid.lightBrickBlock,grafxkid.pinkBrickBlock,grafxkid.brickBlock,grafxkid.obstacleBlock,grafxkid.springTree1Alt,grafxkid.springTree2Alt,grafxkid.springGrass,grafxkid.springTree3Alt,grafxkid.springTree4Alt,grafxkid.iceBlock,grafxkid.winterBackgroundAlt,grafxkid.winterGroundTopLeftAlt,grafxkid.winterGroundTopAlt,grafxkid.winterGroundTopRightAlt,grafxkid.winterGroundLeftAlt,grafxkid.winterGroundAlt,grafxkid.winterGroundRightAlt,grafxkid.winterBlock,grafxkid.blueBrickBlockAlt,grafxkid.lightBrickBlockAlt,grafxkid.pinkBrickBlockAlt,grafxkid.iceCubeBlock,grafxkid.obstacleBlockAlt,grafxkid.winterTree1Alt,grafxkid.winterTree2Alt,grafxkid.winterSnow,grafxkid.winterTree3Alt,grafxkid.winterTree4Alt,grafxkid.iceBlockAlt]

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