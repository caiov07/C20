var tom,tomimg1,tomimg2,tomimg3;
var jerry,jerryimg1,jerryimg2,jerryimg3;
var bg,canvas;

function preload() {
    //carregue as imagens aqui
    bg=loadImage('images/garden.png')
    tomimg1=loadAnimation('images/cat1.png');
    tomimg2=loadAnimation('images/cat2.png','images/cat3.png');
    tomimg3=loadAnimation('images/cat4.png');

    jerryimg1=loadAnimation('images/mouse1.png');
    jerryimg2=loadAnimation('images/mouse2.png','images/mouse3.png');
    jerryimg3=loadAnimation('images/mouse4.png');
}

function setup(){
    canvas=createCanvas(1000,800);
    //crie os sprites de gato; e rato aqui
    tom=createSprite(870,600);
    tom.addAnimation('tomdormindo',tomimg1)
    tom.scale=0.2


    jerry=createSprite(200,600);
    jerry.addAnimation('jerryempe',jerryimg1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if (tom.isTouching(jerry)){

        tom.velocityX=0;
        tom.addAnimation('ultimotom',tomimg3)
        tom.changeAnimation('ultimotom')

        jerry.addAnimation('ultimojerry',jerryimg3)
        jerry.changeAnimation('ultimojerry')

    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if (keyCode=== LEFT_ARROW){
 tom.velocityX=-5;
 tom.addAnimation('tomandando',tomimg2)
 tom.changeAnimation('tomandando')

jerry.addAnimation('jerryprovocando',jerryimg2)
jerry.changeAnimation('jerryprovocando')

}  

}
