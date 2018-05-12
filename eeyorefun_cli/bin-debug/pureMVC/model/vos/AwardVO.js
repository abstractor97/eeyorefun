var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AwardVO = (function () {
    function AwardVO(str) {
        var _tempArr = str.split("|");
        this.type = Number(_tempArr[0]);
        this.num = Number(_tempArr[1]);
        if (this.type == StaticData.MONEY_COIN) {
            this.title = "金币";
        }
        else if (this.type == StaticData.MONEY_DIAMOND) {
            this.title = "钻石";
        }
        else if (this.type == StaticData.MONEY_CANDY) {
            this.title = "糖果";
        }
    }
    return AwardVO;
}());
__reflect(AwardVO.prototype, "AwardVO");
//# sourceMappingURL=AwardVO.js.map