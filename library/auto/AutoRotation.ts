// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoRotation extends cc.Component {

    @property
    speed: number=1;

    start () {
        cc.tween(this.node)
            .by(1, { rotation: 360*this.speed })
            .repeatForever().start();
    }

    // update (dt) {}
}
