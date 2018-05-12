var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadImgByURL = (function () {
    function LoadImgByURL(url, onLoadCom, onLoadError) {
        this._onLoadCom = onLoadCom;
        // this._onProgress=onProgress;
        this._url = url;
        this._onLoadError = onLoadError;
        this.imageLoader = new egret.ImageLoader();
        this.imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
        this.imageLoader.addEventListener(egret.ProgressEvent.PROGRESS, this.loadProgress, this);
        this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.loadImgError, this);
        this.imageLoader.load(url);
        egret.ProgressEvent.PROGRESS;
    }
    LoadImgByURL.prototype.baseGC = function () {
        this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
        this.imageLoader.removeEventListener(egret.ProgressEvent.PROGRESS, this.loadProgress, this);
        this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadImgError, this);
        this._onLoadCom = null;
        this._onLoadError = null;
    };
    LoadImgByURL.prototype.loadProgress = function (event) {
        var _per = event.bytesLoaded / event.bytesTotal;
        if (this._onProgress) {
            this._onProgress(_per);
        }
    };
    LoadImgByURL.prototype.loadCompleteHandler = function (event) {
        var imageLoader = event.currentTarget;
        this._onLoadCom(imageLoader.data);
        this.baseGC();
    };
    LoadImgByURL.prototype.loadImgError = function (E) {
        DebugLog.getInstance().showLog("无法加载资源:" + this._url);
        if (this._onLoadError != null) {
            this._onLoadError(this._url);
        }
        this.baseGC();
    };
    return LoadImgByURL;
}());
__reflect(LoadImgByURL.prototype, "LoadImgByURL", ["IBaseGC"]);
//# sourceMappingURL=LoadImgByURL.js.map