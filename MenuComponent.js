let sideMenu;
let topMenu;

class SideMenu {
  constructor() {
    this.scrollbarMargin = 20;
    this.width = 300 + this.scrollbarMargin;
    this.order = 0;
    this.menuRectX = 20;
    this.menuRectY = 70;
    this.menuRectW = 260;
    this.menuRectH = 1800;
    this.scrollbar = new Scrollbar(
      0,0,
      20,height-50/*topmenu의 높이만큼 뺌*/,
      this.menuRectH,
      1
    );
    this.testButton1 = new RectButton(
      this.scrollbarMargin, 0,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton2 = new RectButton(
      this.scrollbarMargin, 150,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton3 = new RectButton(
      this.scrollbarMargin, 300,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton4 = new RectButton(
      this.scrollbarMargin, 450,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton5 = new RectButton(
      this.scrollbarMargin, 600,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    
  }

  display() {
    fill(120);
    noStroke();
    rect(0,0,this.width, height);
    this.testButton1.display(this.menuRectX,this.menuRectY);
    this.testButton2.display(this.menuRectX,this.menuRectY);
    this.testButton3.display(this.menuRectX,this.menuRectY);
    this.testButton4.display(this.menuRectX,this.menuRectY);
    this.testButton5.display(this.menuRectX,this.menuRectY);
    this.scrollbar.display(0,50/*Topmenu의 높이*/,this.menuRectY);
  }
}

class TopMenu {
  constructor() {
    this.height = 50;
    this.order = 300;
    this.saveButton;
  }

  display() {
    fill(50);
    noStroke();
    rect(0,0,width,this.height);
  }
}

class RectButton {
  constructor(x,y,w,h,rounding,task,order) {
    this.order = order;
    this.pos = [];
    this.pos[0] = x;
    this.pos[1] = y;
    this.size = [];
    this.size[0] = w;
    this.size[1] = h;
    this.task = task;
    this.rounding = rounding;
    this.color = color(255);
    this.overColor = color(0,255,0);
    this.pressingColor = color(255,0,0);
  }

  display(_relX, _relY){
    fill(this.color);
    if(this.isOver(_relX, _relY)) {
      fill(this.overColor);
      if(mouseInfo.detectPressing()){
        fill(this.pressingColor);
      }  
    }
    rect(this.pos[0]+_relX,this.pos[1]+_relY,this.size[0],this.size[1],this.rounding);
  }

  isOver(_relX, _relY){
    if (mouseX > this.pos[0] + _relX && mouseX < this.pos[0] + this.size[0] + _relX
      && mouseY > this.pos[1] + _relY && mouseY < this.pos[1] + this.size[1] + _relY){
      return true;
    } else {
      return false;
    }
  }
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
}

class Scrollbar {
  constructor(x,y,w,h,contentsHeight,order){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.contentsHeight = contentsHeight;
    this.order = order;
    this.bgColor = color(80);
    this.controllerColor = color(200);
  }

  display(_relX, _relY, contentsStartY){
    //bg
    fill(this.bgColor);
    rect(this.x+_relX, this.y+_relY, this.w, height);
    //controller
    fill(255);
    
    //스크롤 이동 제약 구현중
    // contentsEndY = contentRectY + this.contentsHeight;
    // if(contentsStartY <= this.y + _relY){
    //   contentsStartY = this.y + _relY;
    // }
    // if(this.contentsEndY <= height){
    //   this.contentsEndY = height;
    // }
    
    //스크롤바 컨트롤러 크기
    rect(this.x+_relX, this.y+_relY, this.w, (height-50)*((height-50)/this.contentsHeight));
    
    // 여기는 스크롤 하이라이트

    // if(this.isOver(_relX, _relY)) {
    //   fill(this.overColor);
    //   if(mouseInfo.detectPressing()){
    //     fill(this.pressingColor);
    //   }
    // }
    // rect(this.pos[0]+_relX,this.pos[1]+_relY,this.size[0],this.size[1],this.rounding);
  }

  isOver(_relX, _relY){
    if (mouseX > this.x + _relX && mouseX < this.x + this.w + _relX 
      && mouseY > this.y + _relY && mouseY < this.y + this.h + _relY){
      return true;
    } else {
      return false;
    }
  }
}