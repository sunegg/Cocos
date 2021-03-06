// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoRandomMove extends cc.Component {
  // @property(cc.Node)
  // target: cc.Node;

  @property
  minSpeed: number = 5;

  @property
  maxSpeed: number = 8;
    
  startPos: cc.Vec3;

  @property
  endPos: cc.Vec2 = new cc.Vec2(0, 0);

  @property
  repeat: boolean = true;

  tween;

  onLoad() {
    this.startPos = this.node.position;
  }
  start() {
    this.moveToTarget();
  }

    moveToTarget() {
    this.tween = cc
      .tween(this.node)
      .to(this.randomIntFromInterval(this.minSpeed,this.maxSpeed), { position: cc.v2(this.endPos.x, this.node.y) })
      .call(() => {
        if (this.repeat) {
          this.node.position = this.startPos;
          this.moveToTarget();
        } else {
          this.node.destroy();
        }
      })
      .start();
    }
    
   randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

  stop() {
    this.tween.stop();
  }
}
