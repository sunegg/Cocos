// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameData from "./GameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoPatrol extends cc.Component {

    @property
    amplitude: number=200;

    @property
    speed: number = 1;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.move();
    }

    move() {
        cc.tween(this.node)
        .to(1*this.speed, { position:cc.v2(-this.amplitude,this.node.position.y) })
            .to(1 * this.speed, { position: cc.v2(this.amplitude, this.node.position.y) })
            .call(() => { this.move() }).start();
    }
    // update (dt) {}
}
