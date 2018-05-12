/**
 * TitleWindowBase
 */
class PopupViewBase extends BaseUILayer {
    public isShowBG:boolean;
    public isEase:boolean=true;
    constructor() {
        super();
    }
    protected baseCloseWindow(){
        var _parent:PopupBaseLayer=this.parent as PopupBaseLayer;
        if(_parent!=null){
            _parent.delView(this);
        }
        super.BaseUILayerGC();
    }
    
    public initStageSizeData(){
        this.width=this.stage.stageWidth;
        this.height=this.stage.stageHeight;
    }
    public initScale(){
        // var _scaleX:number=this.stage.stageWidth/this.width;
        var _scaleY:number=this.stage.stageHeight/StaticData.GAME_H;
        // _scaleX=Math.min(_scaleX,1);
        _scaleY=Math.min(_scaleY,1);
        // var _setScale:number=Math.min(_scaleX,_scaleY);
        this.scaleX=this.scaleY=_scaleY;
    }
}