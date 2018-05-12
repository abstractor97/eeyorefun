/**
 *
 * @author 
 *
 */
class LoadResVO {

    public resName: string;
    public callBack: Function;
    public loadingVO: LoadingVO;


    public constructor(_resName: string, _callBack?: Function, _loadingType?: string, _title?: string, _tip?: string) {
        this.resName = _resName;
        this.callBack = _callBack;
        this.loadingVO = new LoadingVO(_loadingType, _title, true,StaticData.getLoadID(), _tip);
    }
}
