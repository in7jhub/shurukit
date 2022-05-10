function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function preUpdate(){
  mouseInfo.update();
  
}

function lateUpdate(){
  isDragging = false; 
  isClicked = false;
}

function mouseDragged(){
  isDragging = true;
}

function mouseClicked(){
  isClicked = true;
}

function mouseWheel(event) { 
  sideMenu.menuRectY += event.delta / 5; 
} 