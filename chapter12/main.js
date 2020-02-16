// // SVG(スケーラブル・ベクター・グラフィックス)
// // createElementNS => 指定された名前空間 URI と修飾名を持つ要素を生成します。
// // https://developer.mozilla.org/ja/docs/Web/API/Document/createElementNS
// const myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

// myCircle.setAttribute('cx', '100'); // X座標の中心点
// myCircle.setAttribute('cy', '100'); // Y座標の中心点
// myCircle.setAttribute('r', '100'); // 円の半径
// myCircle.setAttribute('fill', '#FFFF8D'); // 塗り

// const mySvg = document.querySelector('#mySvg');
// mySvg.appendChild(myCircle);

// // SVGのスタイルを変更する
// // 要素.setAttribute(属性名, 値)
// const myCircle = document.querySelector('#myCircle');
// myCircle.setAttribute('r', 100);
// myCircle.setAttribute('fill', '#FFFF8D');
// myCircle.setAttribute('opacity', 0.5);

// // SVGをマウス操作する
// const myCircle = document.querySelector('#myCircle');
// myCircle.addEventListener('click', () => {
//   alert('クリックされました');
// });

// // SVGをアニメーションさせる
// const myCircle = document.querySelector('#myCircle');
// let time = 0;

// animate();

// function animate() {
//   time += 0.1;
//   // hsl => 色合い, 彩度, 輝度
//   myCircle.style.fill = `hsl(0, 100%, ${time}%)`;
//   // console.log(time);
//   // => (0, 100, 50) => Redになる

//   // 繰り返し処理
//   if (time < 50) {
//     // requestAnimationFrame() => 自身の関数内で呼び出し、繰り返し処理
//     requestAnimationFrame(animate);
//   };
// };

// // SVGをダウンロードするサンプル
// // 保存ボタンをクリックしたときの処理
// document.querySelector('#btnSave').addEventListener('click', saveFile);

// // ファイルとして保存
// function saveFile() {
//   // ファイル名
//   const fileName = `mySvg.svg`;

//   // SVG要素を取得
//   const content = document.querySelector('#mySvg').outerHTML;
//   console.log(content);
//   // => <svg viewBox="0 0 200 200" width="200" height="200" id="mySvg"><circle cx="100" cy="100" r="100" fill="#FFFF8D"></circle></svg>

//   // encodeURIComponent() 関数は、特定の文字を UTF-8 文字エンコーディングで表された 1 個から 4 個のエスケープシーケンスに置き換えることで、URI (Uniform Resource Identifier) 構成要素をエンコードします。
//   // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

//   // データを準備
//   const dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);
//   console.log(dataUrl);
//   // => data:image/svg+xml, %3Csvg...

//   // BOMの文字化け対策
//   // Uint8Array タイプは、8 ビット符号なし整数値の配列を表します。各要素は0で初期化されます。
//   // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
//   const bom = new Uint8Array([0xef, 0xbb, 0xbf]);

//   // Blob オブジェクトはファイルに似たオブジェクトで、immutable な生データです。
//   // https://developer.mozilla.org/ja/docs/Web/API/Blob
//   const blob = new Blob([bom, content], { type: 'text/plain' });
//   console.log(blob);
//   // => Blob {size: 150, type: "text/plain"}

//   // URL.createObjectURL() 静的メソッドは、引数で指定されたオブジェクトを表す URL を含む DOMString を生成します。
//   // https://developer.mozilla.org/ja/docs/Web/API/URL/createObjectURL

//   if (window.navigator.msSaveBlob) {
//     // for IE
//     window.navigator.msSaveBlob(blob, fileName);
//   } else if (window.URL && window.URL.createObjectURL) {
//     // for Firefox, Chrome, Safari
//     // a要素を生成
//     const a = document.createElement('a');
//     a.download = fileName;
//     // Blob オブジェクトを引数に指定する
//     a.href = window.URL.createObjectURL(blob);
//     console.log(a);
//     // => <a download="mySvg.svg" href="blob:null/4f9d47b4-7986-43ee-b172-e72c0d37f61e"></a>

//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   } else {
//     // for Safari
//     window.open(dataUrl, '_blank');
//   }
// }

// // canvas
// const canvas = document.querySelector('#myCanvas');
// // console.log(canvas);

// // getContext() => 描画機能を有効にする
// const context = canvas.getContext('2d');

// // lineWidth => 境界線の幅を指定
// context.lineWidth = 3;

// // fillStyle => 塗り、スタイルを定義
// // fillRectメソッド等の前に指定しないと、反映されない
// // context.fillStyle = 'red';
// // strokeStyle => 境界線の色を指定
// context.strokeStyle = 'red';

// // // fillRect => 矩形を描画する
// // context.fillRect(0, 0, 100, 100);

// // strokeRect => 矩形の境界線を描画
// context.strokeRect(0, 0, 100, 100);

// // 画像を貼り付け
// // context.drawImage(image, dx, dy)
// const canvas = document.querySelector('#myCanvas');
// const context = canvas.getContext('2d');

// // Imageインスタンスを生成
// const img = new Image();
// // imgを読み込んだら描画
// img.onload = () => {
//   context.drawImage(img, 0, 0);
// };
// img.src = 'sample.jpg';

// // キャンバスの画素情報を使う
// // context.getImageData(dx, dy, width, height)
// const canvas = document.querySelector('#myCanvas');
// const context = canvas.getContext('2d');
// context.fillStyle = 'red';
// context.fillRect(0, 0, 100, 100);
// const imageData = context.getImageData(0, 0, 100, 100);
// console.log(imageData.data);
// // => Uint8ClampedArray(40000) [255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, …]
// // => [R, G, B, A... ]

// 画像のRGBAを調べるサンプル
const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');
const img = new Image();
img.onload = () => {
  context.drawImage(img, 0, 0);
}
img.src = 'sample.jpg';

// マウスイベント
canvas.addEventListener('mousemove', (e) => {
  // マウスの座標を取得
  const x = e.layerX;
  const y = e.layerY;

  // ImageDataを取得
  const imageData = context.getImageData(x, y, 1, 1);

  // 画素配列を取得
  const data = imageData.data;
  console.log(data);
  const r = data[0];
  const g = data[1];
  const b = data[2];
  const a = data[3];
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;

  const el = document.querySelector('.log');
  el.style.background = color;
  el.textContent = color;
});

