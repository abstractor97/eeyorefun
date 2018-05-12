/**
 *
 * @author 
 *
 */
class StaticData {
	public static GAME_W: number = 1280;
	public static GAME_H: number = 720;
	public static GAME_frameRate: number = 30;
	public static CODE_0: number = 0;
	public static CODE_7001: number = 7001;//金币不足提示充值
	public static CODE_7002: number = 7002;//钻石不足提示充值
	public static RANDOM_NUM: number;;
	public static STAGE_W: number;
	public static STAGE_H: number;
	public static IS_LOG: boolean = true;
	public static IS_DEBUG: boolean;
	public static S_ID: string;
	public static ROOM_ID: number = 0;//好友房间号
	public static F_UID: number = 0;//来源
	public static PLAT_ID: number;
	public static configVO: ConfigVO;
	public static langConfig: LangConfigData;

	public static OPEN_KEY: string;
	public static OPEN_ID: string;
	public static APP_ID: number;

	public static zoneid: number;

	public static RES_TitleScene: string = "titleSceneRes";
	public static RES_mainScene: string = "mainSceneRes";
	public static RES_playScene: string = "playSceneRes";
	public static RES_createRoom: string = "createRoomRes";
	public static RES_joinRoom: string = "joinRoomRes";
	public static RES_mallRes: string = "mallRes";
	public static RES_monthRaceRes: string = "monthRaceRes";
	public static RES_emailRes: string = "emailRes";
	public static RES_getGoodRes: string = "getGoodRes";
	public static RES_friendRes: string = "friendRes";//
	public static RES_taskRes: string = "taskRes";//
	public static RES_signRes: string = "signRes";//
	public static RES_rankRes: string = "rankRes";//RES_rankRes
	public static RES_setting: string = "settingsRes";//
	public static RES_myFriendRes: string = "myFriendRes";//
	public static RES_headListRes: string = "headListRes";
	public static RES_guideRes: string = "guideRes";
	public static RES_shareRes: string = "shareRes";
	public static RES_payRes: string = "payRes";
	public static RES_getNewRoleRes: string = "getNewRoleRes";



	public static device_id: string = "Device_" + egret.getTimer() + "_" + StaticFun.getRanNum(1000000);
	// public static device_id: string = "Device_1112" 
	public static USER_UID: number;
	public static IS_LOGIN: boolean;
	public static LAND_SIZE: number = 36;

	public static PLAY_MODE_NORMAL: number = 1;
	public static PLAY_MODE_TEAM: number = 2;
	public static PLAY_MODE_FRIEND: number = 3;


	public static MONEY_COIN: number = 1;//金币
	public static MONEY_DIAMOND: number = 2;//钻石
	public static MONEY_CANDY: number = 3;//空间宠物糖果

	public static DIR_DOWN: string = "down";
	public static DIR_UP: string = "up";
	public static DIR_RIGHT: string = "right";
	public static DIR_LEFT: string = "left";

	public static POS_NAME: string = "p";
	public static PLAYER_KEY: string = "player_";

	public static MALL_TYPE_USE: string = "use";
	public static MALL_TYPE_BUY: string = "buy";
	public static MALL_TYPE_UNLOCK: string = "unlock";

	public static IS_NEW_USER: boolean = false;
	public static IS_NEW_GUIDE: boolean = false;
	public static GUIDE_CURR_ID: number = 0;

	public static BTN_SPEED_UP_RIGHT: boolean = true;

	public static LOAD_ID: number = 1;

	public static PAY_GIVE_DOUBLE: boolean = false;

	public constructor() {
	}
	public static getLoadID(): number {
		return ++StaticData.LOAD_ID;
	}
	public static getReqHttpUrl(reqStr: string): string {
		return StaticData.configVO.http_platform + reqStr + "?pf=" + StaticData.configVO.platform + "&openid=" + StaticData.OPEN_ID + "&openkey=" + StaticData.OPEN_KEY
	}
	public static setOpenKey(obj: Object) {
		if (obj["code"] != 0) {
			AlertCtrl.getInstance().showAlert("getOpenKey:ERROR!!");
			return;
		}
		StaticData.OPEN_ID = obj["data"]["openid"];
		StaticData.OPEN_KEY = obj["data"]["openkey"];
		StaticData.APP_ID = obj["data"]["appid"];
	}
	public static getPlayerKey(userID: number): string {
		return StaticData.PLAYER_KEY + userID;
	}
	public static getIndexByKey(keyName: string): number {
		return Number(keyName.split(StaticData.PLAYER_KEY)[1]);
	}
	public static getPosNameY(yNum: number): string {
		return StaticData.POS_NAME + yNum;
	}
	public static getYByKey(key: string): number {
		var _yNun: number = Number(key.split(StaticData.POS_NAME)[1]);
		return _yNun;
	}
	public static getSkinName(skinName: string): string {
		return skinName;
	}
	public static getSexIcon(sex: number): string {
		sex = sex == 2 ? 0 : sex;
		return "common_icon_sex_" + sex + "_png";
	}
	public static getRoleName(roleID: number): string {
		return "role_" + roleID;
	}
	public static getHeadIcon(id: number): string {
		if (id == 0) {
			return "";
		}
		return "head_" + id + "_png";
	}
	
	//type=small_;
	public static getMallIcon(id: number, type: string = ""): string {
		if (id < 10) {
			return this.getMoneyIcon(id);
		}
		return "role_icon_" + type + id + "_png";
	}
	public static getLevelIcon(level: number): string {
		return "level_icon_" + level + "_png";
	}
	public static getMoneyIcon(type: number): string {
		var _name: string = type == 1 ? "glod" : "diamond";
		return "common_icon_" + _name + "_png";
	}
	public static getLandImg(index: number): string {
		return "land_" + index + "_png";
	}
	public static getRectLand(color: number): egret.Sprite {
		return StaticFun.getRect(StaticData.LAND_SIZE - 1, StaticData.LAND_SIZE - 1, color);
	}
	
	public static getGirdByPos(pos: Point): Point {
		return new Point(Math.floor(pos.x / StaticData.LAND_SIZE), Math.floor(pos.y / StaticData.LAND_SIZE));
	}
}

