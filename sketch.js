// 클릭 이벤트 완성.
// 기본 UI 클래스 작성 후 노드 관련 코드 작성

let tc;

function preload(){
  img = loadImage('Icon/WiFi.png');
  img2 = loadImage('Icon/Transaction.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  canvasLayer = new CanvasLayer();
  sideMenu = new SideMenu();
  topMenu = new TopMenu();
  mouseInfo = new MouseInfo();

  frameRate(120);
}

function draw() {
  preUpdate();

 
  
  // if(mouseIsPressed && mouseX > 10 && mouseX < 110
  //   && mouseY > 10 && mouseY < 110){
  //   tc = color(255);
  //   myNode = new Node();

  //   canvasLayer.addNode(myNode);
    
  //   //print(canvasLayer.existingNodes.length);
  // } else {
  //   tc = color(150);
  // }
  
  // fill(tc);
  // rect(10,10,100,100);
  
  sideMenu.display();
  topMenu.display();

  imageMode(CENTER);
  image(img, width-50,25,30,30);
  image(img2, width-100,25,30,30);

  textAlign(CENTER);
  fill(255);
  textSize(23);
  text("SHURU KIT 0.0.1", width/2, 35);

  lateUpdate();
}