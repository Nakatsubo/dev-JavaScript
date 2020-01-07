// console.log('Hello, World');

// 論理否定演算子
const flg = 'JavaScript'.includes('a');
console.log(!flg);
// => false
// 値を真偽値に変換
console.log(!'apple');
console.log(!10);
console.log(![1, 2, 3]);
// => false
// 値をBoolean型に変換
console.log(!!'apple');
console.log(!!10);
console.log(!![1, 2, 3]);
// => true

// 四捨五入、切り上げ、切り捨て
// round 四捨五入
console.log(Math.round(6.24));
// => 6
console.log(Math.round(-6.24));
// => -6
// floor 切り捨て
console.log(Math.floor(6.24));
// => 6
console.log(Math.floor(-6.24));
// => -7
// ceil 切り上げ
console.log(Math.ceil(6.24));
// => 7
console.log(Math.ceil(-6.24));
// => 6
// trunc 整数を返す
console.log(Math.trunc(6.24));
// => 6
console.log(Math.trunc(-6.24));
// => -6

// ランダム数
console.log(Math.random());
// => 0 <= x < 1
console.log(Math.floor(Math.random() * 100));
// => 0 <= x < 100
console.log(10 + Math.floor(Math.random() * 10));
// => 0 <= x < 20

// ランダム数を使用したサンプル
// const rec = document.querySelector('.rectangle');
// // console.log(rec);
// const btn = document.querySelector('.button');
// // console.log(btn);
// btn.addEventListener('click', onClickbutton, false);
// function onClickbutton() {
//   const randomHue = Math.trunc(Math.random() * 360);
//   const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
//   const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
//   // setProperty Keyとvalueをセット
//   rec.style.setProperty('--start', randomColorStart);
//   rec.style.setProperty('--end', randomColorEnd);
// }

// crypto.getRandomValues 安全な乱数を設定
const randomArray = crypto.getRandomValues(new Uint16Array(10));
console.log(randomArray.join(''));

// 数学的な計算
// abs 絶対値
console.log(Math.abs(-10));
// => 10
// pow べき乗
console.log(Math.pow(2, 10));
// => 1024
// sign 数値符号
console.log(Math.sign(2));
// => 1
console.log(Math.sign(-2));
// => -1
// sqrt 平方根
console.log(Math.sqrt(16));
// => 4
// log 自然対数
console.log(Math.log(Math.E));
// => 1
// exp 指数関数
// console.log(Math.exp());

// 三角関数
// 円周率
console.log(Math.PI);
// サイン
console.log(Math.sin((90 * Math.PI) / 180));
// コサイン
console.log(Math.cos((90 * Math.PI) / 180));
// タンジェント
console.log(Math.tan((45 * Math.PI) / 180));
// アークコサイン
console.log(Math.acos(1));
// 座標の例
console.log(Math.atan2(1, 1) * 180 / Math.PI);

// 三角関数を使用したサンプル
// const character = document.querySelector('.character');
// // 角度 ラジアン
// let degree = 0;
// loop();
// function loop() {
//   const rotation = (degree * Math.PI) / 180;
//   const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
//   const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
//   // 初期位置
//   character.style.left = `${targetX}px`;
//   character.style.top = `${targetY}px`;
//   degree += 1;
//   // ブラウザが描画されるタイミングでアニメーションを実行
//   requestAnimationFrame(loop);
// }

// 文字列の長さを取得するサンプル
let textarea = document.querySelector('.textarea');
let strNum = document.querySelector('.str_num');
textarea.addEventListener('keyup', onKeyUp, false);
function onKeyUp() {
  const inputText = textarea.value;
  console.log(inputText.length);
  strNum.innerHTML = inputText.length;
}
