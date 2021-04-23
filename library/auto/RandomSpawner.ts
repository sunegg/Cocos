// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class RandomSpawner extends cc.Component {

    static instance: RandomSpawner;

    @property(cc.Prefab)
    prefab: cc.Prefab;

    @property
    repeat: boolean = false;

    @property
    interval: number = 5;
    
    @property(cc.Node)
    parent: cc.Node;

  @property
  minY: number = 0;

  @property
  maxY: number = 0;
    
    
  @property
  offsetY: number = 0;
    
    onLoad() {
        RandomSpawner.instance = this;
        this.node.on(
            "spawn",
            this.spawn, this);
    }

   /* start() {
        if (this.repeat) {
            this.spawn();
            this.schedule(function () {
                // 这里的 this 指向 component
                this.spawn();
            }, this.interval);
        }
    }*/
    
    spawn(): cc.Node {
        cc.log("spawnStair");
        var scene = cc.director.getScene();
       var node= cc.instantiate(this.prefab);
        node.parent = this.parent;
        node.position =  cc.v3(0,this.randomIntFromInterval(this.minY, this.maxY+this.offsetY),0);
       //node.setPosition(0, 0);
         return node;
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    // update (dt) {}
}
