/**
 *
 * @author 
 *
 */
class BaseSceneView extends BaseUILayer{
    private _gcCallBack: Function;
    public constructor() {
    	   super();
    }
    public setCallBackGC(fun: Function) {
        this._gcCallBack = fun;
    }
    public gcBase(): void {
    	   if(this._gcCallBack != null) {
    	       this._gcCallBack();
    	   }
    	   this._gcCallBack = null;
    }
    

}
