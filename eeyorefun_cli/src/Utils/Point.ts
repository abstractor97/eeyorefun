/**
 *
 * @author 
 *
 */
class Point extends egret.Point {
	public constructor(_x: number = 0, _y: number = 0, str?: string) {
		super(_x, _y);
		if (str) {
			var _arr: Array<any> = str.split("-");
			this.x = Number(_arr[0]);
			this.y = Number(_arr[1]);
		}
	}
	public toString(): string {
		return this.x + "_" + this.y;
	}
	public getKey(): string {
		return this.x + "-" + this.y;
	}
}
