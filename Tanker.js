class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body = Bodies.rectangle(x,y,width,height,options)

      World.add(world, this.body);
      this.width = width;
      this.height = height;

    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(UP_ARROW) && angle > -1.250){
        angle -=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }
      if(keyIsDown(DOWN_ARROW) && angle < 0){
        angle +=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }

      launcherX = pos.x + ((this.height+100) * cos(angle));
      launcherY = pos.y - ((this.height-100) * sin(angle));


      if(keyIsDown(RIGHT_ARROW)){
          Matter.Body.setPosition(canonBall.body, {x: launcherX -100 , y: launcherY +100});
      }

      if(keyIsDown(RIGHT_ARROW) && angle >= -0.050){
        Matter.Body.setPosition(canonBall.body,{x:launcherX -100 ,y:launcherY});
      }

      if(keyIsDown(RIGHT_ARROW) && angle <= -1.60){
        Matter.Body.setPosition(canonBall.body,{x:launcherX - 100,y:launcherY + 100});
      }

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(215,93,127)
      rect(0,0,this.width,this.height);
      pop();
      fill(57,223,2);
      rect(10,height-30,200,20);
      fill(173,200,0);
      rect(50,height-65,100,30);
      rect(50,height-45,100,30);
      fill(103,30,70)
      arc(95, height-65, 90, 100, PI , TWO_PI);
   };
}

