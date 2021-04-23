// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoSpawner extends cc.Component {

    @property(cc.Prefab)
    prefab: cc.Prefab;

    @property
    repeat: boolean = false;

    @property
    interval: number = 5;
    
    @property(cc.Node)
    parent: cc.Node;


    start() {
        if (this.repeat) {
            this.spawn();
            this.schedule(function () {
                // 这里的 this 指向 component
                this.spawn();
            }, this.interval);
        }
    }
    spawn() {
        var scene = cc.director.getScene();
       var node= cc.instantiate(this.prefab);
        node.parent = this.parent;
        node.position = this.node.parent.position;
       //node.setPosition(0, 0);
    }

    // update (dt) {}
}
