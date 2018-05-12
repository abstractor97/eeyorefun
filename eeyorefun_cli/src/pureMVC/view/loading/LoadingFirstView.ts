/**
 *
 * @author 
 *
 */
class LoadingFirstView extends BaseLoadingView {
    public constructor() {
    	super();
		this.skinName ="LoadingBaseSkin";
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		this.width=this.stage.stageWidth;
		this.height=this.stage.stageHeight;
	}
}
