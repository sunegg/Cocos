var TestLayer = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    this._super();

    var size = cc.winSize;

    var testLabel = new cc.LabelTTF("appType==3\n这是切换后的游戏", "Arial", 38);

    testLabel.x = size.width/2;
    testLabel.y = size.height/2;

    this.addChild(testLabel, 5);

    this.sprite = new cc.Sprite(res.Test_png);
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2,
    });
    this.addChild(this.sprite, 0);

    return true;
  },
});

var TestScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var layer = new TestLayer();
    this.addChild(layer);
  },
});

var WebLayer = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    this._super();
   var size = cc.winSize;
    var webview = new ccui.WebView();
    webview.loadURL(gameUrl);
    webview.setContentSize(cc.size(size.width,size.height));
    webview.setPosition(cc.p(size.width/2,size.height/2));
    webview.setScalesPageToFit(true);
    this.addChild(webview);
    return true;
  },
});

var WebScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var layer = new WebLayer();
    this.addChild(layer);
  },
});

var gameUrl="res/game/index.html";

