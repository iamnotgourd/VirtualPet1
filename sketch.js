//Create variables here
var dog,happyDog,database,foodS,foodStock,snacks
function preload()
{
  dogImage = loadImage("images/dogImg.png")
  dogImageHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000, 1000);
  database = firebase.database();
  dog = createSprite(500,500,50,50)
  dog.addImage(dogImage)
  getState()
}


function draw() {  
  background(46,139,87)
  
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImageHappy)
  if(foodS){
  console.log(foodS)
  update(foodS)
}
}
  
  drawSprites();
  //add styles here

}
function getState(){
  foodStock = database.ref('food')
  foodStock.on("value",function(data){
  foodS = data.val()
  console.log(foodS)
})
}
function update(x){
  if(x<=0){
      x = 0
  }else{
      x = x-1
  }
  database.ref('/').update({food:x})
}