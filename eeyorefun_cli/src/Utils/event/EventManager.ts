/**
 *
 * @author 
 *
 */
class EventManager extends egret.EventDispatcher {
    public static REC_EVENT: string = "rec_event";//发送主事件
    public static EVENT_USER_INFO_CHANGE: string = "event_user_info_change";//玩家信息发生变化
    public static EVENT_LANG_CHANGE: string = "event_lang_change";//语言切换
    public static EVENT_MALL_GOOD_TAP: string = "event_mall_good_tap";//点击商城
    public static EVENT_PAY_GOOD_TAP: string = "event_pay_good_tap";//点击支付
    public static EVENT_EMAIL_LIST_TAP: string = "event_email_list_tap";//点击邮件
    public static EVENT_TAP_TASK_LIST: string = "event_tap_task_list";//点击任务列表
    public static EVENT_GET_TASK_COM: string = "event_get_task_com";//成功领取任务奖励
    public static EVENT_GET_COLLECT_COM: string = "event_get_collect_com";//成功领取收集奖励
    public static EVENT_HEAD_CHANGE: string = "event_head_change";//跟换头像
    public static EVENT_KILL_PLAYER: string = "event_kill_player";//玩家被击杀
    public static EVENT_PLAYER_DO: string = "event_player_do";//玩家事件
    public static EVENT_SHOW_USER_INFO: string = "event_show_user_info";//显示用户信息
    public static EVENT_IS_ME_FIRST: string = "event_is_me_first";//是否我自己第一
    public static EVENT_TIME_OVER: string = "event_time_over";//房间倒计时结束
    public static EVENT_MALL_DATA_CHANGE: string = "event_mall_data_change";//商店列表数据发生改变
    public static EVENT_GAME_DO: string = "event_game_do";//游戏操作
    public static EVENT_PAY_RESULT: string = "event_pay_result";//支付结果返回
    public static EVENT_SHARE_RESULT: string = "event_share_result";//分享结果返回
    public static EVENT_SEND_GUIDE_ID: string = "event_send_guide_id";//上报引导步骤
    public static EVENT_INTO_NORMAL: string = "event_into_normal";//进入无尽模式
    public static EVENT_GET_DROP_GOOD: string = "event_get_drop_good";//捡到掉落物品

    public static EVENT_ADD_SHORTCUT: string = "event_add_shortcut";//发送到桌面

    public static TYPE_SHARE: string = "share";//分享
    public static TYPE_SHARE_AWARD: string = "award";//分享奖励
    public static TYPE_SHARE_INVITE: string = "invite";//邀请好友
    public static TYPE_SHARE_CONTINUE: string = "continue";//复活
    public static TYPE_TASK_COM:string="com";//完成任务
    public static TYPE_TASK_COLLECT:string="collect";//收集
    public static PLAYER_DO_GET_GOOD: string = "get_good";//拾取物品



    private static _instance: EventManager;
    public constructor() {
        super();
    }
    public static getInstance(): EventManager {
        if (this._instance == null) {
            this._instance = new EventManager();
        }
        return this._instance;
    }
    public sendEvent(name: string, data: any = null, type?: string): void {
        this.dispatchEvent(new CustomEventMy(name, data, type));
    }

}
