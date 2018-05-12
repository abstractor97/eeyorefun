class GuidePosVO {
	public status: number = 0;
	public scaleX: number;
	public type: number;
	public nameStr: string;
	public rotation: number;
	public x: number;
	public y: number;
	public w: number;
	public h: number;
	public constructor(str: string, dType: number,align?:string) {
		if (String(str)== "0") {
			this.status = 0;
			return;
		}
		var _list: string[] = str.split(":");
		this.status = 1;
		if (dType == 0) {
			//女性角色
			this.scaleX = Number(_list[0]);
			this.x = Number(_list[1]);
			this.y = Number(_list[2]);
		} else if (dType == 1) {
			//镂空
			this.type = Number(_list[0]);
			this.x = Number(_list[1]);
			this.y = Number(_list[2]);
			this.w = Number(_list[3]);
			this.h = Number(_list[4]);
			if(!align){
				return;
			}
			var _tempPos=new egret.Point(this.x,this.y);
			var _tempList:string[]=align.split(":");
			this.x=_tempPos.x;
			this.y=_tempPos.y;
		} else if (dType == 2) {
			//箭头
			this.x = Number(_list[0]);
			this.y = Number(_list[1]);
			this.nameStr =_list[2];
		}
		else if (dType == 3) {
			//描述
			this.x = Number(_list[0]);
			this.y = Number(_list[1]);
		}else if (dType == 4) {
			//描述
			this.nameStr = _list[0];
			this.x = Number(_list[1]);
			this.y = Number(_list[2]);
		}
	}
	
}
