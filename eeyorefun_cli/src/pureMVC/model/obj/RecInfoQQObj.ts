class RecInfoQQObj extends BaseVO {
	public ret:number;//返回码,0:正确
	public msg:string;//如果错误，返回错误信息
	public is_lost:number;//判断是否有数据丢失。如果应用不使用cache，不需要关心此参数。0或者不返回：没有数据丢失，可以缓存。1：有部分数据丢失或错误，不要缓存
	public nickname:string;//昵称
	public gender:string;//性别
	public figureurl:string;//头像
	public city:string;//城市
	public constructor(data:Object) {
		super(data);
	}
}