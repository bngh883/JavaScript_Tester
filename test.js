import React from 'react';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

/*
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
		let str = "";
		let lines = data.split('\n');
		for (let i = 0; i < lines.length; i++) {
			let cells = lines[i].split(',');
			str = str + cells[2];
		}
		let csv_area = document.getElementById('csv_area');
		csv_area.innerHTML = str;
	})
});
*/