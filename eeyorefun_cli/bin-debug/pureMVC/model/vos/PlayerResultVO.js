var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PlayerResultVO = (function (_super) {
    __extends(PlayerResultVO, _super);
    function PlayerResultVO() {
        var _this = _super.call(this) || this;
        _this.otime = 0; //游戏时间(秒)
        _this.landTotalCount = 0; //总占地数
        return _this;
        // this.rank=StaticFun.getRanNum(2)+1;
        // this.cratio=StaticFun.getRanNum(2000)+1000;
        // this.knum=StaticFun.getRanNum(10);
        // this.oknum=StaticFun.getRanNum(10);
        // this.score=StaticFun.getRanNum(100)+10;
    }
    return PlayerResultVO;
}(ReqBaseObj));
__reflect(PlayerResultVO.prototype, "PlayerResultVO");
//# sourceMappingURL=PlayerResultVO.js.map