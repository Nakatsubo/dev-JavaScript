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

- <strong>crypto.getRandomValues</strong> 安全な乱数を設定

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
HTML
<textarea class="textarea"></textarea>
<p>現在 <span class="str_num">0</span>文字入力中です。</p>

JavaScript
let textarea = document.querySelector('.textarea');
let strNum = document.querySelector('.str_num');
textarea.addEventListener('keyup', onKeyUp, false);
function onKeyUp() {
  const inputText = textarea.value;
  console.log(inputText.length);
  strNum.innerHTML = inputText.length;
}
```
- 文字列の両端の空白を取り除く

```
// trim
const targetStr1 = "  Hello, World!  "
const trimmedStr1 = targetStr1.trim();
console.log(trimmedStr1);
const targetStr2 = "Hello, World!\n"
const trimmedStr2 = targetStr2.trim();
console.log(trimmedStr2);
// => Hello, World!
const targetStr3 = "  Hello, World!  Hello, JavaScript!  "
const trimmedStr3 = targetStr3.trim();
console.log(trimmedStr3);
// => Hello, World!  Hello, JavaScript!
```

- 文字列をインデックス(位置)検索する 戻り値は数値

```
// indexOf
const myStr = "Hello, World!"
const a1 = myStr.indexOf('Hello');
console.log(a1);
// => 0
const a2 = myStr.indexOf('World');
console.log(a2);
// => 7
// lastIndexOf
const a3 = myStr.lastIndexOf('o');
console.log(a3);
// => 8
const a4 = myStr.lastIndexOf('JavaScript');
console.log(a4);
// => -1
// search(正規表現)
// 正規表現で検索する
const a5 = myStr.search(/Hello/);
console.log(a5);
// => 0
const a6 = myStr.search(/JavaScript/);
console.log(a6);
// => -1
```

- 文字列を検索する 戻り値は真偽値

```
// includes
const myStr = 'Hello, World';
const a1 = myStr.includes('Hello');
console.log(a1);
// => true
// startsWith
const a2 = myStr.startsWith('World');
console.log(a2);
// => false
// endsWith
const a3 = myStr.endsWith('World');
console.log(a3);
// => true
```

- 指定したインデックス(位置)の文字列を取り出す

```
console.log('JavaScript'.charAt(3));
// => a
```

### 文字列を検索するサンプル

```
HTML
<header>
  <label>県名の最初の一文字を入力してください <input id="search-word-input" maxlength="1" type="text"></label>
</header>
<div id="prefecture-list">
  <button data-name="北海道" data-phonetic="ほっかいどう">北海道</button>
  <button data-name="青森" data-phonetic="あおもり">青森</button>
  <button data-name="岩手" data-phonetic="いわて">岩手</button>
  <button data-name="宮城" data-phonetic="みやぎ">宮城</button>
  <button data-name="秋田" data-phonetic="あきた">秋田</button>
  <button data-name="山形" data-phonetic="やまがた">山形</button>
  <button data-name="福島" data-phonetic="ふくしま">福島</button>
  <button data-name="茨城" data-phonetic="いばらき">茨城</button>
  <button data-name="栃木" data-phonetic="とちぎ">栃木</button>
  <button data-name="群馬" data-phonetic="ぐんま">群馬</button>
  <button data-name="埼玉" data-phonetic="さいたま">埼玉</button>
  <button data-name="千葉" data-phonetic="ちば">千葉</button>
  <button data-name="東京" data-phonetic="とうきょうと">東京</button>
  <button data-name="神奈川" data-phonetic="かながわ">神奈川</button>
  <button data-name="新潟" data-phonetic="にいがた">新潟</button>
  <button data-name="富山" data-phonetic="とやま">富山</button>
  <button data-name="石川" data-phonetic="いしかわ">石川</button>
  <button data-name="福井" data-phonetic="ふくい">福井</button>
  <button data-name="山梨" data-phonetic="やまなし">山梨</button>
  <button data-name="長野" data-phonetic="ながの">長野</button>
  <button data-name="岐阜" data-phonetic="ぎふ">岐阜</button>
  <button data-name="静岡" data-phonetic="しずおか">静岡</button>
  <button data-name="愛知" data-phonetic="あいち">愛知</button>
  <button data-name="三重" data-phonetic="みえ">三重</button>
  <button data-name="滋賀" data-phonetic="しが">滋賀</button>
  <button data-name="京都" data-phonetic="きょうと">京都</button>
  <button data-name="大阪" data-phonetic="おおさか">大阪</button>
  <button data-name="兵庫" data-phonetic="ひょうご">兵庫</button>
  <button data-name="奈良" data-phonetic="なら">奈良</button>
  <button data-name="和歌山" data-phonetic="わかやま">和歌山</button>
  <button data-name="鳥取" data-phonetic="とっとり">鳥取</button>
  <button data-name="島根" data-phonetic="しまね">島根</button>
  <button data-name="岡山" data-phonetic="おかやま">岡山</button>
  <button data-name="広島" data-phonetic="ひろしま">広島</button>
  <button data-name="山口" data-phonetic="やまぐち">山口</button>
  <button data-name="徳島" data-phonetic="とくしま">徳島</button>
  <button data-name="香川" data-phonetic="かがわ">香川</button>
  <button data-name="愛媛" data-phonetic="えひめ">愛媛</button>
  <button data-name="高知" data-phonetic="こうち">高知</button>
  <button data-name="福岡" data-phonetic="ふくおか">福岡</button>
  <button data-name="佐賀" data-phonetic="さが">佐賀</button>
  <button data-name="長崎" data-phonetic="ながさき">長崎</button>
  <button data-name="熊本" data-phonetic="くまもと">熊本</button>
  <button data-name="大分" data-phonetic="おおいた">大分</button>
  <button data-name="宮崎" data-phonetic="みやぎ">宮崎</button>
  <button data-name="鹿児島" data-phonetic="かごしま">鹿児島</button>
  <button data-name="沖縄" data-phonetic="おきなわ">沖縄</button>
</div>

CSS
#prefecture-list button.hide {
  display: none;
}

JavaScript
const searchWordText = document.querySelector('#search-word-input');
const prefectureList = document.querySelectorAll('#prefecture-list button');
searchWordText.addEventListener('keyup', () => {
  const searchWord = searchWordText.value;
  prefectureList.forEach((element) => {
    //console.log(element);
    if (!searchWord || searchWord === '') {
      element.classList.remove('hide');
      return;
    }
    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;
    if (searchWord.charAt(0) === prefectureName.charAt(0) || searchWord.charAt(0) === phonetic.charAt(0)) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  });
});
```

data-* グローバル属性によって、HTMLとJavaScriptとの間でDOM操作ができるようになる。<br>
classList.remove で要素からクラスを削除する。

- 指定範囲の文字列を取得する

```
// slice
console.log('JavaScript'.slice(0, 4));
// => Java
console.log('JavaScript'.slice(0));
// => JavaScript
// substring
console.log('JavaScript'.substring(0, 4));
// => Java
console.log('JavaScript'.substring(0));
// => JavaScript
// slice と substring は開始インデックスが終了インデックスより大きくなった場合、挙動が異なる。
console.log('JavaScript'.slice(3, 1));
// => ''
console.log('JavaScript'.substring(3, 1));
// => av
```

- 文字数を指定して取得する

```
// substr
console.log('JavaScript'.substr(4, 6));
// => Script
```

- 文字列を置換する

```
// replace
const imageName = 'image1.png';
console.log(imageName.replace('1.png', '2.png'));
// => image2.png
const inputText = 'Hello, \nWorld!';
console.log(inputText.replace('\n', ''));
// => Hello, World!
let phoneNumber = '123-4567-8901'
console.log(phoneNumber.replace('-', ''));
// => 1234567-8901
// 正規表現を使い、gオプションで文字列全体をマッチさせる
phoneNumber = '123-4567-8901'
console.log(phoneNumber.replace(/-/g, ''));
// => 12345678901
```

### 文字列を置換するサンプル

```
const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', (event) => {
  const phoneNumber = document.getElementById('phoneNumberText').value;
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  alert(`電話番号は${trimmedPhoneNumber}です`);
  event.preventDefault();
}, false);
```

- 文字列を分割する

```
// split
const myUrl = 'https://example.com/?id=123456&name=Hello&age=0';
console.log(myUrl.split('&'));
// => ["https://example.com/?id=123456", "name=Hello", "age=0"]
// split(正規表現)
console.log(myUrl.split(/&|\?/));
// => ["https://example.com/", "id=123456", "name=Hello", "age=0"]
console.log('JavaScript'.split(''));
// =>  ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

### 文字列を分割するサンプル

```
HTML
<table>
  <tr><th>ID</th><td class="id"></td></tr>
  <tr><th>Name</th><td class="name"></td></tr>
  <tr><th>Age</th><td class="age"></td></tr>
</table>

JavaScript
const hushes = {};
const parameters = location.search.split(/&|\?/).filter((value) => {
  // URLに'='が含まれるvalueのみreturn
  return value.includes('=');
})
console.log(parameters);
// => ["id=123456", "name=Hello", "age=0"]
parameters.forEach((parameter) => {
  const parameterList = parameter.split('=');
  console.log(parameterList);
  // => ["id", "123456"] ["name", "Hello"] ["age", "0"]
  const key = parameterList[0];
  // decodeURIComponent => URLをデコード(復号化)する
  const value = decodeURIComponent(parameterList[1]);
  hushes[key] = value;
})
console.log(hushes);
// => {id: "123456", name: "Hello", age: "0"}
if (hushes['id'] != null) {
  document.querySelector('.id').innerHTML = hushes['id'];
}
if (hushes['name'] != null) {
  document.querySelector('.name').innerHTML = hushes['name'];
}
if (hushes['age'] != null) {
  document.querySelector('.age').innerHTML = hushes['age'];
}
```

- 文字列を大文字・小文字に変換する

```
// toLowerCase
console.log('JavaScript'.toLowerCase());
// => javascript
// toUpperCase
console.log('JavaScript'.toUpperCase());
// => JAVASCRIPT
```

### 文字列を大文字・小文字に変換するサンプル

```
HTML
<input type="text" class="name-input">
<p class="warning-message"></p>

JavaScript
const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');
nameInput.addEventListener('input', () => {
  const inputStr = nameInput.value;
  const normalStr = inputStr.toLowerCase();
  if (normalStr === 'test') {
    warningMessage.textContent = '「test」が含まれています'
  } else {
    warningMessage.textContent = '';
  }
}, false);
```

- 文字列を動的に扱う

### 文字列を動的に扱うサンプル

```
HTML
<main id="main"></main>

JavaScript
const today = new Date();
const main = document.querySelector('#main');
main.innerHTML = `
  <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
  <p>東京は、晴れでしょう</p>
`;
```

- 正規表現<br>
正規表現を使って、検索や置換を簡単に行う。

```
// 正規表現で記述した場合
if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
  alert('アクセスしているブラウザはiOS端末です');
}
// 正規表現で記述しなかった場合
if (
  navigator.userAgent.includes('iPhone') ||
  navigator.userAgent.includes('iPod') ||
  navigator.userAgent.includes('iPad')
) {
  alert('アクセスしているブラウザはiOS端末です');
}
```

### 正規表現のtestメソッドのサンプル

```
HTML
<h2>電話番号を入力してください</h2>
<input id="phoneNumberText" placeholder="電話番号" type="tel">
<p class="warning-message"></p>

JavaScript
const phoneNumberText = document.querySelector('#phoneNumberText');
const warningMessage = document.querySelector('.warning-message');
phoneNumberText.addEventListener('keyup', () => {
  const phoneNumber = phoneNumberText.value;
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
    warningMessage.innerText = '電話番号を正しく入力してください';
  } else {
    warningMessage.innerText = '';
  }
}, false);
```

- 数値の桁数を指定する

```
// toFixed 小数点以下を指定桁数に
console.log((0.333333).toFixed(2));
// => 0.33
console.log((123.456).toFixed(1));
// => 123.5 近似値に丸められる
console.log((1.2).toFixed(4));
// => 1.2000 桁数が揃えられる
// toPrecision 指定桁数の精度に
console.log((0.333333).toPrecision(2));
// => 0.33
console.log((123.456).toPrecision(3));
// => 123
console.log((123.456).toPrecision(1));
// => 1e+2 近似値に丸められる
console.log((1.2).toPrecision(4));
// => 1.200 桁数が揃えられる
```

### 数値の桁数を指定するサンプル

```
HTML
<div class="timer">
  <div class="second"></div>
</div>

JavaScript
const secondElement = document.querySelector('.second');
const goalTime = new Date().getTime() + 15 * 1000;
update();
function update() {
  const currentTime = new Date().getTime();
  const leftTime = goalTime - currentTime;
  secondElement.innerText = (leftTime / 1000).toFixed(2);
  // requestAnimationFrame 再描画の前に関数を呼び出す
  requestAnimationFrame(update);
};
```

- 文字列を指定の長さになるように繰り返す

```
// padStart 文字列の冒頭に指定した数の文字を追加する
console.log('5'.padStart(2, '0'));
// => 05
// padStart 文字列の末尾に指定した数の文字を追加する
console.log('ff'.padEnd(6, '0'));
// => ff0000
// 指定した数が文字列の長さを超えている場合、文字列を返す
console.log('123'.padStart(3, '0'));
// => 123
// 文字の指定を省略すると空文字を返す
console.log('ff'.padStart(6));
// => 「    ff
```

### 文字列を指定の長さになるように繰り返すサンプル

```
HTML
<span class="hour"></span>
<span class="minute"></span>
<span class="second"></span>

JavaScript
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
update();
function update() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);
  const minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);
  const second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);
  // requestAnimationFrame 再描画の前に関数を呼び出す
  requestAnimationFrame(update);
};
function addZeroPadding(num) {
  return String(num).padStart(2, '0');
};
```

- 文字列URIをエスケープする

```
// encodeURI
console.log(encodeURI('https://example.com/可愛いあんりちゃんのページ'));
// => https://example.com/%E5%8F%AF%E6%84%9B%E3%81%84%E3%81%82%E3%82%93%E3%82%8A%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8
// encodeURIComponent 「/ ? & = + : @ $ ; , # 」をエスケープする
console.log(encodeURIComponent('https://example.com/可愛いあんりちゃんのページ'));
// => https%3A%2F%2Fexample.com%2F%E5%8F%AF%E6%84%9B%E3%81%84%E3%81%82%E3%82%93%E3%82%8A%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8
```

### 文字列URIをエスケープするサンプル

```
HTML
<h1>つぶやきたい文字列を入力してください</h1>
<textarea id="tweetTextArea"></textarea>
<button id="tweetTextButton"></button>

JavaScript
const tweetButton = document.querySelector('#tweetTextButton');
tweetButton.addEventListener('click', () => {
  let tweetText = document.querySelector('#tweetTextArea').value;
  tweetText += ' #JavaScript';
  const encodedText = encodeURIComponent(tweetText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL);
});
```

- 文字列URIをデコードする

```
// decodeURI
console.log(decodeURI('https://example.com/%E5%8F%AF%E6%84%9B%E3%81%84%E3%81%82%E3%82%93%E3%82%8A%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8'));
// => https://example.com/可愛いあんりちゃんのページ
// decodeURIComponent
console.log(decodeURIComponent('https%3A%2F%2Fexample.com%2F%E5%8F%AF%E6%84%9B%E3%81%84%E3%81%82%E3%82%93%E3%82%8A%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8'));
// => https://example.com/可愛いあんりちゃんのページ
```

## Chapter3

- new Array()を用いて配列を初期化する

```
// new Array()
const a1 = new Array('apple', 'orange');
console.log(a1[0]);
// => apple
// 配列の要素数を指定する
const a2 = new Array(10);
a2[0] = 'apple';
console.log(a2[0]);
// => apple
```

- 配列の各要素に処理を行う

```
// forEach
const a3 = ['apple', 'banana', 'orange'];
a3.forEach((value, index) => {
  console.log(index, value);
});
// =>
// 0 "apple"
// 1 "banana"
// 2 "orange"

// forEach + filter
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
.filter((value) => value % 2 === 0)
.forEach((value) => {
  console.log(value);
});
// => 0, 2, 4, 6, 8

// for(const value of array) {};
const a4 = ['apple', 'banana', 'starwberry'];
for(const value of a4) {
  console.log(value);
}
// => apple, banana, starwberry
```

### APIデータなどから配列を出力するサンプル

```
const userList = [
  {id: 1, name: 'apple', address: 'shibuya'},
  {id: 2, name: 'banana', address: 'shinjyuku'},
  {id: 1, name: 'orange', address: 'ikebukuro'}
];
const container = document.querySelector('.container');
userList.forEach((userData) => {
  // console.log(userData);
  container.innerHTML += `
    <div class="card">
      <h2>${userData.name}</h2>
      <p>出身地:${userData.address}</p>
    </div>
  `;
});
```

- 配列の先頭/末尾に要素を追加する

```
// unshift => 先頭
const a5 = ['banana', 'starwberry'];
a5.unshift('apple');
console.log(a5);
// => ["apple", "banana", "starwberry"]
// push => 末尾
const a6 = ['apple', 'banana', 'starwberry'];
a6.push('orange');
console.log(a6);
// =>  ["apple", "banana", "starwberry", "orange"]
```

- 配列の先頭/末尾に要素を削除する

```
// shift => 先頭
const a7 = ['apple', 'banana', 'starwberry'];
const shiftedA7 = a7.shift();
console.log(a7);
console.log(shiftedA7);
// => ["banana", "starwberry"]
// => apple
// pop => 末尾
const a8 = ['apple', 'banana', 'starwberry'];
const popedA8 = a8.pop();
console.log(a8);
console.log(popedA8);
// => ["apple", "banana"]
// => starwberry
const a9 = [];
const popedA9 = a9.pop();
console.log(popedA9);
// => undefined
```

- 配列の要素を指定位置から取り出しつつ、追加する

```
// splice
const a10 = ['apple', 'banana', 'starwberry'];
// インデックス番号1の位置から、1つ要素を取り出し、要素'orange'を追加する
a10.splice(1, 1, 'orange');
console.log(a10);
// => ["apple", "orange", "starwberry"]
```

- 配列を連結する

```
// concat
const a11 = ['apple', 'banana'];
const a12 = ['starwberry', 'orange'];
const a13 = a11.concat(a12);
console.log(a13);
// => ["apple", "banana", "starwberry", "orange"]
```

- スプレッド演算子(...)<br>
[...配列]のように指定すると、配列の要素をすべて展開した配列が得られる

```
const a14 = ['apple', 'banana'];
const a15 = ['starwberry', 'orange'];
const a16 = [...a14, ...a15];
console.log(a16);
// => ["apple", "banana", "starwberry", "orange"]
```

- 配列の要素を結合して文字列にする

```
const a17 = [2, 4, 10];
console.log(a17.join());
// オプションの文字列を省略した場合、,(コンマ)で結合される
// => 2,4,10
const a18 = ['a', 'b', 'c'];
console.log(a18.join(''));
// => abc
```

- 配列の検索をする

```
// indexOf 要素のインデックスを調べる
console.log(['apple', 'banana', 'starwberry'].indexOf('apple'));
//=> 0
// lastIndexOf 要素の末尾からのインデックスを調べる
console.log(['apple', 'banana', 'starwberry', 'apple', 'banana', 'starwberry'].lastIndexOf('apple'));
// => 3
// includes 要素が含まれているかどうか調べる
console.log(['apple', 'banana', 'starwberry'].includes('apple'));
// => true
console.log(['apple', 'banana', 'starwberry'].includes('orange'));
// => false
```

- 配列から特定の条件の要素を取り出す

```
// find
const a19 = ['apple', 'banana', 'starwberry'];
const targetA19 = a19.find((element) => {
  return element === 'banana';
});
console.log(targetA19);
// => banana
// 省略した書き方
const a20 = ['apple', 'banana', 'starwberry'];
const targetA20 = a20.find((element) => element === 'banana');
console.log(targetA20);
// => banana
// findIndex 条件に最初に合致した要素のインデックス番号を取り出す
const a21 = ['apple', 'banana', 'starwberry'];
const targetA21 = a21.findIndex((element) => {
  return element === 'banana';
});
console.log(targetA21);
// => 1
```

### ユーザー情報の配列から検索ユーザーの情報を表示するサンプル

```
HTML
<div class="search-word-wrapper">
  <label>
    ユーザーID
    <input type="text" id="search-id-input">
  </label>
  <p class="search-result">該当者なし</p>
</div>

JavaScript
const userDataList = [
  {id: 1, name: 'nakatsubo'},
  {id: 2, name: 'sakita'},
  {id: 3, name: 'kouda'}
]
const searchIdInput = document.querySelector('#search-id-input');
const searchResult = document.querySelector('.search-result');
searchIdInput.addEventListener('keyup', (event) => {
  const searchId = Number(event.target.value);
  findUser(searchId);
}, false);
function findUser(searchId) {
  const targetData = userDataList.find((element) => element.id === searchId);
  // console.log(targetData === null);
  // => Error
  if (targetData == null) {
    searchResult.textContent = '該当者なし';
    return;
  }
  searchResult.textContent = targetData.name;
}
```

- 配列の並び順を逆にする

```
// reverse
const a22 = [1, 3, 5];
console.log(a22.reverse());
// => [5, 3, 1]
```

- 配列をソートする<br>
配列を比較関数に従ってソートする。比較関数は、二つの要素を受け取り、戻り値の数値の要素の大小によって順番を決定づける。

```
const a23 = [1, 2, 3, 3, 4, 5];
a23.sort((a, b) => {
  // 比較関数の結果の戻り値を、1, 0, -1 とする
  if (a < b) {
    return 1;
  };
  if (a === b) {
    return 0;
  };
  if (a > b) {
    return -1;
  }
});
console.log(a23);
// => [5, 4, 3, 3, 2, 1]

// 比較関数を省略するとユニコード(文字列コード)の順にソートされる
const a24 = [5, 1, 10]
console.log(a24.sort());
// => 1, 10, 5 => 期待通りの結果が得られない
```

### オブジェクトを含む配列をソートするサンプル

```
HTML
<div class="button-wrapper">
  <button class="ascending">昇順</button>
  <button class="descending">降順</button>
</div>
<ul class="user-list"></ul>

JavaScript
const userDataList = [
  {id: 2, name: 'nakatsubo'},
  {id: 10, name: 'sakita'},
  {id: 4, name: 'kouda'},
  {id: 29, name: 'yuki'},
  {id: 101, name: 'yamazaki'}
]
// 並び替え処理
function updateList() {
  let listHTML = '';
  for(const value of userDataList) {
    listHTML += `<li>${value.id}：${value.name}</li>`;
  };
  document.querySelector('.user-list').innerHTML = listHTML;
};
// 昇順
document.querySelector('.ascending').addEventListener('click', () => {
  sortByAscending();
}, false);
function sortByAscending() {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
};
// 降順
document.querySelector('.descending').addEventListener('click', () => {
  sortByDescending();
}, false);
sortByAscending();
function sortByDescending() {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
}
```

- 比較関数を使って、文字列の順番で配列をソートする

```
// a.localCompare(b)
const a25 = ['starwberry', 'banana', 'apple'];
a25.sort((a, b) => a.localeCompare(b));
console.log(a25);
// => ["apple", "banana", "starwberry"]
```

- ある配列を元に別の配列をつくる

```
// map(callback)
const idList = [4, 10, 20];
const userIdList1 = idList.map((value) => `userid_${value}`);
console.log(userIdList1);
// => ["userid_4", "userid_10", "userid_20"]
const userIdList2 = idList.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList2);
// => ["userid_1_4", "userid_2_10", "userid_3_20"]
```

### オブジェクトの配列から別の配列をつくるサンプル

```
const apiResponseData = [
  {id: 2, name: 'nakatsubo'},
  {id: 10, name: 'sakita'},
  {id: 4, name: 'kouda'},
  {id: 29, name: 'yuki'},
  {id: 101, name: 'yamazaki'}
];
const apiIdList = apiResponseData.map((value) => value.id);
console.log(apiIdList);
// => [2, 10, 4, 29, 101]
```

- ある配列を元に条件を満たす別の配列をつくる

```
// filter(callback)
const a26 = [1, 2, 3, 4].filter((value) => value >= 3);
console.log(a26);
// => [3, 4]
```

### ある配列を元に条件を満たす別の配列をつくるサンプル

```
HTML
<div class="button-wrapper">
  <button class="button" data-age="20">20歳以上</button>
  <button class="button" data-age="30">30歳以上</button>
  <button class="button" data-age="40">40歳以上</button>
</div>
<ul class="user-list"></ul>

JavaScript
const userDataList = [
  {id: 2, age: 22},
  {id: 10, age: 25},
  {id: 4, age: 38},
  {id: 29, age: 32},
  {id: 101, age: 44}
];
document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  });
});
function onClickButton(event) {
  const button = event.target;
  const targetAge = button.dataset.age;
  const filteredList = userDataList.filter((value) => value.age >= targetAge);
  updateList(filteredList);
};
function updateList(filteredList) {
  let listHTML = '';
  for(const value of filteredList) {
    listHTML += `<li>${value.id}：${value.age}歳</li>`
  };
  document.querySelector('.user-list').innerHTML = listHTML;
};
```

- 各要素から単一の値をつくる

```
// reduce(callback) 要素を左から右に処理する
const priceList = [100, 200, 300];
const sum1 = priceList.reduce((previous, current) => {
  return previous + current;
});
console.log(sum1);
// => 600
// reduceを使わずforを使ったほうが便利
let sum2 = 0;
for(const value of priceList) {
  sum2 += value;
};
console.log(sum2);
// => 600

// 多次元配列を一次元配列にする(フラット化する)
const fruitList = [['apple', 'banana', 'starwberry'], ['orange', 'grape']];
const flattendFruitList = fruitList.reduce((previous, current) => {
  return previous.concat(current);
});
console.log(flattendFruitList);
// => ["apple", "banana", "starwberry", "orange", "grape"]

// reduceRight(callback) 要素を右から左に処理する
const fruitList1 = ['apple', 'banana', 'starwberry' ,'orange', 'grape'];
const flattendList1 = fruitList1.reduce((previous, current) => {
  return `${previous}と${current}`;
});
console.log(flattendList1);
// => appleとbananaとstarwberryとorangeとgrape
const fruitList2 = ['apple', 'banana', 'starwberry' ,'orange', 'grape'];
const flattendList2 = fruitList2.reduceRight((previous, current) => {
  return `${previous}と${current}`;
});
console.log(flattendList2);
// => grapeとorangeとstarwberryとbananaとapple
```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```
