// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameData from "./GameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UITimer extends cc.Component {

    label: cc.Label;

    @property
    time:number = 120;

    onLoad() {
        this.label = this.getComponent(cc.Label);
    }

    start() {
        GameData.isPlaying = true;
        this.schedule(()=>{
            // 这里的 this 指向 component
            if (this.time > 0) {
                this.time--;
                this.label.string = this.time.toString();
        
            } else {
                GameData.isPlaying = false;
            }

        }, 1);
    }

    // update (dt) {}
}
