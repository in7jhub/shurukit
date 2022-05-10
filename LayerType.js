let canvasLayer;
let metaLayer;
let menuLayer;

class MetaLayer {
  constructor(){
    this.metaLayerOrder = 10000;
  }  
}

class MenuLayer {
  constructor(){
    this.menuLayerOrder = 5000;
    this.topBar;
    this.shelf;
    this.menuComponents = [];
  }  

  addMenu(_menuComponent){
    
  }
}

class CanvasLayer {
  constructor(){
    this.canvasLayerOrder = 0;
    this.existingNodes = [];
  }  
  addNode(_node){
    this.existingNodes.push(_node);
  }
}
