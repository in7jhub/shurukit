class Node {
  constructor(){
    const stateList = Object.freeze({
      dropped:"dropped",
      floating:"floating",
    });
    this.pos = {x:0, y:0}
    this.dropState = stateList.floating;
    this.w = 100;
    this.h = 80;
  }
  
  pickUp(){
    
  }
  
  show(){
    
    rect(mouseX-this.w/2,mouseY-10,100,80);
  }
}