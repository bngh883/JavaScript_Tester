window.addEventListener('DOMContentLoaded', function(){

	fetch('./FileBox/test.txt') // (1) リクエスト送信
	.then(response => response.text()) // (2) レスポンスデータを取得
	.then(data => { // (3)レスポンスデータを処理

		const txt_area = document.getElementById('txt_area');
		txt_area.innerHTML = data.replace(/\n/g, "<br>");

	});

	fetch('./FileBox/test.csv')
	.then(response => response.text())
	.then(data =>{
		//let lines = data.split('\n');
		const txt_area = document.getElementById('txt_area');
		txt_area.innerHTML = data.replace(/\n/g, "<br>");
	})
});