# README
Let's study & enjoy JavaScript

## Chapter1

- 配列やオブジェクトの定数は変更できる

```
const myArray = ['apple', 'banana', 'strawberry'];
console.log(myArray);
myArray[0] = 'orange';
console.log(myArray);

const myObject = { name: 'kiyohara', area: 'Tokyo' };
console.log(myObject);
myObject.name = 'sakita';
console.log(myObject);
// => 値を再代入する場合を除き、letよりconstを積極的に利用する
```

- == と === の違い

```
// == 値が等しい
console.log(10 == '10');
// => true
// === 型と値が等しい
console.log(10 === '10');
// => false
// != 値が等しくない
console.log(10 != '10');
// => false
// !== 型または値が等しくない
console.log(10 !== '10');
// => true
```

- アロー関数内の処理が一行の時は、{}とreturnを省略できる

```
const myFunc = (a) => a + 2;
console.log(myFunc(8));
```

- 関数の初期値を設定する

```
function calcFunc(price, tax = 0.08) {
  const result = price + price*tax
  return result;
}
const calcFunc1 = calcFunc(100);
console.log(calcFunc1);
// => 108
const calcFunc2 = calcFunc(100, 0.1);
console.log(calcFunc2);
// => 110

```

- 関数に任意の数の引数を設定する

```
function sumFunc(...prices) {
  let result = 0;
  for(const value of prices) {
    result += value;
  }
  return result;
}
const sumFunc1 = sumFunc(10, 20);
console.log(sumFunc1);
// => 30
const sumFunc2 = sumFunc(5, 10, 15);
console.log(sumFunc2);
// => 30
```

- continue for文の処理をスキップする

```
for(let i = 0; i < 10; i++ ) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.log('end');
```


## Chapter2

- 論理否定演算子

```
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
```

- 四捨五入、切り上げ、切り捨て

```
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
```

### ランダム数を使用したサンプル

```
HTML
<button class="button">カラー変更</button>
<div class="wrapper">
  <div class="rectangle"></div>
</div>
<script src="sample.js" defar></script>

SCSS
.wrapper {
  width: 100vw;
  height: 100vh;
}

.rectangle {
  width: 100%;
  height: calc(100% - 50px);
  /* 変数 --start --end を定義 */
  --start: hsl(0, 100%, 50%);
  --end: hsl(322, 100%, 50%);
  /* 初期値 */
  background-image: linear-gradient(-135deg, var(--start), var(--end));
}

JavaScript
const rec = document.querySelector('.rectangle');
// console.log(rec);
const btn = document.querySelector('.button');
// console.log(btn);
btn.addEventListener('click', onClickbutton, false);
function onClickbutton() {
  const randomHue = Math.trunc(Math.random() * 360);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  // setProperty Keyとvalueをセット
  rec.style.setProperty('--start', randomColorStart);
  rec.style.setProperty('--end', randomColorEnd);
}
```

- crypto.getRandomValues 安全な乱数を設定

```
const randomArray = crypto.getRandomValues(new Uint16Array(10));
console.log(randomArray.join(''));
```

- 数学的な計算

```
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
```

- 三角関数

```
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
```

### 三角関数を使用したサンプル

```
HTML
<div class="character"></div>
// => imgの入れ方が不明

JavaScript
// 三角関数を使用したサンプル
const character = document.querySelector('.character');
// 角度 ラジアン
let degree = 0;
loop();
function loop() {
  const rotation = (degree * Math.PI) / 180;
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
  // 初期位置
  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;
  degree += 1;
  // ブラウザが描画されるタイミングでアニメーションを実行
  requestAnimationFrame(loop);
}
```

### 文字列の長さを取得するサンプル

```
let textarea = document.querySelector('.textarea');
let strNum = document.querySelector('.str_num');
textarea.addEventListener('keyup', onKeyUp, false);
function onKeyUp() {
  const inputText = textarea.value;
  console.log(inputText.length);
  strNum.innerHTML = inputText.length;
}
```




```
```