class ReqGameServerObj extends ReqBaseObj {
	public static PLATID_1010: number = 1010;
	public static PLATID_1011: number = 1011;
	public static PLATID_1012: number = 1012;
	public static PLATID_1013: number = 1013;

	public acc: string;
	public pass: string;
	public platid: number;
	public constructor(_acc: string, pw: string = "") {
		super();
		this.acc = _acc;
		this.pass = pw;
		this.platid = StaticData.PLAT_ID;
		this.cmd = 10000;
		this.msgid = 1005;
	}
}