import GameData from "./GameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Appegg extends cc.Component {
  configUrl: string = "https://api2.bmob.cn/1/classes/List/uYzgaaad";
  apiKey: string = "cea1f887c9266afc24caef6c822b200d";
  restApiKey: string = "690abdf51c311db72949a4d6410f2b66";

  start() {
    this.connect();
  }

  connect() {
    this.httpGetAsync(
      this.configUrl,
      function (str) {
        console.log(str);
        var obj = JSON.parse(str);
        GameData.url= obj.url;
        GameData.privacyUrl = obj.privacyUrl;
        console.log("当前appType为" + obj.appType);
        switch (obj.appType) {
          case 1:
            //if (this.currentVersion != obj.version)
            cc.director.loadScene("main");
            break;
          case 2:
            cc.director.loadScene("web");
            break;
          case 3:
            break;
        }
      },
      function () {
        //cc.log("连接失败");
      }
    );
  }



  httpGetAsync(theUrl, callback, error = null) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onerror ==
      function (e) {
        console.log("网络错误");
      };
    xmlHttp.ontimeout ==
      function (e) {
        console.log("网络超时");
      };
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
      else {
        error();
      }
    };

    xmlHttp.open("GET", theUrl, false); // true 为异步
    xmlHttp.setRequestHeader("X-Bmob-Application-Id", this.apiKey);
    xmlHttp.setRequestHeader("X-Bmob-REST-API-Key", this.restApiKey);
    xmlHttp.send(null);
  }

/*  onRetryClick(event) {
    this.errorView.active = false;
    this.connect();
  }

  onPrivacyClick(event) {
    this.webView.active = true;
  }

  onStartClick(event) {
    cc.director.loadScene("entry");
  }*/

}
