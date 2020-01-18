// コンファームを表示
// comfirm(); => 真偽値を返す
const btn = document.querySelector('.button');
btn.addEventListener('click', (e) => {
  const isYes = confirm('天気は晴れていますか？');
  document.querySelector('.log').innerHTML = isYes;
}, false);

// 文字入力プロンプトを表示
// prompt();
const btn = document.querySelector('.button');
btn.addEventListener('click', (e) => {
  const text = prompt('どうですか', 'デフォルトの文言');
  document.querySelector('.log').innerHTML = text;
  console.log(text);
  // => 文字列 or Null
}, false);

// ウィンドウサイズを調べる
// window.innerWidth
console.log(window.innerWidth);
// => windowの横幅
// window.innerHeight
console.log(window.innerHeight);
// => windowの縦幅

// ウィンドウサイズを調べるサンプル
window.addEventListener('resize', resizeHandler, false);
function resizeHandler(e) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  document.querySelector('.value-width').innerHTML = `横幅は${w}pxです`;
  document.querySelector('.value-height').innerHTML = `横幅は${h}pxです`;
};
// => 横幅は1040pxです
// => 横幅は560pxです

// デバイスのピクセル比を調べる
// 「高解像度ディスプレイ」 => ピクセル密度が高いディスプレイ(HiDPIディスプレイ)
// window.devicePixelRatio
console.log(window.devicePixelRatio);
// => MacBookProなので、2
// 1: 通常のディスプレイ, 2: iPhoneやAndroidの多く, 3: ハイスペック端末

// デバイスのピクセル比をcanvas要素に適用したサンプル
const dpr = window.devicePixelRatio;
// 論理的な大きさ
const w = 200;
const h = 200;

const canvas = document.querySelector('canvas');
// 実態の大きさを倍にする
canvas.width = w * dpr;
canvas.height = h * dpr;
// 表示サイズ
canvas.style.width = w + 'px';
canvas.style.height = h + 'px';
// getContextメソッドで描画機能を有効にする
const context = canvas.getContext('2d');
// スケールを設定
context.scale(dpr, dpr);
// 円を描画
context.fillStyle = 'red';
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();
// ログを表示
document.querySelector('.log').innerHTML = `現在のデバイスピクセル比は${dpr}です`;
// => <canvas id="myCanvas" width="400" height="400" style="width: 200px; height: 200px;"></canvas>
// => 現在のデバイスピクセル比は2です

// タッチできるかどうか判定
// window.ontouchstart => タッチ開始のイベント, 関数
// navigator.pointerEnabled => ポインターが使えるかどうか, 真偽値
// navigator.maxTouchPoints => ポインターの最大数, 数値
const isSupported = !!(
  'ontouchstart' in window || (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
console.log(isSupported);
// => MacBookProなので、false

// ページを移動する
// location.href => a要素以外の手段で移動
console.log(location.href);
location.href = 'another.html';

// ページをリロードする
// location.reload(true or false)
location.reload(true);

// 履歴前後のページに移動する
history.back();
history.forward();
history.go(1);
history.go(-1);

// アンカーを取得する
// location.hash
// 取得する
const hash = location.hash;
console.log(hash);
// 書き込む
location.hash = 'app';

// ハッシュ(#)を検知する
// hashchange
window.addEventListener('hashchange', handleHashChange, false);
function handleHashChange() {
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `現在のアンカーは${hash}です`;
};
// => 現在のアンカーは#appleです
// => ~/sample.html#apple

// 新しいウィンドウを開く
// window.open(URL)
const win = window.open('another.html');
win.focus();

// ウィンドウのスクロール量を調べる
// window.scrollX => 水平方向のスクロール量
// window.scrollY => 垂直方向のスクロール量
const x = window.scrollX;
const y = window.scrollY;
console.log(x, y);
// => 0 0

// ウィンドウをスクロールさせる
// scrollTo(X, Y)
window.scrollTo(0, 1000);

// タイトルを書き換える
// document.title
// タイトルを取得
let title = document.title;
console.log(title);
// => Sample JavaScript
// タイトルを書き換え
document.title = 'Change Title';
title = document.title;
console.log(title);
// => Change Title
// タイトルを書き換えるサンプル
document.querySelector('#btnOrange').addEventListener('click', () => {
  document.title = 'オレンジ';
}, false);
// => オレンジ
document.querySelector('#btnApple').addEventListener('click', () => {
  document.title = 'アップル';
}, false);
// => アップル

// ページにフォーカスがあたっているか調べる
// focus => フォーカスがあたっている
// blur => フォーカスが外れている
window.addEventListener('focus', () => {
  document.querySelector('.log').innerHTML = 'フォーカスがあたっている';
}, false);
window.addEventListener('blur', () => {
  document.querySelector('.log').innerHTML = 'フォーカスがはずれている';
}, false);

// フルスクリーンにする/解除する
// element.requestFullscreen(); => フルスクリーンにする
// document.exitFullscreen(); => フルスクリーンを解除する
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  myRequestFullscreen(document.body);
}, false);
function myRequestFullscreen(element) {
  if (element.Fullscreen) {
    element.requestFullscreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    // Safari, Chrome
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullscreen();
    // Firefox
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
    // IE 11+
  };
};
const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (e) => {
  myCancelFullscreen(document.body);
}, false);
function myCancelFullscreen(element) {
  if (element.exitFullscreen) {
    element.exitFullscreen();
  } else if(element.webkitCancelFullscreen) {
    element.webkitCancelFullscreen();
    // Safari, Chrome
  } else if(element.mozCancelFullscreen) {
    element.mozCancelFullscreen();
    // Firefox
  } else if(element.msExitFullscreen) {
    element.msExitFullscreen();
    // IE 11+
  };
};

// ネットワーク状況を取得する
// navigator.onLine
const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('オンラインです');
} else {
  console.log('オフラインです');
};
// => オンラインです
// => オフラインです
// developerToolの Network => offline から確認する
// イベントリスナで呼び出す場合
window.addEventListener('online', () => {
  console.log('オンラインです');
}, false);
window.addEventListener('offline', () => {
  console.log('オフラインです');
}, false);
