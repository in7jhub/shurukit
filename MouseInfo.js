let mouseInfo;

isPressing = [false,false];
prevIsPressing = [false,false];
currIsPressing = [false,false];
isDragging = false;
isClicked = false;

class MouseInfo{
  constructor(){
    this.clicked = false;
    this.pressing = false;
    this.down = false;
    this.up = false;
    this.dragging = false;
    this.draggingMoving = false;
    this.moving = false;
  }
  
  update(){
    this.recordPressingData();
    
    this.detectClicked();
    this.detectPressing();
    this.detectDown();
    this.detectUp();
    this.detectDraggingMoving();
    this.detectMoving();
  }
  
  detectClicked(){
    return isClicked;
  }
  
  detectPressing(){
    return isPressing[0];
  }
  
  detectDown(){
    return isPressing[0] && !isPressing[1];
  }
  
  detectUp(){
    return !isPressing[0] && isPressing[1];
  }
  
  detectDraggingMoving(){
    return isDragging;
  }
  
  detectMoving(){
    if(pmouseX != mouseX) return true;
    if(pmouseY != mouseY) return true;
    return false;
  }
  
  recordPressingData(){
    if(mouseIsPressed){
      currIsPressing[1] = currIsPressing[0];
      currIsPressing[0] = true;
    } else {
      currIsPressing[1] = currIsPressing[0];
      currIsPressing[0] = false;
    }
    if(prevIsPressing[0]!=currIsPressing[0]
      ||prevIsPressing[1]!=currIsPressing[1]) {
      isPressing[0] = currIsPressing[0];
      isPressing[1] = currIsPressing[1];
    }
    prevIsPressing[0] = currIsPressing[0];
    prevIsPressing[1] = currIsPressing[1];
  }
}