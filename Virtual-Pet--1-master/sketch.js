//Create variables here

function preload()
{
  backgroundImg = loadImage("dogImg.png");
  backgroundImg = loadImage("dogImg.png");
}

function setup() {
	
    createCanvas(500,500);
    var food=database.ref("food")
    food.on("value",readfood);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



