class GuideVO extends BaseVO {
	public id: number;
	public doStartID: number;
	public doStartValue: number;

	public startKeyVO: DoKeyVO;
	public endKeyVO: DoKeyVO;
	public startKeyID: string;
	public endKeyID: string;
	public womenPos: string;
	public eraserShap: string;
	public arrowPos: string;
	public clewRect: string;
	public nextID: number;
	public clewBtn: string;
	public isClose: number;
	public align: string;
	public clew: string;
	public sendID: number;
	public c_start: string;
	public c_end: string;
	public startControlVO: GuideGameControlVO;
	public endControlVO: GuideGameControlVO;

	public constructor(data: Object) {
		super(data);
		this.startKeyVO = new DoKeyVO(this.startKeyID);
		this.endKeyVO = new DoKeyVO(this.endKeyID);
		this.startControlVO = new GuideGameControlVO(this.c_start);
		this.endControlVO = new GuideGameControlVO(this.c_end);
	}
	public getControl
	public clewBtnPosVO(): GuidePosVO {
		return new GuidePosVO(this.clewBtn, 4);
	}
	public womenPosVO(): GuidePosVO {
		return new GuidePosVO(this.womenPos, 0);
	}
	public eraserPosVO(): GuidePosVO {
		return new GuidePosVO(this.eraserShap, 1);
	}
	public arrowPosVO(): GuidePosVO {
		return new GuidePosVO(this.arrowPos, 2);
	}
	public clewRectVO(): GuidePosVO {
		return new GuidePosVO(this.clewRect, 3);
	}
}
class DoKeyVO {
	public keyID: number;
	public value: string="";
	public constructor(str: string) {
		var _arr: string[] = String(str).split(":");
		this.keyID = Number(_arr[0]);
		if (_arr.length > 1) {
			this.value = _arr[1];
		}
	}
}
