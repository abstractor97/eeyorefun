var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HttpResponseCommand = (function (_super) {
    __extends(HttpResponseCommand, _super);
    function HttpResponseCommand() {
        return _super.call(this) || this;
    }
    HttpResponseCommand.prototype.execute = function (notification) {
        this._sendVO = notification.getBody();
        this._sendID = StaticFun.getRanNum(100000) + 1000;
        if (this._sendVO.loadingType != null) {
            this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(this._sendVO.loadingType, this._sendVO.loadingTitle, false, this._sendID));
        }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        // request.open("http://httpbin.org/get", this._sendVO.sendType);
        // request.open("http://httpbin.org/get",egret.HttpMethod.GET);
        // request.open("http://pay.lajoin.com/index/test/index", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.open(this._sendVO.sendURL, this._sendVO.sendType);
        if (this._sendVO.sendType == egret.HttpMethod.POST) {
            request.send(this._sendVO.dataObj);
        }
        else {
            request.send();
        }
        DebugLog.getInstance().showLog("发送Http数据:" + this._sendVO.sendVOStr);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    HttpResponseCommand.prototype.onPostComplete = function (event) {
        this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._sendID));
        var request = event.currentTarget;
        DebugLog.getInstance().showLog("收到Http数据:" + request.response);
        if (this._sendVO.callBack != null) {
            this._sendVO.callBack(request.response);
        }
        this._sendVO.gc();
    };
    HttpResponseCommand.prototype.onPostIOError = function (event) {
        this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._sendID));
        AlertCtrl.getInstance().showAlert("http-post error : " + event);
        console.log("post error : " + event);
    };
    HttpResponseCommand.prototype.onPostProgress = function (event) {
        // console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return HttpResponseCommand;
}(puremvc.SimpleCommand));
__reflect(HttpResponseCommand.prototype, "HttpResponseCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=HttpResponseCommand.js.map