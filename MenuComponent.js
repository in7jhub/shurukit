let sideMenu;
let topMenu;

class SideMenu {
  constructor() {
    this.width = 300;
    this.order = 0;
    this.menuRectX = 20;
    this.menuRectY = 70;
    this.menuRectW = 260;
    this.menuRectH = 800;
    this.testButton1 = new RectButton(
      0, 0,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton2 = new RectButton(
      0, 150,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton3 = new RectButton(
      0, 300,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton4 = new RectButton(
      0, 450,
      this.menuRectW, 130,
      5,
      0, 
      0
    );
    this.testButton5 = new RectButton(
      0, 600,
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
  }
}

class TopMenu {
  constructor() {
    this.height = 50;
    this.order = 300;
    this.saveButton
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
      console.log("asl;dkj;lsdjdflsfdjk");
      if(mouseInfo.detectPressing()){
        console.log("adsf;lj");
        fill(this.pressingColor);
      }  
    }
    rect(this.pos[0]+_relX,this.pos[1]+_relY,this.size[0],this.size[1],this.rounding);
  }

  isOver(_relX, _relY){
    if (mouseX > this.pos[0] + _relX && mouseX < this.pos[0] + this.size[0] + _relX
      && mouseY > this.pos[1] + _relY && mouseY < this.pos[1] + this.size[1] + _relY){
      return true;
    } 
    return false;
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
