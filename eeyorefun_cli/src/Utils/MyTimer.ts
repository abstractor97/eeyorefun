class MyTimer {
	private _times: number
	private _timer: egret.Timer;
	private _fun: Function;
	public constructor() {


	}
	/**
		 * 
		 * @param fun() 回调函数
		 * @param delay 间隔时间(毫秒)
		 * @param times 次数,默认无限次
		 */
	public setTimer(fun: Function, delay: number, times: number = 0) {
		this.gc();
		this._fun = fun;
		this._times = times;

		if (delay == 0) {
			this._fun()
			this.gc();
			return;
		}
		if (this._times == 0) {
			this._times = -1;
		}
		this._timer = new egret.Timer(delay, times);
		this._timer.addEventListener(egret.TimerEvent.TIMER, this.handleTimer, this);
		this._timer.start();
	}
	private handleTimer(e: egret.TimerEvent): void {
		this._fun();
		if (this._times != -1) {
			this._times--;
			if (this._times == 0) {
				this.gc();
			}
		}

	}
	/**
	 * 清理timer
	 */
	public gc(): void {
		if (this._timer == null) {
			return;
		}
		this._timer.stop();
		this._timer.removeEventListener(egret.TimerEvent.TIMER, this.handleTimer, this);
		this._timer = null;
		this._fun = null;
	}
}