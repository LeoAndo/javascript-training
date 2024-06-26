window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// XMLファイルを読み込みボタンにイベントを割り当て
	document.getElementById("loadBtn").addEventListener("click", function(evt){
		// 非同期通信オブジェクト作成
		var xhr = new XMLHttpRequest();
		// 読み込み完了時のイベントハンドラを設定
		xhr.onload = function(){
			// 読み込んだ内容を出力
			ele.innerHTML = xhr.responseText;
		}
		// 同一ドメインのURL上のファイルを指定
		xhr.open("get", "./data.txt", true);
		// キャッシュしないようにする(IE)
		var specDay = (new Date("2012/1/1")).toGMTString();
		xhr.setRequestHeader("If-Modified-Since", specDay);
		// リクエスト送信
		xhr.send(null);
	}, false);
}, false);