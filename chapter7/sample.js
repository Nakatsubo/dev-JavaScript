// // addEventLitenner()
// const button = document.querySelector('.button');
// button.addEventListener('click', onClickbutton, false);
// function onClickbutton() {
//   console.log('クリックされました');
// };
// // => クリックされました

// const button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   console.log('クリックされました');
// }, false);
// // => クリックされました

// // イベントの情報を取得する
// const button = document.querySelector('.button');
// button.addEventListener('click', (event) => {
//   console.log(event);
// }, false);
// // => MouseEvent {isTrusted: true, screenX: 45, screenY: 153, clientX: 23, clientY: 19, …}

// // イベントが発生した要素を参照する
// const button = document.querySelector('.button');
// button.addEventListener('click', (event) => {
//   console.log(event.target);
// }, false);
// // => <button class="button">Click</button>

// // オプションを指定
// const option = {
//   // イベントを一度だけ呼び出す
//   once: true
//   // イベントをキャプチャーフェーズで呼び出す
//   // capture: true
//   // イベントがパッシブかどうか
//   // passive: true
// };

// document.querySelector('.button')
//         .addEventListener('click', onClickButton, option);
// function onClickButton() {
//   alert('ボタンが押されました');
// };

// // イベントリスナーを削除する
// const button = document.querySelector('.button');
// button.addEventListener('click', onClickButton);
// setTimeout(() => {
//   button.removeEventListener('click', onClickButton);
// }, 3000);
// function onClickButton() {
//   alert('ボタンが押されました');
// };
// // アロー関数は使えない点に注意する
// // addEventListenner() と同じ引数、オプションを指定する

// window.addEventListener('DOMContentLoaded', () => {
//   const boxNum = document.querySelectorAll('.box').length;
//   console.log(`.boxの要素の数は${boxNum}です`);
// });
// // => .boxの要素の数は3です

// const boxNum = document.querySelectorAll('.box').length;
// console.log(`.boxの要素の数は${boxNum}です`);
// // => .boxの要素の数は3です

// // クリック時に処理を実行
// const button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   alert('ボタンが押されました');
// }, false);

// // マウスの動作時に処理を実行
// const logArea = document.querySelector('.log');
// logArea.addEventListener('mousedown', () => {
//   logArea.innerHTML = 'ボタンが押されました';
// });
// logArea.addEventListener('mouseup', () => {
//   logArea.innerHTML = 'ボタンが離しました';
// });
// logArea.addEventListener('mousedown', () => {
//   logArea.innerHTML = 'マウスを移動しました';
// });

// // マウスオーバー時に処理を実行
// document.querySelector('.box').addEventListener('mouseenter', () => {
//   log('ポインティングデバイスが要素の上に乗った');
// });
// // => ポインティングデバイスが要素の上に乗った

// document.querySelector('.box').addEventListener('mouseleave', () => {
//   log('ポインティングデバイスが要素の上から離れた');
// });
// // => ポインティングデバイスが要素の上から離れた
// function log(message) {
//   console.log(message);
// };

// document.querySelector('.box').addEventListener('mouseover', () => {
//   log('ポインティングデバイスが要素の上に乗った');
// });
// document.querySelector('.inner').addEventListener('mouseover', () => {
//   log('ポインティングデバイスが要素の上に乗った');
// });
// // => ポインティングデバイスが要素の上に乗った(バブリング)
// function log(message) {
//   console.log(message);
// };

// マウス操作時の座標を取得
// const targetBox = document.querySelector('.box');
// targetBox.addEventListener('mousemove', (event) => {
//   console.log(event.clientX, event.clientY);
// });

// // マウス操作時の座標を取得したサンプル
// const charactor = document.querySelector('.charactor');
// document.addEventListener('mousedown', () => {
//   document.addEventListener('mousemove', onMouseMove, false);
//   document.removeEventListener('mouseup', onMouseMove, false);
// }, false);
// function onMouseMove(event) {
//   charactor.style.top = `${event.clientX}px`;
//   charactor.style.left = `${event.clientY}px`;
// };

// スクロール時に処理を実行
// scrollイベント
window.addEventListener('scroll', () => {
  console.log('スクロール', window.scrollX, window.scrollY);
}, false);
