// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Sensor extends cc.Component {


    start () {

    }
    onCollisionEnter (other:cc.Collider, self:cc.Collider) {
        console.log('on collision enter');
        GameManager.instance.node.emit("addScore", 1);
        this.node.destroy();
    }
    // update (dt) {}
}
