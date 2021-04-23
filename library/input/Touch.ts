// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Jump from "./Jump";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {


    onLoad() {
        this.node.on(
            cc.Node.EventType.TOUCH_START,
            function () {
                Jump.instance.node.emit("touchStart");
            },
            this
        );
        this.node.on(
            cc.Node.EventType.TOUCH_END,
            function () {
                Jump.instance.node.emit("touchEnd");
            },
            this
        );
    }
}
