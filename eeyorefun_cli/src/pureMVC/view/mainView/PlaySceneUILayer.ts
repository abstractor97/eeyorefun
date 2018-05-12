class PlaySceneUILayer extends BaseUILayer implements IBaseGC {
	public static EVENT_SPEED_CHANGE: string = "speed_change";


	public constructor() {
		super();
		this.skinName = StaticData.getSkinName("PlaySceneUISkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		
	}
	public baseGC() {
	}
	
}