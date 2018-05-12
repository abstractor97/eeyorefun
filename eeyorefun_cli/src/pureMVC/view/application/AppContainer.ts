
module game {

    export class AppContainer extends egret.DisplayObjectContainer {

        private _sceneLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        private _UILayer: eui.UILayer = new eui.UILayer();
        private _popupLayer: PopupBaseLayer = new PopupBaseLayer();
        private _loadingLayer: PopupBaseLayer = new PopupBaseLayer();
        private _tipLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        private _debugLabel: eui.Label;

        public constructor() {
            super();
            this._UILayer.touchEnabled = false;
            this._popupLayer.touchEnabled = false;
            this._loadingLayer.touchEnabled = false;
            this.addChild(this._sceneLayer);
            this.addChild(this._UILayer);
            this.addChild(this._popupLayer);
            this.addChild(this._tipLayer);
            this.addChild(this._loadingLayer);
            if (StaticData.IS_LOG) {
                this._debugLabel = new eui.Label();
                this._debugLabel.type = egret.TextFieldType.INPUT;
                this._debugLabel.addEventListener(egret.Event.FOCUS_IN, this.onFocusIn, this);
                this._debugLabel.size = 20;
                this._debugLabel.x = 200;
                this._debugLabel.width = 100;
                this._debugLabel.wordWrap = true;
                this.addChild(this._debugLabel);
            }
        }
        private onFocusIn(e: Event) {
            this._debugLabel.text = DebugLog.getInstance().getLogStr();
        }
        public get sceneLayer(): egret.DisplayObjectContainer {
            return this._sceneLayer;
        }
        public get UILayer(): eui.UILayer {
            return this._UILayer;
        }
        public get popupLayer(): PopupBaseLayer {
            return this._popupLayer;
        }
        public get loadingLayer(): PopupBaseLayer {
            return this._loadingLayer;
        }
        public get tipLayer(): egret.DisplayObjectContainer {
            return this._tipLayer;
        }
    }
}