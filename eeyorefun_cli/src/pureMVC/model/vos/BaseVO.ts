class BaseVO {
	public constructor(data?: Object) {
		if(data==null){
			return;
		}
		for (var key in data) {
			this[key] = data[key];
		}
	}

}