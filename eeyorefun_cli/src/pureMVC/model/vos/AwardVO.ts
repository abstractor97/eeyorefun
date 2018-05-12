class AwardVO {
	public type: number;
	public num: number;
	public title: string
	public constructor(str: string) {
		var _tempArr: string[] = str.split("|");
		this.type = Number(_tempArr[0]);
		this.num = Number(_tempArr[1]);
		if (this.type == StaticData.MONEY_COIN) {
			this.title = "金币";
		}else if (this.type == StaticData.MONEY_DIAMOND){
			this.title = "钻石";
		}else if (this.type == StaticData.MONEY_CANDY){
			this.title = "糖果";
		}
	}
}