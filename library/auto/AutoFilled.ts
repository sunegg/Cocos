// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoFilled extends cc.Component {

    image: cc.Sprite;

    @property
    speed: number = 1;

    static instance: AutoFilled;

    onLoad() {
        AutoFilled.instance = this;
        this.image = this.getComponent(cc.Sprite);
        this.node.on(
            "fill",
            function () {
                this.image.fillRange = 1;
            },
            this
          );
    }

    update(dt) {
        
        this.image.fillRange -= dt * this.speed;
        if (this.image.fillRange <= 0) {
            GameManager.instance.node.emit("gameOver");
        }
    }

    
}
