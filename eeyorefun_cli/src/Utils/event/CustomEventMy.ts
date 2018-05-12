/**
 *
 * @author 
 *
 */
class CustomEventMy extends egret.Event{
    private _data:any;
    private _name:string;
    private _type:string;
    public constructor(name: string,data: any = null,type: string = null,bubbles: boolean = false,cancelable: boolean = false) {
        super(name,bubbles,cancelable);
        this._name=name;
        this._data=data;
        this._type=type;
	}
	public get type():string{
	    return this._type;
	}
	public get data():any{
	    return this._data;
	}
	public get name():string{
	    return this._name;
	}
}
