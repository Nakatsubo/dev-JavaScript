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

// // スクロール時に処理を実行
// // scrollイベント
// window.addEventListener('scroll', () => {
//   console.log('スクロール', window.scrollX, window.scrollY);
// }, false);

// // テキスト選択時に処理を実行
// // selectstartイベント
// document.querySelector('.text').addEventListener('selectstart', () => {
//   console.log('テキストが選択されました');
// }, false);
// // => テキストが選択されました

// テキスト選択時に処理を実行するサンプル
// const balloon = document.querySelector('#balloon');
// const paragraph = document.querySelector('.paragraph');
// paragraph.addEventListener('selectstart', () => {
//   paragraph.addEventListener('mouseup', (event) => {
//     // document.getSelection() => 選択された文字列を返す
//     const selectionParagraph = window.getSelection().toString();
//     if (selectionParagraph.length > 0) {
//       balloon.innerHTML = selectionParagraph;
//       // classList.add() => クラスを追加する
//       balloon.classList.add('on');
//       balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`
//       balloon.style.top = `${event.clientY - balloon.clientWidth}px`
//     } else {
//       removePopup();
//     }
//   }, {once: true});
// }, false);
// balloon.addEventListener('click', removePopup, false);
// function removePopup() {
//   balloon.classList.remove('on');
// };

// const targetBox = document.querySelector('.box');
// const logArea = document.querySelector('.log');
// targetBox.addEventListener('touchstart', () => {
//   logArea.innerHTML = 'タッチ開始';
// });
// targetBox.addEventListener('touchmove', () => {
//   logArea.innerHTML = 'タッチ位置移動';
// });
// targetBox.addEventListener('touchend', () => {
//   logArea.innerHTML = 'タッチ終了';
// });

// // タッチ操作時のイベントの情報を取得する
// // event.changedTouches
// const box = document.querySelector('.box');
// const log = document.querySelector('.log')
// box.addEventListener('touchstart', (event) => {
//   const touch = event.changedTouches;
//   log.innerHTML = `${touch[0].pageX.toFixed(2)}<br>${touch[0].pageY.toFixed(2)}`;
// });

// // キーボード入力時に処理を実行する
// // keydown
// document.querySelector('.textarea').addEventListener('keydown', () => {
//   console.log('キーが押された');
// }, false);
// // => キーが押された
// // keyup
// document.querySelector('.textarea').addEventListener('keyup', () => {
//   console.log('キーが離された');
// }, false);
// // => キーが離された
// // keypress
// document.querySelector('.textarea').addEventListener('keypress', () => {
//   console.log('文字が入力された');
// }, false);
// // => 文字が入力された

// キーボード入力時に処理を実行するサンプル
// const textarea = document.querySelector('.textarea');
// const string_num = document.querySelector('.string_num');
// textarea.addEventListener('keyup', onKeyUp, false);
// function onKeyUp() {
//   const input = textarea.value;
//   string_num.innerHTML = input.length;
// };

// // 入力されたキーの値を調べる
// const textarea = document.querySelector('.textarea');
// textarea.addEventListener('keyup', (event) => {
//   console.log(event.key);
//   // => a
//   console.log(event.code);
//   // => KeyA
//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);
//   console.log(event.metaKey);
//   console.log(event.repeat);
//   console.log(event.isComposing);
// }, false);

// // 入力されたキーの値を調べる
// window.addEventListener('keydown', handleKeydown, false);
// function handleKeydown(event) {
//   const keyCode = event.keyCode;
//   // console.log(keyCode);
//   if (keyCode === 39) {
//     console.log('右キーが押されました');
//   };
//   if (keyCode === 37) {
//     console.log('左キーが押されました');
//   };
//   if (keyCode === 38) {
//     console.log('上キーが押されました');
//   };
//   if (keyCode === 40) {
//     console.log('下キーが押されました');
//   };
// };

// visibilitychange
// visibilityState => visible/hidden
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('コンテンツが表示されました');
    return;
  };
  if (document.visibilityState === 'hidden') {
    console.log('コンテンツがバックグラウンドになりました');
    return;
  };
});
