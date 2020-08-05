class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.im=loadImage("sprites/smoke.png");
    this.traje=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y];
    this.traje.push(position);
    //console.log (this.traje);
    for(var i=0; i<this.traje.length; i++){ 
    image(this.im,this.traje[i][0],this.traje[i][1]);
    }
  }
}
