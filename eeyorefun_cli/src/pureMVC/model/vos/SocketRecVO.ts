class SocketRecVO extends BaseVO{
	public result:number;
	public cmd:string;
	public msgid:Object;
	public seq:number;
	public errmsg:string;
	public data:string;
	public constructor(data:Object) {
		super(data);
	}
}