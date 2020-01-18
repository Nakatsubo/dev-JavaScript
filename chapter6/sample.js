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