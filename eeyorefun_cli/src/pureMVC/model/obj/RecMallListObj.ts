class RecMallListObj extends BaseVO {
	public list: number[];//已拥有角色
	public alist: number[];//已解锁角色
	public constructor(obj: Object) {
		super(obj);
	}
	public checkHave(id: number): boolean {
		for (var i in this.list) {
			if (id == this.list[i]) {
				return true;
			}
		}
		return false;
	}
	public checkUnlock(id: number): boolean {
		for (var i in this.alist) {
			if (id == this.alist[i]) {
				return true;
			}
		}
		return false;
	}
}