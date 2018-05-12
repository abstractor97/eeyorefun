/**
 *
 * @author
 *
 */
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
var LoadingViewMediator = (function (_super) {
    __extends(LoadingViewMediator, _super);
    function LoadingViewMediator(view) {
        return _super.call(this, LoadingViewMediator.NAME, view) || this;
    }
    LoadingViewMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_LOADING_SHOW,
            StaticEvent.N_M_LOADING_DEL,
            StaticEvent.N_M_LOADING_PROGRESS
        ];
    };
    LoadingViewMediator.prototype.newLoadingView = function (type) {
        if (type == LoadingViewMediator.LOAD_TYPE_BIG) {
            return new LoadingBigView();
        }
        else if (type == LoadingViewMediator.LOAD_TYPE_SMALL) {
            return new LoadingSmallView();
        }
        else if (type == LoadingViewMediator.LOAD_TYPE_FIREST) {
            return new LoadingFirstView();
        }
        else {
            return null;
        }
    };
    LoadingViewMediator.prototype.getLoadingView = function (loadingID) {
        var _num = this.view.numChildren;
        for (var i = 0; i < _num; i++) {
            var _view = this.view.getChildAt(i);
            if (_view && _view.loadingID == loadingID) {
                return _view;
            }
        }
        return null;
    };
    LoadingViewMediator.prototype.addLoadingView = function (_loadVO) {
        var _loadingView = this.newLoadingView(_loadVO.loadingType);
        if (_loadingView == null) {
            return;
        }
        if (!this._gameBaseData) {
            this._gameBaseData = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
        }
        var _tipStr = _loadVO.tip ? _loadVO.tip : this._gameBaseData.getLoadingTipRand();
        if (_tipStr == null) {
            _tipStr = _loadVO.title;
        }
        _loadingView.width = this.view.stage.stageWidth;
        _loadingView.height = this.view.stage.stageHeight;
        _loadingView.setIsPer(_loadVO.isPer);
        _loadingView.setTitle(_loadVO.title);
        _loadingView.setTips(_tipStr);
        _loadingView.loadingID = _loadVO.loadingID;
        _loadingView.horizontalCenter = 0;
        _loadingView.verticalCenter = 0;
        this.view.addView(_loadingView);
    };
    LoadingViewMediator.prototype.removeLoadingView = function (loadingID) {
        if (loadingID === void 0) { loadingID = 0; }
        var _loadingView = this.getLoadingView(loadingID);
        if (_loadingView != null) {
            _loadingView.baseGC();
            this.view.delView(_loadingView);
        }
    };
    LoadingViewMediator.prototype.handleNotification = function (notification) {
        var _loadingVO = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_LOADING_SHOW:
                this.addLoadingView(_loadingVO);
                break;
            case StaticEvent.N_M_LOADING_DEL:
                var _loadingID = _loadingVO == null ? 0 : _loadingVO.loadingID;
                this.removeLoadingView(_loadingID);
                break;
            case StaticEvent.N_M_LOADING_PROGRESS:
                var _loadingView = this.getLoadingView(_loadingVO.loadingID);
                if (_loadingView != null) {
                    _loadingView.setProgress(_loadingVO.per);
                }
                break;
        }
    };
    Object.defineProperty(LoadingViewMediator.prototype, "view", {
        get: function () {
            return this.viewComponent;
        },
        enumerable: true,
        configurable: true
    });
    LoadingViewMediator.NAME = "loadingViewMediator";
    LoadingViewMediator.LOAD_TYPE_NONE = "none"; //不显示
    LoadingViewMediator.LOAD_TYPE_BIG = "big";
    LoadingViewMediator.LOAD_TYPE_SMALL = "small";
    LoadingViewMediator.LOAD_TYPE_FIREST = "first";
    return LoadingViewMediator;
}(puremvc.Mediator));
__reflect(LoadingViewMediator.prototype, "LoadingViewMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=LoadingViewMediator.js.map