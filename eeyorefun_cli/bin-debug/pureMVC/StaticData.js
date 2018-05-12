var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var StaticData = (function () {
    function StaticData() {
    }
    ;
    StaticData.getLoadID = function () {
        return ++StaticData.LOAD_ID;
    };
    StaticData.getReqHttpUrl = function (reqStr) {
        return StaticData.configVO.http_platform + reqStr + "?pf=" + StaticData.configVO.platform + "&openid=" + StaticData.OPEN_ID + "&openkey=" + StaticData.OPEN_KEY;
    };
    StaticData.setOpenKey = function (obj) {
        if (obj["code"] != 0) {
            AlertCtrl.getInstance().showAlert("getOpenKey:ERROR!!");
            return;
        }
        StaticData.OPEN_ID = obj["data"]["openid"];
        StaticData.OPEN_KEY = obj["data"]["openkey"];
        StaticData.APP_ID = obj["data"]["appid"];
    };
    StaticData.getPlayerKey = function (userID) {
        return StaticData.PLAYER_KEY + userID;
    };
    StaticData.getIndexByKey = function (keyName) {
        return Number(keyName.split(StaticData.PLAYER_KEY)[1]);
    };
    StaticData.getPosNameY = function (yNum) {
        return StaticData.POS_NAME + yNum;
    };
    StaticData.getYByKey = function (key) {
        var _yNun = Number(key.split(StaticData.POS_NAME)[1]);
        return _yNun;
    };
    StaticData.getSkinName = function (skinName) {
        return skinName;
    };
    StaticData.getSexIcon = function (sex) {
        sex = sex == 2 ? 0 : sex;
        return "common_icon_sex_" + sex + "_png";
    };
    StaticData.getRoleName = function (roleID) {
        return "role_" + roleID;
    };
    StaticData.getHeadIcon = function (id) {
        if (id == 0) {
            return "";
        }
        return "head_" + id + "_png";
    };
    //type=small_;
    StaticData.getMallIcon = function (id, type) {
        if (type === void 0) { type = ""; }
        if (id < 10) {
            return this.getMoneyIcon(id);
        }
        return "role_icon_" + type + id + "_png";
    };
    StaticData.getLevelIcon = function (level) {
        return "level_icon_" + level + "_png";
    };
    StaticData.getMoneyIcon = function (type) {
        var _name = type == 1 ? "glod" : "diamond";
        return "common_icon_" + _name + "_png";
    };
    StaticData.getLandImg = function (index) {
        return "land_" + index + "_png";
    };
    StaticData.getRectLand = function (color) {
        return StaticFun.getRect(StaticData.LAND_SIZE - 1, StaticData.LAND_SIZE - 1, color);
    };
    StaticData.getGirdByPos = function (pos) {
        return new Point(Math.floor(pos.x / StaticData.LAND_SIZE), Math.floor(pos.y / StaticData.LAND_SIZE));
    };
    StaticData.GAME_W = 1280;
    StaticData.GAME_H = 720;
    StaticData.GAME_frameRate = 30;
    StaticData.CODE_0 = 0;
    StaticData.CODE_7001 = 7001; //金币不足提示充值
    StaticData.CODE_7002 = 7002; //钻石不足提示充值
    StaticData.IS_LOG = true;
    StaticData.ROOM_ID = 0; //好友房间号
    StaticData.F_UID = 0; //来源
    StaticData.RES_TitleScene = "titleSceneRes";
    StaticData.RES_mainScene = "mainSceneRes";
    StaticData.RES_playScene = "playSceneRes";
    StaticData.RES_createRoom = "createRoomRes";
    StaticData.RES_joinRoom = "joinRoomRes";
    StaticData.RES_mallRes = "mallRes";
    StaticData.RES_monthRaceRes = "monthRaceRes";
    StaticData.RES_emailRes = "emailRes";
    StaticData.RES_getGoodRes = "getGoodRes";
    StaticData.RES_friendRes = "friendRes"; //
    StaticData.RES_taskRes = "taskRes"; //
    StaticData.RES_signRes = "signRes"; //
    StaticData.RES_rankRes = "rankRes"; //RES_rankRes
    StaticData.RES_setting = "settingsRes"; //
    StaticData.RES_myFriendRes = "myFriendRes"; //
    StaticData.RES_headListRes = "headListRes";
    StaticData.RES_guideRes = "guideRes";
    StaticData.RES_shareRes = "shareRes";
    StaticData.RES_payRes = "payRes";
    StaticData.RES_getNewRoleRes = "getNewRoleRes";
    StaticData.device_id = "Device_" + egret.getTimer() + "_" + StaticFun.getRanNum(1000000);
    StaticData.LAND_SIZE = 36;
    StaticData.PLAY_MODE_NORMAL = 1;
    StaticData.PLAY_MODE_TEAM = 2;
    StaticData.PLAY_MODE_FRIEND = 3;
    StaticData.MONEY_COIN = 1; //金币
    StaticData.MONEY_DIAMOND = 2; //钻石
    StaticData.MONEY_CANDY = 3; //空间宠物糖果
    StaticData.DIR_DOWN = "down";
    StaticData.DIR_UP = "up";
    StaticData.DIR_RIGHT = "right";
    StaticData.DIR_LEFT = "left";
    StaticData.POS_NAME = "p";
    StaticData.PLAYER_KEY = "player_";
    StaticData.MALL_TYPE_USE = "use";
    StaticData.MALL_TYPE_BUY = "buy";
    StaticData.MALL_TYPE_UNLOCK = "unlock";
    StaticData.IS_NEW_USER = false;
    StaticData.IS_NEW_GUIDE = false;
    StaticData.GUIDE_CURR_ID = 0;
    StaticData.BTN_SPEED_UP_RIGHT = true;
    StaticData.LOAD_ID = 1;
    StaticData.PAY_GIVE_DOUBLE = false;
    return StaticData;
}());
__reflect(StaticData.prototype, "StaticData");
//# sourceMappingURL=StaticData.js.map