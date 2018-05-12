class TipScroll {
	private _lb: egret.TextField;
	private _mask: egret.DisplayObject;
	private _list: TipScrollVO[] = [];
	private _currIndex: number = 0;
	private _moveSpeed: number = 1;
	private _maxMove: number;
	private _isShow: boolean;
	public constructor(lb: egret.TextField, rectMask: egret.DisplayObject) {
		this._lb = lb;
		this._lb.verticalAlign = egret.VerticalAlign.CONTENT_JUSTIFY;
		this._mask = rectMask;
		egret.startTick(this.callBack, this);
	}
	public baseGC() {
		egret.stopTick(this.callBack, this);
		this._lb = null;
		this._mask = null;
	}
	public addTip(_str: string, _times: number = -1, _link: string = "") {
		this._list.push(new TipScrollVO(_str, _link, _times));
		if (this._list.length > 0&&!this._isShow) {
			this.showNextStr();
		}
	}
	private showNextStr() {
		if (this._list.length == 0||this._isShow) {
			return;
		}else if (this._currIndex >= this._list.length) {
			this._currIndex=0;
		}
		var _vo:TipScrollVO=this._list[this._currIndex];
		var _tempTF:egret.TextField=new egret.TextField();
		_tempTF.text=_vo.str;
		_tempTF.size=this._lb.size;
		
		this._lb.x = this._mask.width;
		// this._lb.text = _vo.str;
		this._lb.textFlow=new Array<egret.ITextElement>(
            { text:_vo.str, style: { "href" :_vo.link } }
        );
		this._lb.width=_tempTF.width;
		this._maxMove = -this._lb.width-100;
		this._isShow = true;
		if(_vo.times>0){
			_vo.times-=1;
			if(_vo.times==0){
				this._list.splice(this._currIndex,1);
			}
		}
		this._currIndex++;
	}
	private callBack(timeStamp: number): boolean {
		if (this._isShow) {
			if (this._lb.x > this._maxMove) {
				this._lb.x -= this._moveSpeed;
			} else {
				this._isShow = false;
				this.showNextStr();
			}
		}
		return false;
	}
}
class TipScrollVO {
	public str: string;
	public link: string;
	public times: number;
	public constructor(_str: string, _link: string, _times: number) {
		this.str = _str;
		this.link = _link;
		this.times = _times;
	}
}