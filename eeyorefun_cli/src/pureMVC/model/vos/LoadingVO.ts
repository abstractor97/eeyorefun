class LoadingVO {
	public loadingType:string;
	public loadingID:number;
	public isPer:boolean;
    public title:string = "";//加载标题
	public tip:string;
	public per:number;
	public currResURL:string
	public constructor(_loadingType?:string, _title?:string,_isPer:boolean=true,_loadingID:number=0,_tip?:string) {
		this.loadingType=_loadingType;
        this.title=_title?_title:StaticData.langConfig.getLangStrByID(100002);
		this.loadingID=_loadingID;
		this.isPer=_isPer;
		this.tip=_tip;
	}
	public setPer(loaded:number,totale:number,_currResURL:string):void{
	    this.per=loaded/totale;
		this.currResURL=_currResURL;
	}
}