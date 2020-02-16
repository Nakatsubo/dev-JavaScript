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

// // 画像のRGBAを調べるサンプル
// const canvas = document.querySelector('#myCanvas');
// const context = canvas.getContext('2d');
// const img = new Image();
// img.onload = () => {
//   context.drawImage(img, 0, 0);
// }
// img.src = 'sample.jpg';

// // マウスイベント
// canvas.addEventListener('mousemove', (e) => {
//   // マウスの座標を取得
//   const x = e.layerX;
//   const y = e.layerY;

//   // ImageDataを取得
//   const imageData = context.getImageData(x, y, 1, 1);

//   // 画素配列を取得
//   const data = imageData.data;
//   console.log(data);
//   const r = data[0];
//   const g = data[1];
//   const b = data[2];
//   const a = data[3];
//   const color = `rgba(${r}, ${g}, ${b}, ${a})`;

//   const el = document.querySelector('.log');
//   el.style.background = color;
//   el.textContent = color;
// });

// // 画像を入力
// const canvas1 = document.querySelector('#canvas-original');
// const context1 = canvas1.getContext('2d');
// const img = new Image();
// img.onload = () => {
//   context1.drawImage(img, 0, 0)

//   // 画像情報を取得
//   const imageData = context1.getImageData(0, 0, 150, 150);
//   const data = imageData.data;

//   // ImageDataオブジェクトを作成
//   const monoImageData = new ImageData(150, 150);

//   // 画像データの配列を作る
//   // [R, G, B, A, ... ]
//   const monoArr = monoImageData.data;
//   for (let i = 0; i < data.length / 4; i += 1) {

//     // 画素情報を取得
//     const r = data[i * 4 + 0];
//     const g = data[i * 4 + 1];
//     const b = data[i * 4 + 2];
//     const a = data[i * 4 + 3];

//     // 平均値を求める（簡易的な計算のため）
//     const color = (r + g + b) / 3;

//     // 新しい配列に色を指定
//     monoArr[i * 4 + 0] = color;
//     monoArr[i * 4 + 1] = color;
//     monoArr[i * 4 + 2] = color;
//     monoArr[i * 4 + 3] = a;
//   }
//   console.log(monoArr);

//   const canvas2 = document.querySelector('#canvas-effected');
//   const context2 = canvas2.getContext('2d');
//   context2.putImageData(monoImageData, 0, 0);
// };
// img.src = 'sample.jpg';

// // DataURL形式で出力する
// // 画像を取得する
// const canvas = document.querySelector('#myCanvas');
// const context = canvas.getContext('2d');

// // 画像を描画する
// context.fillStyle = 'red';
// context.fillRect(0, 0, 100, 100);
// context.fillStyle = 'green';
// context.fillRect(25, 25, 50, 50);

// const data = canvas.toDataURL();
// console.log(data);
// // => data:image/png;base64,...

// const img = document.querySelector('#my-img');
// img.src = data;
// // => 出力結果
// // <main class="centering">
//   // <div>
//     // <canvas id="myCanvas" width="150" height="150"></canvas>
//     // <br>
//     // <img id="my-img" src="data:image/png;base64,...">
//   // </div>
// // </main>

// 指定したDataURL形式を取得
// 変数の初期化
const STAGE_W = 300; // 幅
const STAGE_H = 300; // 高さ
const CENTER_X = STAGE_W / 2; // 中心X座標
const CENTER_Y = STAGE_H / 2; // 中心Y座標
const MAX = 150; // ループ回数

// 変数の初期化
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let n = 0; // カウント

// アニメーションを開始
tick();

function tick() {
  // 描画をリセット
  context.clearRect(0, 0, STAGE_W, STAGE_H);

  // 変数
  let oldX = CENTER_X;
  let oldY = CENTER_Y;

  // 模様を描く
  for (let i = 0; i < MAX; i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'hsl(' + ((i / MAX) * 360 + n * 4000) + ', 100%, 50%)';
    context.moveTo(oldX, oldY);
    context.lineTo((oldX = CENTER_X + i * Math.cos(i + i * n)), (oldY = CENTER_Y + i * Math.sin(i + i * n)));
    context.stroke();
  }

  // カウントを更新
  n += 0.00025;

  // 繰り返し実行
  requestAnimationFrame(tick);
}

// toDataURL('image/jpeg') => JPEG 画像を取得
const btnJpeg = document.querySelector('#btnJpeg');
btnJpeg.addEventListener('click', () => {
  const data = canvas.toDataURL('image/jpeg');
  cloneToImage(data);
});

// toDataURL('image/png') => PNG 画像を取得
const btnPng = document.querySelector('#btnPng');
btnPng.addEventListener('click', () => {
  const data = canvas.toDataURL('image/png');
  cloneToImage(data);
});

// toDataURL('image/webp') => WebP 画像を取得
const btnWebp = document.querySelector('#btnWebp');
btnWebp.addEventListener('click', () => {
  const data = canvas.toDataURL('image/webp');
  cloneToImage(data);
});

// img要素にDataURLの文字列を代入
function cloneToImage(data) {
  document.querySelector('#myImg').src = data;
}

