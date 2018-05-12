/**
 *
 * @author 
 *
 */
class ConfigVO extends BaseVO {
    public ws: string;
    public wss: string;
    public isDebug: boolean;
    public isLog: boolean;
    public server: string;
    public shareURL: string;
    public platform: string;//平台
    public http_platform: string;//平台请求地址
    public getInfoUrl: string;//获取腾讯用户信息
    public getHaveUrl: string;//获取用户星币余额
    public getPayUrl: string;//用户扣除星币
    public getNote: string;//获取公告信息
    public sendCandy:string;//发放糖果
    public chatRoomClew: string;//玩家交流群提示
    public heartTime: number;
    public normalRestartPrice: number;//无尽模式复活价格
    public normalRestartTimes: number;//无尽模式单场复活次数
    public normalPlayers: number;//无尽模式玩家人数
    public normalLandSize: number;//无尽模式玩家初始土地
    public teamCount: number;//团战模式队伍数
    public teamPlayers: number;//团战模式m没队玩家数
    public teamLandSize: number;//团战模式玩家初始土地
    public teamModeTime: number;//团战时间(秒)
    public deadWaiTime: number;//团战/好友死亡等待时间(秒)
    public powerAddNum: number;//能量增加速度
    public powerMaxNum: number;//最大能量值
    public speedNum: number;//移动速度
    public roleRandID: number;
    public raceName: string;//赛季名称
    public raceTime: string;//赛季时间
    public raceRule: string;
    public taskClew: string[];
    public shareClew: string[];
    public inviteClew: string[];
    public restartClew: string[];
    public friendResultClew: string[];
    public teamResultClew: string[];
    public teamAwardList: number[];
    public createRoomTime: number[];
    public mainSceneTipList: string[];//首页轮播提示
    public uidTestList: number[];//测试玩家帐号

    public constructor(data: Object) {
        super(data);
        if (this.isDebug) {
            this.server = this.ws;
        } else {
            this.server = this.wss;
        }
    }
    
    public  checkTestUid(uid: number): boolean {
        var _list: number[] = this.uidTestList;
        for (var i in _list) {
            if (_list[i] == uid) {
                return true;
            }
        }
        return false;
    }
}
