class ReqNewRegistObj extends ReqBaseObj {
	public acc:string;
	public pass:string;
	public platid:number;
	public constructor() {
		super();
		this.platid=StaticData.PLAT_ID;
		this.cmd=9999;
		this.msgid=1005;
	}
}