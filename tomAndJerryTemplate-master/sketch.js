var catimg , cat, forestimg , mouseimg , mouse, catimg2, catimg3, invisablewall, mouse4
function preload() {
    catimg = loadImage("images/cat1.png");
    forestimg = loadImage("images/garden.png")
    mouseimg = loadImage("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg3 = loadImage("images/cat4.png")
    mouse4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600);
    cat.addImage("catsitingimage",catimg);
    cat.scale = 0.1;
    cat.setCollider("circle",0,0,40)
    cat.debug=true;
    mouse = createSprite (200,600);
    
    mouse.addImage("mousewithcheese",mouseimg);
    mouse.scale = 0.1;
    invisablewall = createSprite(162,617);
    invisablewall.visible = false;
   
}

function draw() {

    background(forestimg);
    //Write condition here to evalute if tom and jerry collide
    textSize(50);
    fill("red");
    text(mouseX+","+mouseY,mouseX,mouseY)
    cat.collide(invisablewall);
    if(cat.isTouching(mouse)){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",catimg3);
    cat.changeAnimation("catLastImage",catimg3);
    mouse.addAnimation("catLastImage",mouse4);
    mouse.changeAnimation("catLastImage",mouse4);
    }
    
    
   
    drawSprites();
    keyPressed();
}


function keyPressed(){

    if(keyDown("left")){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning",catimg2);
    }


}
