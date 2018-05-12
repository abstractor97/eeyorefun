class LangConfigData {
	private _langList:LangVO[]=[];
	public static LANG_ID:number=1;
	public constructor(obj:Object) {
		var _tempArr: Array<Object> =StaticFun.getObjList(obj);
        for(var i = 0;i < _tempArr.length;i++) {
			this._langList.push(new LangVO(_tempArr[i]));
		}
	}
	public getLangStrByID(id:number=100002):string{
		for(var i:number=0;i<this._langList.length;i++){
			var _vo:LangVO=this._langList[i];
			if(id==_vo.id){
				return _vo.str;
			}
		}
		return null;
	}
}