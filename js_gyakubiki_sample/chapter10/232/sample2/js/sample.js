window.addEventListener("load", function(){
	// Three.jsを初期化
	var renderer = new THREE.WebGLRenderer();
	// 描画領域のサイズは縦横とも320ピクセル
	renderer.setSize(320, 320);
	// Three.jsによって生成されたCanvasをページの末尾に追加
	document.body.appendChild(renderer.domElement);
	// カメラを初期化
	var camera = new THREE.PerspectiveCamera(80, 1.0, 1, 10000);
	//var camera = new THREE.OrthographicCamera(-100, 100, 100, -100, 0.1, 2000);
	// カメラ位置を設定
	camera.position.set(55, 40, 40);
	camera.lookAt( {x:0, y:0, z:0 } );
	// オブジェクトを初期化する
	var cube = new THREE.Mesh(
		// 四角形のXYZサイズを設定
		new THREE.CubeGeometry(60, 60, 60),
		// ワイヤーフレーム表示。色は赤。不透明度は0.25%
		new THREE.MeshBasicMaterial({
			color : 0x000000,
			wireframe : true,
            })
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 立方体を3Dシーンに追加
	scene.add(cube);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// レンダリング
	renderer.render(scene, camera);
}, false);
