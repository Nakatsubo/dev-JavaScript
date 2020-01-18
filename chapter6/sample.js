// // コンファームを表示
// // comfirm(); => 真偽値を返す
// const btn = document.querySelector('.button');
// btn.addEventListener('click', (e) => {
//   const isYes = confirm('天気は晴れていますか？');
//   document.querySelector('.log').innerHTML = isYes;
// }, false);

// // 文字入力プロンプトを表示
// // prompt();
// const btn = document.querySelector('.button');
// btn.addEventListener('click', (e) => {
//   const text = prompt('どうですか', 'デフォルトの文言');
//   document.querySelector('.log').innerHTML = text;
//   console.log(text);
//   // => 文字列 or Null
// }, false);

// // ウィンドウサイズを調べる
// // window.innerWidth
// console.log(window.innerWidth);
// // => windowの横幅
// // window.innerHeight
// console.log(window.innerHeight);
// // => windowの縦幅

// // ウィンドウサイズを調べるサンプル
// window.addEventListener('resize', resizeHandler, false);
// function resizeHandler(e) {
//   const w = window.innerWidth;
//   const h = window.innerHeight;
//   document.querySelector('.value-width').innerHTML = `横幅は${w}pxです`;
//   document.querySelector('.value-height').innerHTML = `横幅は${h}pxです`;
// };
// // => 横幅は1040pxです
// // => 横幅は560pxです

// // デバイスのピクセル比を調べる
// // 「高解像度ディスプレイ」 => ピクセル密度が高いディスプレイ(HiDPIディスプレイ)
// // window.devicePixelRatio
// console.log(window.devicePixelRatio);
// // => MacBookProなので、2
// // 1: 通常のディスプレイ, 2: iPhoneやAndroidの多く, 3: ハイスペック端末

// // デバイスのピクセル比をcanvas要素に適用したサンプル
// const dpr = window.devicePixelRatio;
// // 論理的な大きさ
// const w = 200;
// const h = 200;

// const canvas = document.querySelector('canvas');
// // 実態の大きさを倍にする
// canvas.width = w * dpr;
// canvas.height = h * dpr;
// // 表示サイズ
// canvas.style.width = w + 'px';
// canvas.style.height = h + 'px';
// // getContextメソッドで描画機能を有効にする
// const context = canvas.getContext('2d');
// // スケールを設定
// context.scale(dpr, dpr);
// // 円を描画
// context.fillStyle = 'red';
// context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
// context.fill();
// // ログを表示
// document.querySelector('.log').innerHTML = `現在のデバイスピクセル比は${dpr}です`;
// // => <canvas id="myCanvas" width="400" height="400" style="width: 200px; height: 200px;"></canvas>
// // => 現在のデバイスピクセル比は2です


