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
/**
 *
 * @author
 *
 */
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        return _super.call(this) || this;
    }
    EventManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EventManager();
        }
        return this._instance;
    };
    EventManager.prototype.sendEvent = function (name, data, type) {
        if (data === void 0) { data = null; }
        this.dispatchEvent(new CustomEventMy(name, data, type));
    };
    EventManager.REC_EVENT = "rec_event"; //发送主事件
    EventManager.EVENT_USER_INFO_CHANGE = "event_user_info_change"; //玩家信息发生变化
    EventManager.EVENT_LANG_CHANGE = "event_lang_change"; //语言切换
    EventManager.EVENT_MALL_GOOD_TAP = "event_mall_good_tap"; //点击商城
    EventManager.EVENT_PAY_GOOD_TAP = "event_pay_good_tap"; //点击支付
    EventManager.EVENT_EMAIL_LIST_TAP = "event_email_list_tap"; //点击邮件
    EventManager.EVENT_TAP_TASK_LIST = "event_tap_task_list"; //点击任务列表
    EventManager.EVENT_GET_TASK_COM = "event_get_task_com"; //成功领取任务奖励
    EventManager.EVENT_GET_COLLECT_COM = "event_get_collect_com"; //成功领取收集奖励
    EventManager.EVENT_HEAD_CHANGE = "event_head_change"; //跟换头像
    EventManager.EVENT_KILL_PLAYER = "event_kill_player"; //玩家被击杀
    EventManager.EVENT_PLAYER_DO = "event_player_do"; //玩家事件
    EventManager.EVENT_SHOW_USER_INFO = "event_show_user_info"; //显示用户信息
    EventManager.EVENT_IS_ME_FIRST = "event_is_me_first"; //是否我自己第一
    EventManager.EVENT_TIME_OVER = "event_time_over"; //房间倒计时结束
    EventManager.EVENT_MALL_DATA_CHANGE = "event_mall_data_change"; //商店列表数据发生改变
    EventManager.EVENT_GAME_DO = "event_game_do"; //游戏操作
    EventManager.EVENT_PAY_RESULT = "event_pay_result"; //支付结果返回
    EventManager.EVENT_SHARE_RESULT = "event_share_result"; //分享结果返回
    EventManager.EVENT_SEND_GUIDE_ID = "event_send_guide_id"; //上报引导步骤
    EventManager.EVENT_INTO_NORMAL = "event_into_normal"; //进入无尽模式
    EventManager.EVENT_GET_DROP_GOOD = "event_get_drop_good"; //捡到掉落物品
    EventManager.EVENT_ADD_SHORTCUT = "event_add_shortcut"; //发送到桌面
    EventManager.TYPE_SHARE = "share"; //分享
    EventManager.TYPE_SHARE_AWARD = "award"; //分享奖励
    EventManager.TYPE_SHARE_INVITE = "invite"; //邀请好友
    EventManager.TYPE_SHARE_CONTINUE = "continue"; //复活
    EventManager.TYPE_TASK_COM = "com"; //完成任务
    EventManager.TYPE_TASK_COLLECT = "collect"; //收集
    EventManager.PLAYER_DO_GET_GOOD = "get_good"; //拾取物品
    return EventManager;
}(egret.EventDispatcher));
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=EventManager.js.map