class RecNoteObj extends BaseVO {
	public title: string;
	public content: string;
	public open: number;//0：关闭，1：开启
	public constructor(data: Object) {
		super(data);
	}
}