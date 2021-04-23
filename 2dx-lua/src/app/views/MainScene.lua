local MainScene = class("MainScene", cc.load("mvc").ViewBase)

local function showWebView()
    local size=cc.Director:getInstance():getWinSize()
    local webView = ccexp.WebView:create()

    if gameUrl ~= nil then
        webView:loadURL(gameUrl)
    else
    webView:loadFile("res/game/index.html")
end
    webView:setContentSize(size)
   webView:setPosition(cc.p(size.width / 2, size.height/2))
    webView:setScalesPageToFit(true)
    webView:setVisible(true)
    return webView
end

function MainScene:onCreate()
     showWebView():addTo(self)
end

return MainScene
    