var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dd70c44f-034c-4b9f-887a-e405002d591b","22bc0fd6-f4c4-4aed-a769-16c7b0b7418a","be486ccc-2399-402c-a0e6-66e9dbfb99ab"],"propsByKey":{"dd70c44f-034c-4b9f-887a-e405002d591b":{"name":"sam auto","sourceUrl":null,"frameSize":{"x":20,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"pI6Pv.p8b4l_D6RCvHhZV_IXjd1Y7RHu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":14},"rootRelativePath":"assets/dd70c44f-034c-4b9f-887a-e405002d591b.png"},"22bc0fd6-f4c4-4aed-a769-16c7b0b7418a":{"name":"autos matadores","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"UsVAE7lJT7Eil47ykXkQDeS9HVcJq8Ji","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/22bc0fd6-f4c4-4aed-a769-16c7b0b7418a.png"},"be486ccc-2399-402c-a0e6-66e9dbfb99ab":{"name":"autos matadores alrevez","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"bfZW4XC49wlkcn0aQli9.itsJpdJpRbI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/be486ccc-2399-402c-a0e6-66e9dbfb99ab.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var attempts = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sam auto");
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("autos matadores");
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("autos matadores");
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("autos matadores alrevez");
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("autos matadores alrevez");
  
{//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY=6;
car2.velocityY=6;
car3.velocityY=-6;
car4.velocityY=-6;
}

function draw() {
   background("white");
  text("Attempts: " + attempts,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
{// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);
}

{//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("d")){
    sam.x = sam.x+6
  }
 if(keyDown("a")){
   sam.x = sam.x -4}
}

{//Agregar la condición de reducir la vida de Sam si toca el carro.
  if(
    sam.isTouching(car1)||
    sam.isTouching(car2)||
    sam.isTouching(car3)||
    sam.isTouching(car4))
    {
      sam.y =190;
      sam.x =20;
      attempts= attempts + 1;
    }
}
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
