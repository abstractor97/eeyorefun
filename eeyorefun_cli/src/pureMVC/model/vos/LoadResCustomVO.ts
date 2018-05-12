class LoadResCustomVO implements IBaseGC {
	public resGroupName:string;
	public list:string[];
	public loadingType:string;
	public callBack:Function;
	public constructor(_list:string[],_callBack:Function,_loadingType:string="none",_resGroupName:string="null") {
		if(_resGroupName=="null"){
			_resGroupName="res_group_"+StaticFun.getRanNum(1000000);
		}
		this.resGroupName=_resGroupName;
		this.list=_list;
		this.loadingType=_loadingType;
		this.callBack=_callBack;
	}
	public baseGC(){
		this.callBack=null;
	}
}