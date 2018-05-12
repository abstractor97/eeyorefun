class GetGoodVO extends BaseVO {

	public coin: number;
	public diamond: number;
	public candies: number;
	public itemid: number;
	public addcoin: number;
	public adddiamond: number;
	public payid: number;

	public constructor(data: Object) {
		super(data);
	}
	public isShowGet(): boolean {
		if (this.coin > 0 || this.diamond > 0|| this.candies > 0) {
			return true;
		}
		return false;
	}
	public getGoodList(): string[] {
		var _list: string[] = [];
		if (this.diamond > 0) {
			_list.push("common_icon_get_diamonds_png");
		}
		if (this.coin > 0) {
			_list.push("common_icon_get_glods_png");
		}
		if (this.candies) {
			_list.push("common_icon_get_candies_png");
		}
		if (this.itemid) {
			_list.push(StaticData.getMallIcon(this.itemid));
		}
		return _list;
	}
}