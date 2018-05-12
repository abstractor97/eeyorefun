class GuideGameControlVO {
	public cList: ControlVO[];
	public constructor(str: string) {
		this.cList = [];
		if(String(str)=="0"){
			return;
		}
		var _arr: string[] = str.split("|");
		for (var i in _arr) {
			this.cList.push(new ControlVO(_arr[i]));
		}
	}
}
class ControlVO {
	public control:string;
	public value:any=0;
	public constructor(str: string) {
		var _arr:string[]=str.split(":");
		this.control=_arr[0];
		if(_arr.length>1){
			this.value=_arr[1];
		}
	}
}