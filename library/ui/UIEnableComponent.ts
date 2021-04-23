// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEnableComponent extends cc.Component {

         
    @property(cc.Component)
    component:cc.Component;

    btn: cc.Button;

    onLoad() {
        this.btn = this.node.getComponent(cc.Button);
    }


    enable() {
        this.component.enabled = true;
    }

    start () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "UIEnableComponent";
        clickEventHandler.handler = "enable";
        clickEventHandler.customEventData = null;
        this.btn.clickEvents.push(clickEventHandler);
    }

    // update (dt) {}
}
