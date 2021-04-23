cc.FileUtils:getInstance():setPopupNotify(false)

require "config"
require "cocos.init"
require("src/cocos/cocos2d/json")
require("src/cocos/network/NetworkConstants")

local configUrl = "https://api2.bmob.cn/1/classes/List/O9vqNNND";
local apiKey = "5dce473cb7dabd0ee584c6a5c8039832";
local restApiKey = "6657bf99688636b17d11d2d5f664ba93";
local bit = require("bit")

local function unicode_to_utf8(convertStr)
    if type(convertStr)~="string" then
        return convertStr
    end
    local resultStr=""
    local i=1
    while true do
        local num1=string.byte(convertStr,i)
        local unicode
        
        if num1~=nil and string.sub(convertStr,i,i+1)=="\\u" then
            unicode=tonumber("0x"..string.sub(convertStr,i+2,i+5))
            i=i+6
        elseif num1~=nil then
            unicode=num1
            i=i+1
        else
            break
        end
        -- print(unicode)
  
        if unicode <= 0x007f then
            resultStr=resultStr..string.char(bit.band(unicode,0x7f))
        elseif unicode >= 0x0080 and unicode <= 0x07ff then
            resultStr=resultStr..string.char(bit.bor(0xc0,bit.band(bit.rshift(unicode,6),0x1f)))
            resultStr=resultStr..string.char(bit.bor(0x80,bit.band(unicode,0x3f)))
        elseif unicode >= 0x0800 and unicode <= 0xffff then
            resultStr=resultStr..string.char(bit.bor(0xe0,bit.band(bit.rshift(unicode,12),0x0f)))
            resultStr=resultStr..string.char(bit.bor(0x80,bit.band(bit.rshift(unicode,6),0x3f)))
            resultStr=resultStr..string.char(bit.bor(0x80,bit.band(unicode,0x3f)))
        end
    end
    resultStr=resultStr..'\0'
    return resultStr
end

-- post json
local xhr = cc.XMLHttpRequest:new()

local function loginCallback()
	print("xhr.readyState is:", xhr.readyState, "xhr.status is: ", xhr.status)
    if xhr.readyState == 4 and (xhr.status >= 200 and xhr.status < 207) then
        local response = xhr.response
       print(unicode_to_utf8(response))
        local output = json.decode(unicode_to_utf8(response))
       table.foreach(output, function(i, v) print (i, v) end)
       if output.appType==1 then
        -- 壳包游戏
        require("app.MyApp"):create():run()
    elseif output.appType==2  then
         -- H5游戏
        cc.exports.gameUrl = output.url
        require("app.MyApp"):create():run()
    elseif output.appType==3  then
        -- 切换至天缘传奇游戏
    end
    end
end

local function main()
    xhr.responseType = cc.XMLHTTPREQUEST_RESPONSE_JSON
    xhr:setRequestHeader("Content-Type", "application/json")
    xhr:setRequestHeader("X-Bmob-Application-Id", apiKey)
    xhr:setRequestHeader("X-Bmob-REST-API-Key", restApiKey)
    xhr:open("GET",configUrl)
        xhr:registerScriptHandler(loginCallback)
    xhr:send(sendJson)
  
end

local status, msg = xpcall(main, __G__TRACKBACK__)
if not status then
    print(msg)
end
