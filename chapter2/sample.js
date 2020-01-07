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
const rec = document.querySelector('.rectangle');
// console.log(rec);
const btn = document.querySelector('.button');
// console.log(btn);
btn.addEventListener('click', onClickbutton, false);
function onClickbutton() {
  const randomHue = Math.trunc(Math.random() * 360);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  rec.style.setProperty('--start', randomColorStart);
  rec.style.setProperty('--end', randomColorEnd);
}

