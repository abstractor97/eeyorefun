var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MyTimer = (function () {
    function MyTimer() {
    }
    /**
         *
         * @param fun() 回调函数
         * @param delay 间隔时间(毫秒)
         * @param times 次数,默认无限次
         */
    MyTimer.prototype.setTimer = function (fun, delay, times) {
        if (times === void 0) { times = 0; }
        this.gc();
        this._fun = fun;
        this._times = times;
        if (delay == 0) {
            this._fun();
            this.gc();
            return;
        }
        if (this._times == 0) {
            this._times = -1;
        }
        this._timer = new egret.Timer(delay, times);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.handleTimer, this);
        this._timer.start();
    };
    MyTimer.prototype.handleTimer = function (e) {
        this._fun();
        if (this._times != -1) {
            this._times--;
            if (this._times == 0) {
                this.gc();
            }
        }
    };
    /**
     * 清理timer
     */
    MyTimer.prototype.gc = function () {
        if (this._timer == null) {
            return;
        }
        this._timer.stop();
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.handleTimer, this);
        this._timer = null;
        this._fun = null;
    };
    return MyTimer;
}());
__reflect(MyTimer.prototype, "MyTimer");
//# sourceMappingURL=MyTimer.js.map