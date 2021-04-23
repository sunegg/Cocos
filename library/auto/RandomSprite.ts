// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class RandomSprite extends cc.Component {

    @property([cc.SpriteFrame])
    spriteFrames: cc.SpriteFrame[] = [];

    start() {
        this.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.randomIntFromInterval(0, this.spriteFrames.length - 1)];
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}
