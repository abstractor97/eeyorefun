class PlaySceneView extends BaseSceneView {

	private _beginPos: Point;
	private _teamPlayers: number = 1;
	private _playerInitLandSize: number;
	private _gameStartVO: GameStartVO;
	private _baseProxy: GameBaseDataProxy;
	
	//显示对象

	public constructor(gameStartVO: GameStartVO) {
		super();
		this.skinName = StaticData.getSkinName("PlaySceneSkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
	}

}