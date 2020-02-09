# README
Let's study & enjoy JavaScript

- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter1">Chapter1 Basic</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter2">Chapter2 Value...</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter3">Chapter3 Array, Object...</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter4">Chapter4 Data</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter5">Chapter5 Date</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter6">Chapter6 Browser</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter7">Chapter7 Event</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter8">Chapter8 Element</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter9">Chapter9 Form</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter10">Chapter10 Animation</a>
- <a href="https://github.com/NakatsuboYusuke/dev-JavaScript#chapter11">Chapter11 Media</a>


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

- 配列に似たオブジェクトを配列に変換する<br>
lengthやインデックスによるアクセスが可能な、配列のようなオブジェクト(ArrayLike)を配列に変換する(querySelectorAllで取得したNodeListOfなど)

```
//[...変換対象]
const allDivElementList = document.querySelectorAll('div');
const elementArray = [...allDivElementList];
elementArray.filter((element) => element.classList.contains('on'));
// 文字列もArrayLikeオブジェクト
const myString1 = 'Hello, World';
console.log([...myString1]);
// => ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]
// Array.fromでも変換可能
const myString2 = 'Hello, World';
console.log(Array.from(myString2));
// => ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]
const newArray = Array.from(myString2, (character) => `${character}!`);
console.log(newArray);
// => ["H!", "e!", "l!", "l!", "o!", ",!", " !", "W!", "o!", "r!", "l!", "d!"]
```

- 分割代入

```
let a;
let b;
let c;
[a, b, c] = [1, 2, 3];
console.log(a, b, c);
// => 1 2 3
const a27 = ['apple', 'banana'];
[a27[0], a27[1]] = [a27[1], a27[0]];
console.log(a27);
// => ["banana", "apple"]
```

- 配列を偏りなく高速にシャッフルする<br>
「Fisher Yates」(フィッシャーイェーツ)のアルゴリズムを使用する。

```
const array = [1, 2, 3, 4, 5];
const arrayLength = array.length;
Fisher Yates
for(let i = arrayLength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
};
console.log(shuffulArray);
// => [3, 5, 2, 4, 1]
```

```
function shuffulArray(sourseArray) {
  const array = sourseArray.concat();
  const arrayLength = array.length;
  for(let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  };
  return array;
};
const testNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultNum = shuffulArray(testNum)
console.log(resultNum);
// => [8, 6, 7, 3, 2, 4, 5, 10, 9, 1]
const testStr = ['apple', 'banana', 'strawberry', 'orange', 'grape'];
const resultStr = shuffulArray(testStr);
console.log(resultStr);
// => ["orange", "grape", "banana", "apple", "strawberry"]
```

### オブジェクト
- オブジェクト型

```
const object = {
  list: [1, 2, 3],
  subObject: { id: 1, name: 'apple' },
  method: () => {
    console.log('Hello, World');
  }
};
console.log(object);
// => {list: Array(3), subObject: {…}, method: ƒ}
```

- オブジェクトの定義、値の取得、値の更新

|構文|意味|
|-----|-----|
|{}|オブジェクトを初期化|
|{key: value, key: value}|オブジェクトを初期化|
|object[key]|値を取得|
|object.key|値を取得|
|object[key] = value|値を更新|
|object.key = value|値を更新|

```
const myObject = {};
const person = {
  id: 1,
  name: 'apple',
  age: 24
};
console.log(myObject);
// => undefined
console.log(person.id);
// => 1
console.log(person['name']);
// => apple
person.id = 2;
person['name'] = 'banana';
console.log(person.id);
// => 2
console.log(person['name']);
// => banana
```

- APIのレスポンスを想定したオブジェクト

```
const respose = {
  result: true,
  list: [
    { id: 1, name: 'apple', age: 24 },
    { id: 2, name: 'banana', age: 32 }
  ]
};
console.log(respose.list[0].name);
// => apple
respose.list[1].name = 'strawberry';
console.log(respose.list[1].name);
// => strawberry
```

- クラスを想定したオブジェクト

```
const myClass = {
  method1: function() {
    console.log('Do method1');
  },
  method2: function() {
    console.log('Do method2');
  },
};
myClass.method2();
```

- オブジェクトを複製する<br>
複製したオブジェクトはシャローコピーとなり、複製元のオブジェクトが複製先のオブジェクトに影響する。

```
// Object.assign({},)
const object1 = {
  result: true,
  list: [
    { id: 1, name: 'apple', age: 24 },
    { id: 2, name: 'banana', age: 32 }
  ]
};
const copyObbject1 = Object.assign({}, object1);
console.log(copyObbject1);
// => {result: true, list: Array(2)}

// スプレッド演算子[...]
const object2 = {
  result: true,
  list: [
    { id: 1, name: 'apple', age: 24 },
    { id: 2, name: 'banana', age: 32 }
  ]
};
const copyObbject2 = { ...object2 };
console.log(copyObbject2);
// => {result: true, list: Array(2)}
```

- オブジェクトのプロパティ・キー・値を調べる

```
// hasOwnProperty(key)
const userData = {
  result: true,
  id: 1,
  name: 'apple',
  age: 24
};

console.log(userData.hasOwnProperty('id'));
console.log(userData.hasOwnProperty('gender'));
console.log('age' in userData);
// => true
// => false
// => true

console.log(userData.id != null);
console.log(userData.gender != null);
console.log(userData['id'] != null);
// => true
// => false
// => true

// オブジェクトのキーを調べる
console.log(Object.keys(userData));
// => ["result", "id", "name", "age"]

// オブジェクトの値を調べる
console.log(Object.values(userData));
// => [true, 1, "apple", 24]

// オブジェクトのプロパティを調べる
console.log(Object.entries(userData));
// => [Array(2), Array(2), Array(2), Array(2)]
```

- 分割代入

```
const userData = {
  result: true,
  id: 1,
  name: 'apple',
  age: 24
};
const { id, name, age } = userData;

console.log(id);
console.log(name);
console.log(age);

// => 1
// => apple
// => 24

// 変数に保持する
const { name: myName } = userData;
console.log(myName);
// => apple
```

- オブジェクトを編集不可能にする

```
// Object.freeze()
'user strict';
const myObject = {
  id: 1,
  name: 'apple',
  age: 24
}
Object.freeze(myObject);
myObject.id = 2;
myObject.name = 'banana';
// => Error
// => Error

// Object.isFrozen() 真偽値を返す
console.log(Object.isFrozen(myObject));
// => true
```

## Chapter4

### データ型

- プリミティブ型(基本型)<br>
「データそのもの」のこと。<br>
イミュータブル(immutale, 不変)
- オブジェクト型(複合型)<br>
「データを参照するデータ」のこと。プリミティブ型以外のすべて。<br>
ミュータブル(mutable, 可変)

|プリミティブ型|意味|
|-----|-----|
|Boolean型|真偽値|
|String|文字列|
|Number|数値|
|Undefined|値が未定であることを示す|
|Null|値が存在しないことを示す|
|Symbol|シンボル|

```
const num = 100;
console.log(num);

const str = 'apple';
console.log(str);
```

|オブジェクト型|意味|
|-----|-----|
|Object|オブジェクト|

```
// 配列を参照
const arr = [1, 2, 3];
console.log(arr);

// オブジェクトを参照
const obj = {
  id: 1,
  name: 'apple'
}
console.log(obj);

// ３つのオブジェクトを参照
const arr = [
  {id: 1, name: 'apple'},
  {id: 2, name: 'banana'},
  {id: 3, name: 'starwberry'}
];
console.log(arr);
```

- データ型を調べる

|データ型|typeofの結果|
|-----|-----|
|Boolean|boolean|
|String|string|
|Number|number|
|Undefined|Undefined|
|Null|object|
|Symbol|symbol|
|Object|object|
|関数|function|

```
// typeof value
console.log(typeof true);
// => boolean
console.log(typeof 'apple');
// => string
console.log(typeof 10);
// => number
console.log(typeof undefined);
// => undefined
console.log(typeof null);
// => object
console.log(typeof Symbol());
// => symbol
console.log(typeof [1, 2, 3]);
// => object
console.log(typeof { id: 1, name: 'apple' });
// => object
console.log(
  typeof function() {
    console.log('test');
  }
);
// => function
console.log(typeof class MyClass {});
// => function
```

- 値がオブジェクトのインスタンスかどうか調べる

```
// value instanceof object
const today = new Date();
console.log(today instanceof Date);
console.log(today instanceof Array);
```

- instanceof を使ったサンプル

```
function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`現在は${argument.toLocaleDateString()}です`);
  } else {
    console.log('不正なデータです');
  };
};
const today = new Date();
const myArray = [1, 2, 3];
console.log(showCurrentDate(today));
console.log(showCurrentDate(myArray));
// => 現在は2020/1/1です
// => 不正なデータです
```

- 値渡しと参照渡し<br>
あるデータを変数から別の変数に渡すとき、プリミティブ型は「値渡し」、オブジェクト型は「参照渡し」となる。

```
// 値渡し
let a = 100;
// 変数bへaを値渡し
let b = a;
a = 500;
console.log(b);
// => 100

// 参照渡し
let c = [1, 2, 3];
let d = c;
c[0] = 100;
console.log(d);
// => [100, 2, 3]

// プリミティブ型の値を関数に渡しても、処理結果は変数に影響を与えない
// function myFunction(x) {
//   x += 2;
// };
let e = 10;
myFunction(e);
console.log(e);
// => 10

// オブジェクト型の値を関数に渡すと、処理結果は変数に影響を与える
function myFunction(x) {
  x[0] = 100;
};
let f = [1, 2, 3];
myFunction(f);
console.log(f);
// => [100, 2, 3]
```

- データ型の変換

|メソッド|振る舞い|戻り値|
|-----|-----|-----|
|Boolean(value)|値を真偽値型に変換|真偽値|
|String(value)|値を文字列型に変換|文字列|
|Number(value)|値を数値型に変換|数値|
|parseInt(string)|文字列を数値型(整数)に変換|数値|
|parseFloat(string)|文字列を数値型(浮動小数点)に変換|数値|

```
const result = 100 + Number('200');
console.log(result);
// => 300
console.log(Boolean(1));
// => true
console.log(Boolean(0));
// => false
console.log(Boolean('apple'));
// => true
console.log(Boolean(''));
// => false
console.log(String(1));
// => "1"
console.log(String(''));
// =>
console.log(Number('1'));
// => 1
console.log(Number(''));
// => 0
console.log(Number('apple'));
// => NaN
console.log(Number(true));
// => 1
console.log(Number(false));
// => 0
```

- 暗黙の型変換<br>
型が自動的に変わること。後に呼び出される型に自動変換される。<br>
JavaScriptで扱う値には「型」が必ずあり、変数に代入される値の型によってデータ型が変わる(動的型付け)

```
console.log(100 + '200');
// => 100200 => 文字列型に変換
console.log('200' - 100);
// => 100 => 数値型に変換
console.log(1 == '1');
// => true
```

- 値が未定義の場合<br>
変数に値がない、オブジェクトのプロパティに値がない、引数に値がない、など。

```
let value;
console.log(value);
// => undefined
const object = {};
console.log(object.value);
// => undefined
function valFunction(value) {
  console.log(`bの値は${value}`);
}
valFunction();
// => bの値はundefined
```

- データの値がない場合

```
function searchUser(targetId) {
  const userList = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'strawberry' }
  ];
  const targetUser = userList.find((user) => user.id === targetId);
  return targetUser.name;
};
console.log(searchUser(1));
// => apple
console.log(searchUser(4));
// => Uncaught TypeError: Cannot read property 'name' of undefined

// 値が存在しない場合の処理を追加
function searchUser(targetId) {
  const userList = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'strawberry' }
  ];
  const targetUser = userList.find((user) => user.id === targetId);
  if (targetUser === undefined) {
    return null;
  };
  return targetUser.name;
};
console.log(searchUser(1));
// => apple
console.log(searchUser(4));
// => null
```

## Chapter5

### Date関数

```
// 西暦を取得
// getFullYear()
const date = new Date();
const year = date.getFullYear();
// document.querySelector('#log').innerHTML = `今年は西暦${year}年です`;

// 月を取得
// getMonth();
const month = date.getMonth() + 1;

// 日を取得
// getDate();
const day = date.getDate();

const label = `${month}月${day}日`;
document.querySelector('#log').innerHTML = `今日は${label}です`;

// 時間を取得
// getHours();
const hour = date.getHours();

// 分数を取得
// getMinutes();
const minutes = date.getMinutes();

// 秒数を取得
// getSeconds();
const seconds = date.getSeconds();

const label = `${hour}時${minutes}分${seconds}秒`;
document.querySelector('#log').innerHTML = `現時刻は${label}です`;
```

### 時刻を取得するサンプル

```
const date = new Date();
const hour = date.getHours();
let meridiem;
let hour2;
if (hour < 12) {
  meridiem = '午前';
  hour2 = hour;
} else {
  meridiem = '午後';
  hour2 = hour - 12;
};
const label = `${meridiem}${hour2}時`;
document.querySelector('#log').innerHTML = `現時刻は${label}です`;
```

- 曜日の取得

```
// 0~6 => 数値を取得 =>日~土
// getDay();
const date = new Date();
const day = date.getDay();
const dayList = ['日', '月', '火', '水', '木', '金', '土'];
const label = dayList[day];
document.querySelector('#log').innerHTML = `今日は${label}曜日です`;
```

- ローカルの時刻を取得

```
// 日付の文字列を取得 toLocalDateString();
// 時刻の文字列を取得 toLocalTimeString();
const date = new Date();
const local = date.toLocaleString();
const localDate = date.toLocaleDateString();
const localTime = date.toLocaleTimeString();
document.querySelector('#log').innerHTML = `${local}<br>${localDate}<br>${localTime}`;
```

- タイムスタンプを取得

```
// Date.parse(); => getTime(); メソッドと同じ値を取得
console.log(Date.parse('2018/06/20'));
// => 1529420400000
console.log(Date.parse(2018, 5, 20));
// => 1514764800000
// 現在時刻を取得
console.log(Date.now());
// => 1579271442426
```

- Dateインスタンスに別の日時を指定

```
// Dateインスタンスに別の日時を指定
console.log(new Date('2018/6/20 20:01:10'));
// => Wed Jun 20 2018 20:01:10 GMT+0900 (日本標準時)
console.log(new Date('Tue Jun 20 2018 20:01:10'));
// => Wed Jun 20 2018 20:01:10 GMT+0900 (日本標準時)
console.log(new Date(2018, 5, 12, 20, 01, 10));
// => Tue Jun 12 2018 20:01:10 GMT+0900 (日本標準時)
console.log(new Date(1528801270000));
// => Tue Jun 12 2018 20:01:10 GMT+0900 (日本標準時)

const date = new Date();
console.log(date);
// => Fri Jan 17 2020 23:45:00 GMT+0900 (日本標準時)
// 日時を設定
console.log(date.setFullYear(2015));
// => 1421505787487
console.log(date.setMonth(0));
// => 1421505787487
console.log(date.setDate(1));
// => 1420123387487
console.log(date.setHours(0));
// => 1420040587487
console.log(date.setMinutes(0));
// => 1420038007487
console.log(date.setSeconds(0));
// => 1420038000487
document.querySelector('#log').innerHTML = date.toLocaleString();
// => 2015/1/1 0:00:00
```

- 日付/時刻値を加算/減算

```
const date = new Date('2018/06/01');
date.setMonth(date.getMonth() - 1);
console.log(date.toLocaleDateString());
// => 2018/5/1
date.setDate(date.getDate() + 60);
console.log(date.toLocaleDateString());
// => 2018/6/30
```

- 日付/時刻の差分を計算

```
// 差分を計算する場合、ミリ秒の単位の精度で計算する

const dateA = new Date('2018/06/01');
const dateB = new Date('2018/05/01');
const diffMSec = dateA.getTime() - dateB.getTime();
console.log(diffMSec);
// => 2678400000
const diffDate = diffMSec / (24 * 60 * 60 * 1000);
console.log(diffDate);
// => 31
console.log(`${diffDate}日の差があります`);
// => 31日の差があります

const dateA = new Date('2018/06/01 10:00:00');
const dateB = new Date('2018/06/01 07:00:00');
const diffMSec = dateA.getTime() - dateB.getTime();
console.log(diffMSec);
// => 10800000
const diffHour = diffMSec / (60 * 60 * 1000);
console.log(diffHour);
// => 3
console.log(`${diffHour}時間の差があります`);
// => 3時間の差があります

const dateA = new Date('2018/06/01 01:10:00');
const dateB = new Date('2018/06/01 00:50:00');
const diffMSec = dateA.getTime() - dateB.getTime();
console.log(diffMSec);
// => 1200000
const diffMin = diffMSec / (60 * 1000);
console.log(diffMin);
// => 20
console.log(`${diffMin}分の差があります`);
// => 20分の差があります
```

### 経過時間を計算するサンプル

```
// Date.now(); => 現在の時間を基準からミリ秒単位で取得する

const oldTime = Date.now();
console.log(oldTime);
// => 1579320758565
setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;
  const sec = Math.floor(diff / 1000);
  document.querySelector('#log').innerHTML = `${sec}秒が経過`;
}, 1000);
```

### 制限時間をカウントダウンするサンプル

```
// setInterval(callback, ミリ秒) => ミリ秒ごとに関数を実行
const totalTime = 10000;
const oldTime = Date.now();

const timerId = setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;
  const remainMSec = totalTime - diff;
  // 整数に変換
  const remainSec = Math.ceil(remainMSec / 1000);
  let label = `残り${remainSec}秒`;
  if (remainMSec <= 0) {
    clearInterval(timerId);
    label = '終了'
  };
  document.querySelector('#log').innerHTML = label;
}, 1000);
```

### アナログ時計を表示するサンプル

```
HTML
<div class="wrapper">
  <div class="clock">
    <div class="lineHour"></div>
    <div class="lineMin"></div>
    <div class="lineSec"></div>
  </div>
</div>

css
.wrapper {
  background: #333;
}

.clock {
  border-radius: 50%;
  border: 3px solid #fff;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
}

.lineHour {
  width: 10px;
  height: 150px;
  background: #fff;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 5px);
  /* transform-origin 変形する要素の中心点の位置を指定する */
  transform-origin: bottom;
}

.lineMin {
  width: 4px;
  height: 200px;
  background: #fff;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 2px);
  /* transform-origin 変形する要素の中心点の位置を指定する */
  transform-origin: bottom;
}

.lineSec {
  width: 2px;
  height: 200px;
  background: #ccc;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 1px);
  /* transform-origin 変形する要素の中心点の位置を指定する */
  transform-origin: bottom;
}

JavaScript
setInterval(() => {
  // 時刻を取得
  const now = new Date();
  const h = now.getHours(); // => 0~23
  const m = now.getMinutes(); // => 0~59
  const s = now.getSeconds(); // => 0~59
  // 角度を取得
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);
  // console.log(degH);
  // console.log(degM);
  // console.log(degS);
  // スタイルを追加
  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');
  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);
```

## Chapter6

- コンファームを表示

```
HTML
<button class="button">表示</button>
<div class="log"></div>

JavaScript
// comfirm(); => 真偽値を返す
const btn = document.querySelector('.button');
btn.addEventListener('click', (e) => {
  const isYes = confirm('天気は晴れていますか？');
  document.querySelector('.log').innerHTML = isYes;
}, false);
```

- 文字入力プロンプトを表示

```
HTML
<button class="button">表示</button>
<div class="log"></div>

JavaScript
// prompt();
const btn = document.querySelector('.button');
btn.addEventListener('click', (e) => {
  const text = prompt('どうですか', 'デフォルトの文言');
  document.querySelector('.log').innerHTML = text;
  console.log(text);
  // => 文字列 or Null
}, false);
```

- ウィンドウサイズを調べる

```
// window.innerWidth
console.log(window.innerWidth);
// => windowの横幅
// window.innerHeight
console.log(window.innerHeight);
// => windowの縦幅
```

### ウィンドウサイズを調べるサンプル

```
HTML
<div class="value-width"></div>
<div class="value-height"></div>

JavaScript
window.addEventListener('resize', resizeHandler, false);
function resizeHandler(e) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  document.querySelector('.value-width').innerHTML = `横幅は${w}pxです`;
  document.querySelector('.value-height').innerHTML = `横幅は${h}pxです`;
};
// => 横幅は1040pxです
// => 横幅は560pxです
```

- デバイスのピクセル比を調べる

```
// 「高解像度ディスプレイ」 => ピクセル密度が高いディスプレイ(HiDPIディスプレイ)
// window.devicePixelRatio
console.log(window.devicePixelRatio);
// => MacBookProなので、2
// 1: 通常のディスプレイ, 2: iPhoneやAndroidの多く, 3: ハイスペック端末
```

### デバイスのピクセル比をcanvas要素に適用したサンプル

```
HTML
<div>
  <canvas id="myCanvas"></canvas>
</div>
<div class="log"></div>

JavaScript
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
```

- タッチできるかどうか判定

```
// window.ontouchstart => タッチ開始のイベント, 関数
// navigator.pointerEnabled => ポインターが使えるかどうか, 真偽値
// navigator.maxTouchPoints => ポインターの最大数, 数値
const isSupported = !!(
  'ontouchstart' in window || (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
console.log(isSupported);
// => MacBookProなので、false
```

- ページを移動する

```
// location.href => a要素以外の手段で移動
console.log(location.href);
location.href = 'another.html';
```

- ページをリロードする

```
// location.reload(true or false)
location.reload(true);
```

- 履歴前後のページに移動する

|メソッド|振る舞い|
|-----|-----|
|history.back()|戻る|
|history.forward()|進む|
|history.go(数値)|任意数移動する|

```
history.back();
history.forward();
history.go(1);
history.go(-1);
```

- ハッシュ(#)を取得する

```
HTML
<div id="app"></div>

JavaScript
// location.hash
// 取得する
const hash = location.hash;
console.log(hash);
// 書き込む
location.hash = 'app';
```

### ハッシュ(#)を検知するサンプル

```
HTML
<ul>
  <li><a href="#orange">オレンジのアンカーリンク</a></li>
  <li><a href="#apple">アップルのアンカーリンク</a></li>
</ul>
<div class="log"></div>

JavaScript
// hashchange
window.addEventListener('hashchange', handleHashChange, false);
function handleHashChange() {
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `現在のアンカーは${hash}です`;
};

// => 現在のアンカーは#appleです
// => ~/sample.html#apple
```

- 新しいウィンドウを開く

```
// window.open(URL)
const win = window.open('another.html');
win.focus();
```

- ウィンドウのスクロール量を調べる

```
// window.scrollX => 水平方向のスクロール量
// window.scrollY => 垂直方向のスクロール量
const x = window.scrollX;
const y = window.scrollY;
console.log(x, y);
// => 0 0
```

- ウィンドウをスクロールさせる

```
// scrollTo(X, Y)
window.scrollTo(0, 1000);
```

- タイトルを書き換える

```
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
```

### タイトルを書き換えるサンプル
チャットアプリで未読数をタイトルバーに表示させるとき、など。

```
HTML
<button id="btnOrange">オレンジ</button>
<button id="btnApple">アップル</button>

JavaScript
document.querySelector('#btnOrange').addEventListener('click', () => {
  document.title = 'オレンジ';
}, false);
// => オレンジ
document.querySelector('#btnApple').addEventListener('click', () => {
  document.title = 'アップル';
}, false);
// => アップル
```

- ページにフォーカスがあたっているか調べる

```
// focus => フォーカスがあたっている
// blur => フォーカスが外れている
window.addEventListener('focus', () => {
  document.querySelector('.log').innerHTML = 'フォーカスがあたっている';
}, false);
window.addEventListener('blur', () => {
  document.querySelector('.log').innerHTML = 'フォーカスがはずれている';
}, false);
```

- フルスクリーンにする/解除する

```
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
```

- ネットワーク状況を取得する

```
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
```

## Chapter7

### addEventLitenner() メソッド
クリック・タップ・スクロール・画像のロード・JSONの読み込みなどのイベントを制御する。<br>
イベントターゲットでイベントが発生した時の処理をイベントリスナーという。

```
HTML
<button class="button">Click</button>

JavaScript
// function宣言を使う場合
// イベントターゲット
const button = document.querySelector('.button');
// イベント
button.addEventListener('click', onClickbutton, false);
// イベントリスナー
function onClickbutton() {
  console.log('クリックされました');
};
// => クリックされました

// アロー関数を使う場合
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  console.log('クリックされました');
}, false);
// => クリックされました
```

- イベントの情報を取得する

```
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  console.log(event);
}, false);
// => MouseEvent {isTrusted: true, screenX: 45, screenY: 153, clientX: 23, clientY: 19, …}
```

- イベントが発生した要素を参照する

```
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  console.log(event.target);
}, false);

// => <button class="button">Click</button>
```

- オプションを指定

```
const option = {
  // イベントを一度だけ呼び出す
  once: true
  // イベントをキャプチャーフェーズで呼び出す
  capture: true
  // イベントがパッシブかどうか
  passive: true
};

document.querySelector('.button')
        .addEventListener('click', onClickButton, option);
function onClickButton() {
  alert('ボタンが押されました');
};
```

- イベントリスナーを削除する

-- アロー関数は使えない点に注意する
-- addEventListenner() と同じ引数、オプションを指定する

```
const button = document.querySelector('.button');
button.addEventListener('click', onClickButton);
setTimeout(() => {
  button.removeEventListener('click', onClickButton);
}, 3000);
function onClickButton() {
  alert('ボタンが押されました');
};
```

- ページが表示されたら処理を実行

```
HTML
<script src="sample.js"></script>

<main class="main">
  <div class="box">ボックス</div>
  <div class="box">ボックス</div>
  <div class="box">ボックス</div>
</main>

JavaScript
window.addEventListener('DOMContentLoaded', () => {
  const boxNum = document.querySelectorAll('.box').length;
  console.log(`.boxの要素の数は${boxNum}です`);
});
// => .boxの要素の数は3です

const boxNum = document.querySelectorAll('.box').length;
console.log(`.boxの要素の数は${boxNum}です`);
// => .boxの要素の数は0です
```

-  scriptタグに defar属性を埋め込むと、スクリプトはDOMの解析後に実行

```
HTML
<script src="sample.js" defar></script>

<main class="main">
  <div class="box">ボックス</div>
  <div class="box">ボックス</div>
  <div class="box">ボックス</div>
</main>

JavaScript
const boxNum = document.querySelectorAll('.box').length;
console.log(`.boxの要素の数は${boxNum}です`);
// => .boxの要素の数は3です
```

- クリック時に処理を実行

```
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  alert('ボタンが押されました');
}, false);
```

- マウスの動作時に処理を実行

|イベント|タイミング|
|-----|-----|
|mousedown|マウスのボタンを押した時|
|mouseup|マウスのボタンを離した時|
|mousemove|マウスを動かした時|

```
const logArea = document.querySelector('.log');
logArea.addEventListener('mousedown', () => {
  logArea.innerHTML = 'ボタンが押されました';
});
logArea.addEventListener('mouseup', () => {
  logArea.innerHTML = 'ボタンが離しました';
});
logArea.addEventListener('mousedown', () => {
  logArea.innerHTML = 'マウスを移動しました';
});
```

- マウスオーバー時に処理を実行

|イベント|タイミング|
|-----|-----|
|mouseenter|ポインティングデバイスが要素の上に乗った時|
|mouseleave|ポインティングデバイスが要素の上から離れた時|
|mouseover|ポインティングデバイスが要素の上に乗った時(バブリング)|
|mouseout|ポインティングデバイスが要素の上から離れた時(バブリング)|

### バブリング
ある要素で発生したイベントが、親要素や先祖要素に伝わること。

```
// マウスオーバー時に処理を実行
document.querySelector('.box').addEventListener('mouseenter', () => {
  log('ポインティングデバイスが要素の上に乗った');
});
// => ポインティングデバイスが要素の上に乗った

document.querySelector('.box').addEventListener('mouseleave', () => {
  log('ポインティングデバイスが要素の上から離れた');
});
// => ポインティングデバイスが要素の上から離れた
function log(message) {
  console.log(message);
};

// マウスオーバー時に処理を実行(バブリング)
HTML
<div class="box">
  Box
  <div class="inner">Inner</div>
</div>

JavaScript
document.querySelector('.box').addEventListener('mouseover', () => {
  log('ポインティングデバイスが要素の上に乗った');
});
document.querySelector('.inner').addEventListener('mouseover', () => {
  log('ポインティングデバイスが要素の上に乗った');
});
// => ポインティングデバイスが要素の上に乗った(バブリング)
function log(message) {
  console.log(message);
};
```

- マウス操作時の座標を取得

|プロパティ|座標|
|-----|-----|
|event.clientX|ブラウザ左上が基準|
|event.clientY|ブラウザ左上が基準|
|event.offsetX|要素左上が基準|
|event.offsetY|要素左上が基準|
|event.pageX|ページ左上が基準|
|event.pageY|ページ左上が基準|
|event.screenX|デバイス左上が基準|
|event.screenY|デバイス左上が基準|

```
const targetBox = document.querySelector('.box');
targetBox.addEventListener('mousemove', (event) => {
  console.log(event.clientX, event.clientY);
});
```

### マウス操作時の座標を取得したサンプル

```
HTML
<div class="charactor"></div>

CSS
.charactor {
  position: absolute;
  top: 0;
  left: 0;
}
.charactor::after {
  content: '★';
}

JavaScript
const charactor = document.querySelector('.charactor');
document.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', onMouseMove, false);
  document.removeEventListener('mouseup', onMouseMove, false);
}, false);
function onMouseMove(event) {
  charactor.style.top = `${event.clientX}px`;
  charactor.style.left = `${event.clientY}px`;
};
```

- スクロール時に処理を実行

```
window.addEventListener('scroll', () => {
  console.log('スクロール', window.scrollX, window.scrollY);
}, false);
```

- テキスト選択時に処理を実行

```
// selectstartイベント
document.querySelector('.text').addEventListener('selectstart', () => {
  console.log('テキストが選択されました');
}, false);
// => テキストが選択されました
```

### テキスト選択時に処理を実行するサンプル

```
HTML
<main>
  <p class="paragraph">Hello, this is a technical book of JavaScript.</p>
  <div id="balloon"></div>
</main>

CSS
body {
  width: 100vw;
  height: 100vh;
  background: #171717;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  position: static;
}

.paragraph {
  font-size: 2rem;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  text-stroke: 1px white;
}

#balloon {
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  padding: 5px;
  min-width: 60px;
  color: #171717;
  font-size: 12px;
  background: white;
  border-radius: 5px;
  display: none;
  opacity: 0;
}

#balloon::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border: 10px solid transparent;
  border-top: 10px solid white;
}

#balloon.on {
  opacity: 1;
  display: block;
  transition: 300ms all;
}

JavaScript
const balloon = document.querySelector('#balloon');
const paragraph = document.querySelector('.paragraph');

paragraph.addEventListener('selectstart', () => {
  paragraph.addEventListener('mouseup', (event) => {
    // document.getSelection() => 選択された文字列を返す
    const selectionParagraph = window.getSelection().toString();
    if (selectionParagraph.length > 0) {
      balloon.innerHTML = selectionParagraph;
      // classList.add() => クラスを追加する
      balloon.classList.add('on');
      balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`
      balloon.style.top = `${event.clientY - balloon.clientWidth}px`
    } else {
      removePopup();
    }
  }, {once: true});
}, false);

balloon.addEventListener('click', removePopup, false);
function removePopup() {
  balloon.classList.remove('on');
};
```

- タッチ操作時に処理を実行する

|イベント|タイミング|
|-----|-----|
|touchstart|タッチを開始した時|
|touchmove|タッチポイントを動かした時|
|touchend|タッチを終了した時|

```
HTML
<div class="box">
  <p class="log"></p>
</div>

JavaScript
const targetBox = document.querySelector('.box');
const logArea = document.querySelector('.log');
targetBox.addEventListener('touchstart', () => {
  logArea.innerHTML = 'タッチ開始';
});
targetBox.addEventListener('touchmove', () => {
  logArea.innerHTML = 'タッチ位置移動';
});
targetBox.addEventListener('touchend', () => {
  logArea.innerHTML = 'タッチ終了';
});
```

- タッチ操作時のイベントの情報を取得する

```
// event.changedTouches
const box = document.querySelector('.box');
const log = document.querySelector('.log')
box.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches;
  log.innerHTML = `${touch[0].pageX.toFixed(2)}<br>${touch[0].pageY.toFixed(2)}`;
});
```

- キーボード入力時に処理を実行する

|イベント|タイミング|
|-----|-----|
|keydown|キーを押した時|
|keyup|キーを離した時|
|keypress|文字を生成するキーを押した時|

```
// keydown
document.querySelector('.textarea').addEventListener('keydown', () => {
  console.log('キーが押された');
}, false);
// => キーが押された
// keyup
document.querySelector('.textarea').addEventListener('keyup', () => {
  console.log('キーが離された');
}, false);
// => キーが離された
// keypress
document.querySelector('.textarea').addEventListener('keypress', () => {
  console.log('文字が入力された');
}, false);
// => 文字が入力された

// => keypress イベントは、alt, shift, command, Enter で発火しない。
```

### キーボード入力時に処理を実行するサンプル

```
HTML
<textarea class="textarea"></textarea>
<p>現在 <span class="string_num">0</span>文字入力中です。</p>

JavaScript
const textarea = document.querySelector('.textarea');
const string_num = document.querySelector('.string_num');
textarea.addEventListener('keyup', onKeyUp, false);
function onKeyUp() {
  const input = textarea.value;
  string_num.innerHTML = input.length;
};
```

- 入力されたキーの値を調べる

|プロパティ|意味|データ型|
|-----|-----|-----|
|event.key|ボタンの値|文字列|
|event.code|ボタンのコード|文字列|
|event.altKey|altキーが押されたかどうか|真偽値|
|event.ctrlKey|ctrlキーが押されたかどうか|真偽値|
|event.shiftKey|shiftキーが押されたかどうか|真偽値|
|event.metaKey|commandキーが押されたかどうか|真偽値|
|event.repeat|キーを長押ししているかどうか|真偽値|
|event.isComposing|入力が未確定かどうか|真偽値|

```
const textarea = document.querySelector('.textarea');
textarea.addEventListener('keyup', (event) => {
  console.log(event.key);
  // => a
  console.log(event.code);
  // => KeyA
  console.log(event.altKey);
  console.log(event.ctrlKey);
  console.log(event.shiftKey);
  console.log(event.metaKey);
  console.log(event.repeat);
  console.log(event.isComposing);
}, false);
```

### 入力されたキーの値を調べる

```
window.addEventListener('keydown', handleKeydown, false);
function handleKeydown(event) {
  const keyCode = event.keyCode;
  // console.log(keyCode);
  if (keyCode === 39) {
    console.log('右キーが押されました');
  };
  if (keyCode === 37) {
    console.log('左キーが押されました');
  };
  if (keyCode === 38) {
    console.log('上キーが押されました');
  };
  if (keyCode === 40) {
    console.log('下キーが押されました');
  };
};
```

- ブラウザのタブを切り替え処理する

```
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
```

### ブラウザのタブを切り替え処理するサンプル

```
// 初期化
if (document.visibilityState === 'visible') {
  playSound();
};
// イベント
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    playSound();
    return;
  };
  if (document.visibilityState === 'hidden') {
    stopSound();
    return;
  };
});
function playSound() {
  // 実行したい処理
};
function stopSound() {
  // 実行したい処理
};
```

- 画面サイズが変更されたら処理を実行

```
window.addEventListener('resize', () => {
  console.log('ブラウザがリサイズされました')
}, false);
```

### 画面サイズが変更されたら処理を実行するサンプル

```
let resizeTimer;
window.addEventListener('resize', () => {
  if (resizeTimer !== null) {
    clearTimeout(resizeTimer);
  };
  resizeTimer = setTimeout(() => {
    onResize();
  }, 1000);
});
function onResize() {};
```

- メディアクエリを設定する

```
// matchMedia()
console.log(matchMedia('(min-width: 500px)'));
// => MediaQueryList {media: "(min-width: 500px)", matches: true, onchange: null}
// matchMedia().matches
console.log(matchMedia('(min-width: 500px)').matches);
// => true or false
console.log(matchMedia('(min-width: 100px) and (max-width: 700px)').matches);
// => true or false

// orientation: portrait => 横持ち
const mediaQueryList = matchMedia('(orientation: portrait)');
console.log(mediaQueryList);
// => MediaQueryList {media: "(orientation: portrait)", matches: false, onchange: null}
mediaQueryList.addEventListener(() => {
  console.log('デバイスの向きが変更された');
});
```

### メディアクエリを設定するサンプル

```
HTML
<div class="rectangle"></div>

JavaScript
const rectAngle = document.querySelector('.rectangle');
const mediaQueryList = matchMedia('(min-width: 600px)');
mediaQueryList.addListener(onMediaQueryChange);
// console.log(mediaQueryList);
// => MediaQueryList {media: "(min-width: 600px)", matches: true, onchange: null}
function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('ウィンドウサイズが600pxを超えました');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('ウィンドウサイズが600pxを下回りました');
  };
};
// ページ表示時に実行
onMediaQueryChange(mediaQueryList);
```

- イベントを発生させる

```
// dispatchEvent()
const boxElement = document.querySelector('#myBox');
boxElement.addEventListener('click', () => {
  boxElement.innerHTML = 'クリックされました';
});
// new Event('evnet.name', [{detail: value}]) => イベントを生成する
// 1秒後にクリックイベントが発生する
setTimeout(() => {
  boxElement.dispatchEvent(new Event('click'));
}, 1000);
```

- イベントのデフォルトの挙動をキャンセルする

```
// preventDefault()
// マウスホイールを無効化
document.querySelector('.foo').addEventListener('wheel', (event) => {
  event.preventDefault();
});
// タッチ開始処理を無効化
document.documentElement.addEventListener('touchstart', (event) => {
  event.preventDefault();
});
```

### イベントのデフォルトの挙動をキャンセルするサンプル

```
HTML
<p><input id="mouseWheelToggle" type="checkbox">マウスホイールを無効化</p>
<ul class="scrollable-element">
  <li>りんご</li>
  <li>みかん</li>
  <li>バナナ</li>
  <li>いちご</li>
  <li>パイナップル</li>
  <li>キウイ</li>
  <li>ぶどう</li>
  <li>スイカ</li>
</ul>

CSS
.scrollable-element {
  overflow-y: scroll;
}

JavaScript
let enableMouseWheel = true;
// チェックボックスをクリックした時の処理
document.querySelector('#mouseWheelToggle').addEventListener('click', (event) => {
  // チェックボックスに値が入っていたら、マウスホイールを無効化
  if ()
  enableMouseWheel = event.target.checked === false;
});
document.querySelector('.scrollable-element').addEventListener('wheel', (event) => {
  // マウスホイールが有効な場合は処理を抜ける
  if (enableMouseWheel === true) {
    return;
  };
  // マウスホイールが無効な場合はイベントをキャンセル
  event.preventDefault();
});
```

- ドラッグ&ドロップを処理する

#### ドラッグしている要素

|イベント|タイミング|
|-----|-----|
|dragstart|要素のドラッグを開始した時|
|drag|要素をドラッグしている時|
|dragend|要素のドラッグが終了した時|

#### ドラッグを受け入れる要素

|イベント|タイミング|
|-----|-----|
|dragenter|ドラッグ中にマウスポインターが要素上に乗った時|
|dragover|ドラッグ中に申すポインターが要素に存在する時|
|dragleave|ドラッグ中にマウスポインターが要素上から離れた時|
|drop|要素をドロップした時|

#### Drag and Drop API
event.dataTransfer.files でドロップされたファイル情報を取得する。

```
const charactor = document.querySelector('.character');
// dragstart
charactor.addEventListener('dragstart', () => {
  console.log('dragstartイベント');
});
// drag
charactor.addEventListener('drag', () => {
  console.log('dragイベント');
});
// dragend
charactor.addEventListener('dragend', () => {
  console.log('dragendイベント');
});

const box = document.querySelector('.box');
// dragenter
box.addEventListener('dragenter', () => {
  console.log('dragenter');
});
// dragover
box.addEventListener('dragover', () => {
  console.log('dragoverイベント');
});
// dragleave
box.addEventListener('dragleave', () => {
  console.log('dragleaveイベント');
});
```

#### Drag and Drop API サンプル

```
HTML
<div class="file-zone">
  画像ファイルを<br>ドロップしてください
</div>

<div class="file-preview-area">
  <h1>アップロードした画像ファイル</h1>
  <div class="image-list"></div>
</div>

CSS
body {
  display: block;
  overflow: scroll;
}

.file-zone {
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 200px);
  transition: 100ms all ease-out;
}

.file-zone.on {
  background-color: rgba(97, 131, 209, 0.9);
}

.file-preview-area {
  width: 100%;
  min-height: 200px;
  background-color: rgba(0, 0, 0, 0.58);
}

.file-preview-area .image-list {
  display: grid;
  overflow: scroll;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}

.file-preview-area .image-list > img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

JavaScript
// ファイルをアップロードするエリア
const fileZone = document.querySelector('.file-zone');
// ファイルをアップロードするエリアに追加/削除するクラス
const className = 'on';

// ドラッグした時の処理
// ドラッグした要素が重なったときの処理
fileZone.addEventListener('dragover', () => {
  event.preventDefault();
  fileZone.classList.add(classname);
});
// ドラッグした要素が離れたときの処理
fileZone.addEventListener('dragleave', () => {
  event.preventDefault();
  fileZone.classList.remove(className);
});

// ドロップした時の処理
fileZone.addEventListener('drop', (event) => {
  event.preventDefault();
  fileZone.classList.remove(className);

  // event.dataTransfer.files ドロップされたファイル情報を取得
  const transferdFiles = event.dataTransfer.files;

  // 画像を表示する
  displayImages(transferdFiles);
});

// 画像を表示する関数
function displayImages(transferdFiles) {
  // 画像ファイルの格納する配列
  const imageFileList = [];

  // ファイル数
  const fileNum = transferdFiles.length;

  // ファイルタイプが画像のみ配列に格納
  for (let i = 0; i < fileNum; i++) {
    if (transferdFiles[i].type.match('image.*') === false) {
      return;
    };
    imageFileList.push(transferdFiles[i]);
  };

  // 画像表示エリアを参照
  const imagePreviewArea = document.querySelector('.image-list');

  // 各画像ファイルについて処理
  for (const imageFile of imageFileList) {
    // 画像ファイルの読み込み処理
    // FileReaderオブジェクトを生成
    const fileReader = new FileReader();
    // ArrayBufferオブジェクトを取得
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener('load', (event) => {
      const image = new Image();
      image.src = event.target.result;
      // 表示エリアの先頭に画像ファイルを表示
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  };
}
```

## Chapter8

- querySelector() はセレクタ名に合致する要素が複数ある場合、最初の要素を返す。

```
HTML
<div class="box">1つ目のボックス</div>
<div class="box">2つ目のボックス</div>
<div class="box">3つ目のボックス</div>

JavaScript
const box = document.querySelector('.box');
console.log(box);
// => <div class="box">1つ目のボックス</div>
```

- querySelectorAll() で取得した要素にまとめて処理をする場合、forEach()メソッドかfor文を使う

```
HTML
<div class="box">1つ目のボックス</div>
<div class="box">2つ目のボックス</div>
<div class="box">3つ目のボックス</div>

JavaScript
// forEach()
const eachList = document.querySelectorAll('.box');
eachList.forEach((targetbox) => {
  console.log(targetbox);
});
// => <div class="box">1つ目のボックス</div>
// => <div class="box">2つ目のボックス</div>
// => <div class="box">3つ目のボックス</div>

// for
const forList = document.querySelectorAll('.box');
for(let i = 0; i < forList.length; i++) {
  console.log(forList[i]);
};
// => <div class="box">1つ目のボックス</div>
// => <div class="box">2つ目のボックス</div>
// => <div class="box">3つ目のボックス</div>

document.querySelectorAll('.box').forEach((targetbox) => {
  targetbox.addEventListener('click', () => {
    alert(`${targetbox.textContent}がクリックされました`);
  }, false);
});
```

- ルート要素を取得

```
// console.dir() => オブジェクトのプロパティを階層構造で取得する
// document.documentElement ルート要素を取得
console.dir(document.documentElement);
// => html...
// document.head
console.dir(document.head);
// => head...
console.dir(document.body);
// => body...

// head内にscriptタグを動的に挿入
const scriptElement = document.createElement('script');
scriptElement.src = 'js/sample-script.js';
document.head.appendChild(scriptElement);
// => <script src="js/sample-script.js"></script>
```

### ウィンドウをダークモードにするサンプル

```
HTML
<button class="theme-change-button">配色を変更</button>
<h1>At the moment of my dream</h1>

CSS
body {
  font-size: 20px;
  color: #2f3b4c;
  background-color: #f9f9f9;
  transition: 300ms all ease-out;
}

body.theme-dark {
  background-color: #1e1e1e;
  color: #fff;
}

body:before {
  background-image: none;
}

.theme-change-button {
  font-size: 12px;
  width: auto;
  color: initial;
  background-color: white;
  position: fixed;
  top: 10px;
  right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

body.theme-dark .theme-change-button {
  background-color: #1e1e1e;
  color: #fff;
}

h1 {
  font-size: 26px;
  line-height: 1.5;
  border-bottom: 1px solid #2f3b4c;
  text-align: left;
  transition: 300ms border-bottom-color ease-out;
}

body.theme-dark h1 {
  border-bottom-color: white;
}

main {
  height: auto;
  background-color: transparent;
  border-radius: 0;
  max-width: 900px;
}

JavaScript
// ウィンドウをダークモードにするサンプル
const themeChangeButton = document.querySelector('.theme-change-button');
themeChangeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
});
```

- 子要素、前後要素、親要素

```
HTML
<div id="parent">
  <div id="child1">子要素1</div>
  <div id="child2">子要素2</div>
  <div id="child3">子要素3</div>
</div>

JavaScript
const parentElement = document.querySelector('#parent');

// 親ノード.children => 子ノード
console.log(parentElement.children);
// => HTMLCollection(3) [div#child1, div#child2, div#child3, child1: div#child1, child2: div#child2, child3: div#child3]

// 親ノード.firstElementChild => 最初の子ノード
console.log(parentElement.firstElementChild);
// => <div id="child1">子要素1</div>

// 親ノード.lastElementChild => 最後の子ノード
console.log(parentElement.lastElementChild);
// => <div id="child3">子要素3</div>

const firstElementChild = parentElement.firstElementChild;
// 兄弟ノード.nextElementSibling => 次(弟)のノード
console.log(firstElementChild.nextElementSibling);

// 兄弟ノード.previousElementSibling => 前(兄)のノード
console.log(firstElementChild.previousElementSibling);
// => null

// 兄弟ノード.
console.log(firstElementChild.parentElement);
// => <div id="parent"></div>
```

- 親要素の末尾に要素を追加

```
// 親要素.appendChild(子ノード)
const myBox = document.querySelector('#myBox');
const container = document.querySelector('.container');
setTimeout(() => {
  // 3秒後に子ノードを追加
  container.appendChild(myBox);
}, 3000);
```

- 指定した位置の直前に要素を追加

```
// 親ノード.insertBefore(子ノード, 指定した位置)
const container = document.querySelector('.container');
const myBox1 = document.querySelector('#mybox1');
const myBox2 = document.querySelector('#mybox2');
const box2 = document.querySelector('#box2');
setTimeout(() => {
  container.insertBefore(mybox1, container.firstElementChild);
}, 3000);
setTimeout(() => {
  container.insertBefore(myBox2, box2);
}, 4000);
```

- 指定した位置の前後に要素を追加

```
// 指定した位置の前後に要素を追加
const myBox1 = document.querySelector('#mybox1');
const myBox2 = document.querySelector('#mybox2');
const targetBox = document.querySelector('#targetBox');

// ノード1.before(ノード2) => ノード1の前にノード2を追加
setTimeout(() => {
  targetBox.before(myBox1);
}, 3000);

// ノード1.after(ノード2) => ノード1の後にノード2を追加
setTimeout(() => {
  targetBox.after(myBox2);
}, 4000);
```

- HTML要素を追加

```
HTML
<!-- beforebegin -->
<div class="container">
  <!-- afterbegin -->
  <div class="box">子要素1</div>
  <div class="box">子要素2</div>
  <!-- beforeend -->
</div>
<!-- afterend -->

JavaScript
// HTML要素を追加
// 親要素.insertAdjiacentHTML(挿入位置, 文字列)
const container = document.querySelector('.container');
const newBox = `<div class="new-box box">.new-box要素</div>`;
setTimeout(() => {
  // 親要素の直前
  container.insertAdjacentHTML('beforebegin', newBox);
  // 親要素内の先頭
  container.insertAdjacentHTML('afterbegin', newBox);
  // 親要素内の末尾
  container.insertAdjacentHTML('beforeend', newBox);
  // 親要素の直後
  container.insertAdjacentHTML('afterend', newBox);
}, 3000);
```

- 子のHTML要素を削除

```
// 親ノード.removeChild(子ノード)
<div id="parent">
  <div id="child">取り除く要素</div>
</div>

setTimeout(() => {
  const parentElement = document.querySelector('#parent');
  const childElement = document.querySelector('#child');
  parentElement.removeChild(childElement);
}, 3000);
```

- HTML要素を削除

```
// ノード.remove();
setTimeout(() => {
  const  childElement = document.querySelector('#child');
  childElement.remove();
}, 3000);
```

- HTML要素を生成

```
// document.createElement('タグ', オプション);
const divElement = document.createElement('div');
console.log(divElement);
// => <div></div>
const anchorElement = document.createElement('a');
console.log(anchorElement);
// => <a></a>
```

### モーダルを生成するサンプル

```
HTML
<button id="create-modal-button">モーダルウィンドウを作成</button>

CSS
 .modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10px;
  display: block;
  width: 960px;
  height: 540px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;
  font-size: 1.5rem;
  animation: fadeInAnimation 200ms ease-out;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

JavaScript
document.querySelector('#create-modal-button').addEventListener('click', displayModalWindow, false);
function displayModalWindow() {
  // モーダルウィンドウを生成
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');
  // モーダルウィンドウの中身を生成
  const innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = `
  <p>モーダルウィンドウの中身です</p>
  <div class="character"></div>
  `;
  // DOMに要素を追加
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);
  // 閉じるイベントを生成
  innerElement.addEventListener('click', () => {
    closeModalWindow(modalElement);
  });
};
function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
};
```

- 要素を複製

```
// ノード.cloneNode(真偽値)
setTimeout(() => {
  const clonedBox = document.querySelector('#myBox').cloneNode(true);
  document.querySelector('.container').appendChild(clonedBox);
}, 3000);
```

- 要素を他の要素に置き換える

```
<div class="container">
  <div class="old-box box">旧ボックス</div>
</div>

// 親ノード.replaceChild(新ノード, 旧ノード)
setTimeout(() => {
  const container = document.querySelector('.container');
  const oldBox = document.querySelector('.old-box');
  const newBox = document.createElement('div');
  // 新しい要素を生成
  newBox.textContent = '新ボックス';
  newBox.classList.add('new-box', 'box');
  // 要素を置き換える
  container.replaceChild(newBox, oldBox);
}, 3000);
```

- 要素を入れ替える

```
<div class="container">
  <div class="old-box box">旧ボックス</div>
</div>

// 旧ノード.replaceWith(新ノード)
setTimeout(() => {
  const oldBox = document.querySelector('.old-box');
  const newBox = document.createElement('div');
  // 新しい要素を生成
  newBox.textContent = '新ボックス';
  newBox.classList.add('new-box', 'box');
  // 要素を置き換える
  oldBox.replaceWith(newBox);
}, 3000);
```

- 要素内のテキストを書き換える

```
// ノード.textContent
const weather = document.querySelector('#weather');
setTimeout(() => {
  weather.textContent = '気温は24℃の予想です。';
}, 3000);

// => textContentメソッドは、全てを文字列として返す
```

- 要素内のHTML要素を書き換える

```
HTML
<p id="weather">明日は晴れるでしょう</p>

CSS
#weather strong {
  color: #d03939;
}

JavaScript
const weather = document.querySelector('#weather');
setTimeout(() => {
  weather. innerHTML = '気温は<strong>24℃</strong>の予想です。';
}, 3000);

// => 出力結果
<p id="weather">
  気温は<strong>24℃</strong>の予想です。
</p>
```

- 要素そのものや属性を書き換える

```
// ノード.outerHTML
const weather = document.querySelector('#weather');
console.log(weather);
// => <p id="weather">明日は晴れるでしょう</p>
weather.outerHTML = '<img src="sample.jpg" alt="サンプル">';
console.log(weather);
// => <img src="sample.jpg" alt="サンプル">
```

- 要素の属性を取得、書き換える

```
// ノード.getAttribute(属性名) => 要素の属性を取得
<a href="https://example.com" id="anchor">リンク</a>

const anchorElement = document.querySelector('#anchor');
console.log(anchorElement.getAttribute('href'));
// => https://example.com


// ノード.setAttriute(属性名, 値) => 要素の属性を設定
<img src="dummy.png" id="image">

const imageElement = document.querySelector('#image');
imageElement.setAttribute('src', 'sample.png');
console.log(imageElement);
// => <img src="sample.png" id="image">

// ノード.hasAttribute(属性名) => 要素の属性があるかどうか
```

- rel="noopener" を付与する<br>
参考リンク 
<a href="https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=ja" target="_blank" rel="noopener">https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=ja</a>

```
HTML
<ul>
  <li><a href="dummypage1.html" target="_blank">リンク1</a></li>
  <li><a href="dummypage2.html">リンク2</a></li>
  <li><a href="dummypage3.html" target="_self">リンク3</a></li>
  <li><a href="dummypage4.html" target="_blank">リンク4</a></li>
</ul>
<p><a href="dummypage5.html" target="_blank">リンク5</a></p>

JavaScript
// rel="noopener" を付与する
const aElementList = document.querySelectorAll('a');
aElementList.forEach((element) => {
  if(element.hasAttribute('target') === false) {
    return;
  };
  if(element.getAttribute('target') !== '_blank') {
    return;
  };
  element.setAttribute('rel', 'noopener');
});

// => 出力結果
<ul>
  <li><a href="dummypage1.html" target="_blank" rel="noopener">リンク1</a></li>
  <li><a href="dummypage2.html">リンク2</a></li>
  <li><a href="dummypage3.html" target="_self">リンク3</a></li>
  <li><a href="dummypage4.html" target="_blank" rel="noopener">リンク4</a></li>
</ul>
<p>
  <a href="dummypage5.html" target="_blank" rel="noopener">リンク5</a>
</p>
```

- 要素のクラスを追加、削除

```
<div id="box" class="red"></div>

// 要素のクラスを追加、削除、確認
const box = document.querySelector('#box');
// 要素のクラスを削除
// ノード.classList.add('クラス'...)
box.classList.add('blue');
console.log(box);
// => <div id="box" class="red blue"></div>

// 要素のクラスを削除
// ノード.classList.remove('クラス'...)
box.classList.remove('red');
console.log(box);
// => <div id="box" class="blue"></div>

// 要素のクラスを確認
// ノード.classList.contains('クラス')
console.log(box.classList.contains('red'));
// => false
console.log(box.classList.contains('blue'));
// => true
```

### toggle 要素のクラスの有無を切り替えるサンプル

```
HTML
<main class="main large">
  <h1>ウェブページで使う技術</h1>
  <div class="section-wrapper">
    <section>
      <button class="button">HTML</button>
      <div class="content">
        <p>HyperText Markup Languageの略称。ウェブページで使うマークアップ言語。</p>
        <dl class="">
          <dt>コード例</dt>
          <dd>
            <code class="block">
              <pre>&lt;h1&gt;文章&lt;/h1&gt;
    &lt;p&gt;タイトル&lt;/p&gt;</pre>
            </code>
          </dd>
        </dl>
      </div>
    </section>
    <section>
      <button class="button">CSS</button>
      <div class="content">
        <p>Cascading Style Sheetsの略称。HTMLやXMLの文書の体裁を設定するための文書。</p>
        <dl>
          <dt>コード例</dt>
          <dd>
            <code class="block">
              <pre>h1 {
                  font-color: red;
                  margin-bottom: 10px;
              }</pre>
            </code>
          </dd>
        </dl>
      </div>
    </section>
    <section>
      <button class="button">JavaScript</button>
      <div class="content">
        <p>ウェブブラウザ・サーバーサイドで動作するプログラミング言語。</p>
        <dl>
          <dt>コード例</dt>
          <dd>
            <code class="block">
              <pre>alert("Hello world");</pre>
            </code>
          </dd>
        </dl>
      </div>
    </section>
  </div>
</main>

CSS
h1 {
  -webkit-text-stroke: 1px white;
  text-stroke: 1px white;
  font-weight: bold;
}

main {
  padding: 10px;
}

.section-wrapper {
  display: flex;
}

section {
  width: calc(100% / 3);
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  text-transform: none;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #2673a6;
}

.button:hover {
  background-color: #2688bc;
}

.button:active {
  background-color: #265c8f;
}

.button + .content {
  display: none;
  font-size: 20px;
  margin-top: 10px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  padding: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3) inset;
  text-align: left;
  color: white;
}

.button + .content.show {
  display: block;
}

.button + .content h2 {
  font-size: 22px;
}

.button + .content dt {
  margin-bottom: 10px;
}

.button + .content dl,
.button + .content dt,
.button + .content dd {
  margin: 0;
}

JavaScript
// ノード.classList.toggle(クラス)
document.querySelectorAll('.button').forEach((element) => {
  // .buttonがクリックされた時の処理
  element.addEventListener('click', () => {
    // 次の要素(ここではcontent)のクラスを切り替える
    element.nextElementSibling.classList.toggle('show');
  }, false);
});
```

- スタイルを変更

```
// ノード.style.プロパティ
const information = document.querySelector('#information');
information.style.color = 'white';
information.style.fontSize = '80px';
information.style.fontWeight = '600';
const strokeColor = '#c52b84';
// information.style.webkitTextStroke = `2px ${strokeColor}`;
// textStroke => テキストの角の太さを指定(非推奨)
information.style.textStroke = `2px ${strokeColor}`;
information.style.textShadow = `7px 7px 0 #bf3384`;
```

- スタイルを取得

```
HTML
<div id="box" class="red"></div>

CSS
#box {
  width: 100px;
  height: 100px;
}
.red {
  background: #ff2bc2;
}

JavaScript
// getComputedStyle(ノード).プロパティ
const box = document.querySelector('#box');
console.log(getComputedStyle(box).width);
// => 100px
console.log(getComputedStyle(box).background);
// => rgb(255, 43, 194) none repeat scroll 0% 0% / auto padding-box border-box
```

## Chapter9

- テキストボックス(input, textarea)の変更を検知<br>
inputイベントはキー入力と同時にイベントが発生、changeイベントはenterを押した時やフォーカスが外れた時に発生。

```
const element = document.querySelector('#myText');

// => input
element.addEventListener('input', handleChange, false);
function handleChange(event) {
  const log = document.querySelector('.log');
  log.innerHTML = event.target.value;
};

// => change
element.addEventListener('change', handleChange, false);
function handleChange(event) {
  const log = document.querySelector('.log');
  log.innerHTML = event.target.value;
};
```

- <strong>checked</strong> チェックボックスの情報を取得

```
<label>
  <input type="checkbox" value="A" id="checkBoxA"> 
  チェックボックスA
</label>
<label>
  <input type="checkbox" value="B" id="checkBoxB" checked> 
  チェックボックスB
</label>

// 未チェック
const checkBoxA = document.querySelector('#checkBoxA');
console.log(checkBoxA.checked);
// => false
// チェック済
const checkBoxB = document.querySelector('#checkBoxB');
console.log(checkBoxB.checked);
// => true

// チェックされた状態に変化
checkBoxA.checked = true;
console.log(checkBoxA.checked);
// => true
```

- チェックボックスの変更を検知

```
<label>
  <input type="checkbox" value="A" id="checkBoxA"> 
  チェックボックスA
</label>
<p class="log"></p>

const checkBoxA = document.querySelector('#checkBoxA');
checkBoxA.addEventListener('change', handler, false);
function handler(event) {
  const log = document.querySelector('.log');
  log.innerHTML = `チェックボックスは ${event.target.checked} になりました`;
};
// => チェックボックスは true になりました
```

- ローカルファイルの情報を取得

```
<input type="file" id="myFile" accept=".txt">

const element = document.querySelector('#myFile');
element.addEventListener('change', (event) => {
  const files = event.target.files;
  // 配列となっているので、インデックス0番のファイルを参照
  const file = files[0];
  alert(`${file.name}が選択されました`);
});
```

- ローカルファイルをテキスト情報として取得<br>
FileReaderオブジェクトの、readAsText()メソッドを使う。

```
<input type="file" id="myFile" accept=".txt">
<p class="log"></p>

const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');
element.addEventListener('input', (event) => {
  const files = event.target.files;
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();
  // loadイベントを監視
  reader.addEventListener('load', () => {
    // loadイベント完了後に、resultプロパティでデータへアクセス
    pEl.innerHTML = reader.result;
  });

  // テキストファイルを読み込む
  reader.readAsText(file);
});
```

- ローカルファイルをDataURLとして取得
FileReaderオブジェクトの、readAsDataURL()メソッドを使う。

```
<input type="file" id="myFile" accept=".png, .jpg">
<p class="log"><img></p>

// readAsDataURL()メソッド
const element = document.querySelector('#myFile');
const imgEl = document.querySelector('.log img');
element.addEventListener('input', (event) => {
  const files = event.target.files;
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();
  // loadイベントを監視
  reader.addEventListener('load', () => {
    // loadイベント完了後に、resultプロパティでデータへアクセス
    imgEl.src = reader.result;
  });

  // テキストファイルを読み込む
  reader.readAsDataURL(file);
});
```

- ラジオボタンの情報を取得

```
HTML
<form id="radioGroup">
  <label>
    <input type="radio" name="fruit" value="apple" checked> Apple
  </label>
  <label>
    <input type="radio" name="fruit" value="banana"> Banana
  </label>
  <label>
    <input type="radio" name="fruit" value="strawberry"> Strawberry
  </label>

  <label>
    <input type="radio" name="drink" value="coke" checked> Coke
  </label>
  <label>
    <input type="radio" name="drink" value="redbull"> Redbull
  </label>
  <label>
    <input type="radio" name="drink" value="water"> Water
  </label>
</form>

JavaScript
const element = document.querySelector('form#radioGroup');
// name属性で指定した値を取得
const drinkValue = element.drink.value;
const fruitValue = element.fruit.value;
console.log(`drinkの値は ${drinkValue} です`);
// => drinkの値は coke です
console.log(`fruitの値は ${fruitValue} です`);
// => fruitの値は apple です
```

- ラジオボタンの変更を検知

```
const element = document.querySelector('form#radioGroup');
element.addEventListener('change', handleChange, false);
function handleChange() {
  // event.targetはname属性で指定
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;
  console.log(`drinkの値は ${drinkValue} です`);
  // => drinkの値は coke です
  console.log(`fruitの値は ${fruitValue} です`);
  // => fruitの値は apple です
};
```

- ドロップダウンメニューの情報を取得

```
<select id="mySelect">
  <option value="apple" selected>apple</option>
  <option value="banana">banana</option>
  <option value="strawberry">strawberry</option>
</select>
<p class="log"></p>

const element = document.querySelector('#mySelect');
const value = element.value;
const log = `選択されているのは ${value} です`;
document.querySelector('.log').innerHTML = log;
// => 選択されているのは apple です
```

- ドロップダウンメニューの変更を検知

```
const element = document.querySelector('#mySelect');
element.addEventListener('change', handleChange, false);
function handleChange() {
  const value = element.value;
  const log = `選択されているのは ${value} です`;
  document.querySelector('.log').innerHTML = log;
};
// => 選択されているのは apple です
```

- スライダーの情報を取得

```
// type属性にrangeを指定
<input type="range" id="myRange" min="0" max="100" value="50">
<p class="log"></p>

const element = document.querySelector('#myRange');
const value = element.value;
document.querySelector('.log').innerHTML = `現在の値は ${value} です`;
```

- スライダーの変更を検知

```
const element = document.querySelector('#myRange');
// input だとスライダーを動かす度に取得
// element.addEventListener('input', handleChange, false);

// change だとスライダーを動かした後に取得
element.addEventListener('change', handleChange, false);

function handleChange() {
  const value = element.value;
  document.querySelector('.log').innerHTML = `現在の値は ${value} です`;
};
```

- カラーピッカーの情報を取得

```
<input type="color" id="myColor" value="#ff0000">

const element = document.querySelector('#myColor');
let value = element.value;
console.log(value);
// => #ff0000
```

- カラーピッカーの変更を検知

```
<input type="color" id="myColor" value="#ff0000">
<p class="log"></p>

const element = document.querySelector('#myColor');
element.addEventListener('change', (event) => {
  const value = event.target.value;
  const log = `選択された色が ${value} になりました`;
  const logEl = document.querySelector('.log');
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});
```

### プルダウンリストのサンプル

```
HTML
<select id="pref"></select>
<p class="message"></p>

JavaScript
// JISコードに対応した都道府県の連想配列
const PREF_LIST = [
  { value: 1, name: '北海道' },
  { value: 2, name: '青森県' },
  { value: 3, name: '岩手県' },
  { value: 4, name: '宮城県' },
  { value: 5, name: '秋田県' },
  { value: 6, name: '山形県' },
  { value: 7, name: '福島県' },
  { value: 8, name: '茨城県' },
  { value: 9, name: '栃木県' },
  { value: 10, name: '群馬県' },
  { value: 11, name: '埼玉県' },
  { value: 12, name: '千葉県' },
  { value: 13, name: '東京都' },
  { value: 14, name: '神奈川県' },
  { value: 15, name: '新潟県' },
  { value: 16, name: '富山県' },
  { value: 17, name: '石川県' },
  { value: 18, name: '福井県' },
  { value: 19, name: '山梨県' },
  { value: 20, name: '長野県' },
  { value: 21, name: '岐阜県' },
  { value: 22, name: '静岡県' },
  { value: 23, name: '愛知県' },
  { value: 24, name: '三重県' },
  { value: 25, name: '滋賀県' },
  { value: 26, name: '京都府' },
  { value: 27, name: '大阪府' },
  { value: 28, name: '兵庫県' },
  { value: 29, name: '奈良県' },
  { value: 30, name: '和歌山県' },
  { value: 31, name: '鳥取県' },
  { value: 32, name: '島根県' },
  { value: 33, name: '岡山県' },
  { value: 34, name: '広島県' },
  { value: 35, name: '山口県' },
  { value: 36, name: '徳島県' },
  { value: 37, name: '香川県' },
  { value: 38, name: '愛媛県' },
  { value: 39, name: '高知県' },
  { value: 40, name: '福岡県' },
  { value: 41, name: '佐賀県' },
  { value: 42, name: '長崎県' },
  { value: 43, name: '熊本県' },
  { value: 44, name: '大分県' },
  { value: 45, name: '宮崎県' },
  { value: 46, name: '鹿児島県' },
  { value: 47, name: '沖縄県' }
];

const selectElement = document.querySelector('#pref');

// option要素の初期値
let optionString = '<option value="">選択してください</option>';
PREF_LIST.forEach((item) => {
  optionString += `<option value="${item.value}">${item.name}</option>`
});

//option要素をselect要素に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener('change', (e) => {
  console.log(e);
  const value = e.target.value;
  const message = value === '' ? '選択されていません' : `選択されているのは${value}です`;

  // 選択した要素を表示
  document.querySelector('.message').innerHTML = message;
}, false);
// => 選択されているのは1です
```

- フォーム送信時の処理

```
<form>
  <label for="myText">テキストを入力してください。</label>
  <input type="text" name="myText" id="myText">
  <button>送信する</button>
</form>

// フォーム送信時の処理
const formElement = document.querySelector('form');

// 送信イベントを監視
formElement.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  // comfirm でユーザーに確認
  const isYes = confirm('この内容で送信していいですか？');

  // いいえを選択した場合
  if (isYes === false) {
    e.preventDefault();
  };
};
```

## Chapter10

- <strong>CSS Transitions・CSS Animations</strong><br>
CSS Transitions・CSS Animationsは、セレクターの状態に応じて発生する。<br>
JavaScriptで使うには、要素のクラス指定を切り替えるのがよい。

- <strong>transitionend</strong> トランジションが完了した時のイベント

```
// button要素の場合
<main class="centering">
  <div class="target"></div>
  <div class="ui">
    <button>トランジションを確認する</button>
    <div class="log">ログ表示エリア</div>
  </div>
</main>

const button = document.querySelector('button');
button.addEventListener('click', handleClick, false);
function handleClick() {
  const element = document.querySelector('.target');
  if (element.classList.contains('state-show') === false) {
    element.classList.add('state-show');
  } else {
    element.classList.remove('state-show');
  };
};

const target = document.querySelector('.target');
target.addEventListener('transitionend', (e) => {
  const log = document.querySelector('.log');
  log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
}, false);
```

```
<main class="centering">
  <div class="rect"></div>
  <div class="ui">
    <label>
      <input type="checkbox" id="checkbox"/>
      トランジションを確認する
    </label>
    <div class="log">ログ表示エリア</div>
  </div>
</main>

// input要素の場合
const input = document.querySelector('input');
input.addEventListener('click', () => {
  const rect = document.querySelector('.rect');
  if (rect.classList.contains('state-show') === false) {
    rect.classList.add('state-show');
  } else {
    rect.classList.remove('state-show');
  }
}, false);

const rect = document.querySelector('.rect');
rect.addEventListener('transitionend', () => {
  const log = document.querySelector('.log');
  log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleString();
}, false);
```

- CSS Animationsを監視

|イベント|振る舞い|
|-----|-----|
|animationstart|アニメーション開始時のイベント|
|animationiteration|アニメーションで繰り返しが発生した時のイベント|
|animationend|アニメーション完了時のイベント|

```
<main class="centering">
  <div class="rect"></div>
  <div class="ui">
    <label>
      <input type="checkbox" id="checkbox"/>アニメーションを確認する</label>
    <div class="log">ログ表示エリア</div>
  </div>
</main>

const input = document.querySelector('input');
input.addEventListener('click', () => {
  const rect = document.querySelector('.rect');
  if (rect.classList.contains('state-show') === false) {
    rect.classList.add('state-show');
  } else {
    rect.classList.remove('state-show');
  }
}, false);

const rect = document.querySelector('.rect');
const log = document.querySelector('.log');

// animationstart
rect.addEventListener('animationstart', () => {
  log.innerHTML = 'animationstart 発生 : ' + new Date().toLocaleString();
}, false);

// animationiteration
rect.addEventListener('animationiteration', () => {
  log.innerHTML = 'animationiteration 発生 : ' + new Date().toLocaleString();
}, false);

// animationend
// 繰り返しを指定した時、animationendは発生しない
// rect.addEventListener('animationend', () => {
//   log.innerHTML = 'animationend 発生 : ' + new Date().toLocaleString();
// }, false);
```

### Web Animation API
JavaScriptでアニメーションを使うための手段のひとつ。<br>
Link:
<a href="https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API" target="_blank" rel="noopener">MDN web docs</a>

```
要素.animation(開始値と終了値を含むオブジェクト, アニメーションの属性を含むオブジェクト)
```

#### CDN
CSS未対応のブラウザのため追記する。

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations.min.js" defer></script>
```

```
HTML
<div class="container">
  <div class="rect"></div>
</div>

CSS
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.container {
  position: relative;
  width: 940px;
  height: 520px;
  background: rgba(0, 0, 0, 0.5);
}
.rect {
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  background: white;
  top: 200px;
}

JavaScript
const element = document.querySelector('.rect');
element.animate(
  // 第一引数 => 開始値と終了値を含むオブジェクト
  {
    transform: [
      'translateX(0px) rotate(0deg)', // 開始値
      'translateX(800px) rotate(360deg)' // 終了値
    ]
  },
  // 第二引数 => アニメーションの属性を含むオブジェクト
  {
    duration: 3000, // デュレーション
    iterations: Infinity, // 繰り返し回数
    direction: 'normal', // 繰り返し挙動
    easing: 'ease' // 加減速速度
  }
);
```

- 要素の大きさを変える

```
// 共通の指定
<main class="centering">
  <div class="rect"></div>
  <label class="ui">
    <input type="checkbox" id="checkbox"/>
    アニメーションを確認する
  </label>
</main>

.rect {
  width: 50px;
  height: 50px;
  display: block;
  position: absolute;
  background: white;
  top: 150px;
  transition: all 0.5s;
}
.centering {
  position: relative;
}
.ui {
  position: absolute;
  bottom: 100px;
}
```

#### CSS Transition で実現するサンプル

```
CSS
.rect {
  transition: all 0.5s;
}
.rect.state-show {
  transform: scale(4);
}

JavaScript
const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  // 条件式をtrueにしないと動かない
  if (rect.classList.contains('state-show') === true) {
    rect.classList.remove('state-show');
  } else {
    rect.classList.add('state-show');
  };
});
```

#### Web Animation API で実現するサンプル

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations.min.js" defer></script>

const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  rect.animate(
    {
      transform: [
        'scale(1)',
        'scale(5)'
      ]
    },
    {
      duration: 5000,
      fill: 'forwards', // 終了時にプロパティを保つ
      easing: 'ease'
    }
  );
}, false);
```

- 要素を変化させる(traslate, opacity...)

```
// 共通の指定


.rect {
  width: 100px;
  height: 100px;
  background: white;
  display: block;
  position: absolute;
  top: 150px;
}
.centering {
  position: relative;
}
.ui {
  position: absolute;
  bottom: 100px;
}
```

#### CSS Transition で実現するサンプル

```
.rect {
  transition: all 3s;
  opacity: 1.0;
}
.rect.state-show {
  transform: translate(300px, 0px);
  opacity: 0.5;
}

const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  if (rect.classList.contains('state-show') === true) {
    rect.classList.remove('state-show');
  } else {
    rect.classList.add('state-show');
  };
});
```

#### Web Animation API で実現するサンプル

```
const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  rect.animate(
    {
      transform: [
        'translateX(0px)',
        'translateX(300px)'
      ],
      opacity:[
        1.0, // 開始値
        0.5 // 終了値
      ]
    },
    {
      duration: 3000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
});
```

- 要素の明度、彩度を変える(brightness(), grayscale())

```
// 共通の指定
.rect {
  display: block;
  position: absolute;
  top: 50px;
}
.centering {
  position: relative;
}
.ui {
  position: absolute;
  bottom: 50px;
}
```

#### CSS Transition で実現するサンプル

```
.rect {
  display: block;
  position: absolute;
  top: 50px;
  /* filter: brightness(100%); */
  filter: grayscale(0%);
  transition: all 3s;
}

.rect.state-show {
  /* filter: brightness(300%); */
  filter: grayscale(100%);
}

const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  if (rect.classList.contains('state-show') === true) {
    rect.classList.remove('state-show');
  } else {
    rect.classList.add('state-show');
  };
});
```

#### Web Animation API で実現するサンプル

```
const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  rect.animate(
    {
      // filter: [
      //   'brightness(100%)',
      //   'brightness(300%)'
      // ],
      filter:[
        'grayscale(0%)',
        'grayscale(100%)'
      ]
    },
    {
      duration: 3000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
});
```

### requestAnimationFrame() メソッド
時間経過で呼び出したい関数を登録する。<br>
一般的なディスプレイは1秒間に60回描画するが、このメソッドを使うと最も滑らかに見せられる。<br>
一度しか呼び出すことができないので、関数の中で自身の関数を呼び出すよう、予約する。

#### requestAnimationFrame() メソッドのサンプル

```
HTML
<div class="stoker">
  👻
</div>

CSS
.stoker {
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
  font-size: 5rem;
}
/* will-change */
/* https://developer.mozilla.org/ja/docs/Web/CSS/will-change */

JavaScript
const stoker = document.querySelector('.stoker');

// マウスの座標
let mouseX = 0;
let mouseY = 0;

// ストーカーの座標
let currentX = 0;
let currentY = 0;

document.body.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  // console.log(mouseX);
  // console.log(mouseY);
});

tick();
function tick() {
  // アニメーションフレームを指定
  requestAnimationFrame(tick);

 // マウス座標を遅延してストーカー座標へ反映
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  // console.log(currentX);
  // console.log(currentY);

  stoker.style.transform = `translate(${currentX}px, ${currentY}px)`;
};
```

## Chapter11

### 画像データ

- 画像をスクリプトで読み込む

```
const imgA = document.querySelector('#myImageA');
imgA.src = 'photo_a.jpg';
const imgB = document.querySelector('#myImageB');
imgB.src = 'photo_b.jpg';
```

- 画像の読み込み後に処理を実行<br>
src属性は空文字であっても通信が発生するため、HTMLのsrc属性にはじめは値を設定しない。

```
const img = document.querySelector('#myImage');
img.onload = () => {
  img.classList.remove('loading');
};
img.src = 'photo.jpg';
img.classList.add('loading');
```

- 画像の遅延ロード<br>
src属性は空文字であっても通信が発生するため、同時のdata-src属性を用意。<br>
Mapの保存し必要になったタイミングで戻す。<br>
<br>
Mapオブジェクト:
キーと値を組み合わせ、複数のデータをまとめて取り扱う。(Chapter19 section 277)

```
<main class="centering">
  <p>
    <img data-src="images/photo_a.jpg" width="320" height="214"/>
    <img data-src="images/photo_b.jpg" width="320" height="214"/>
  </p>
  <button class="btn">読み込む</button>
</main>

// Mapオブジェクト => キーと値を組み合わせ、複数のデータをまとめて取り扱う
const srcMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img');

  imgs.forEach((img) => {
    // Mapオブジェクトにimg要素のdata-src属性を保存
    srcMap.set(img, img.dataset.src);
    // src属性は空にしておく
    img.removeAttribute('src');
  });
}, false);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('img');
  console.log(srcMap);
  // => Map(2) {img => "images/photo_a.jpg", img => "images/photo_b.jpg"}

  // Mapオブジェクトに保存していたsrc属性を割り当てる
  imgs.forEach((img) => {
    const source = srcMap.get(img);
    img.src = source;
  });
}, false);
```

#### Base64
Base64は文字列として画像を管理する。画面に表示するには、src属性にBase64文字列を代入する。<br>
JPGEファイルやPNGファイルはバイナリファイルなので、<strong>テキストエディターでは開けない</strong>。

```
const img = document.querySelector('#myImage');
img.src = 'data:image/jpeg;base64, ...';
```

#### Imageオブジェクト(new Image())
img要素のインスタンスを作成する。document.createElement('img') と記述した時と同じ結果を得る。

```
<div class="container"></div>

const container = document.querySelector('.container');
for (let i = 0; i < 10; i++) {
  const img = new Image();
  img.src = `./images/photo-${i}.jpg`;
  container.appendChild(img);
};
```

### 音声データ

|プロパティ|振る舞い|データ型|
|-----|-----|-----|
|src|リソースを指定|文字列|
|controls|コントロールバーを表示|-|
|loop|ループを指定|-|
|preload|プリロードの種類を指定|文字列|

```
<main class="centering">
  <div>
    <h2>プロパティなし</h2>
    <audio src="./music.mp3"></audio>
    <h2>コントロールあり</h2>
    <audio src="./music.mp3" controls></audio>
    <h2>ループあり</h2>
    <audio src="./music.mp3" controls loop></audio>
    <h2>プリロードなし</h2>
    <!-- auto => 自動 -->
    <!-- meta =>メタデータのみ読み込み -->
    <!-- none => 自動読み込みしない -->
    <audio src="./music.mp3" controls preload="none"></audio>
  </div>
</main>
```

- 音声をスクリプトで制御

|メソッド|振る舞い|戻り値|
|-----|-----|-----|
|play()|再生|Promise|
|pause()|一時停止|なし|

```
<main class="centering">
  <div>
    <audio id="myAudio" src="./music.mp3" controls></audio>
  </div>
  <div>
    <button id="btnPlay">再生</button>
    <button id="btnPause">停止</button>
  </div>
</main>

// loadedmetadata => メタデータが読み込まれたときに発生する。
// https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/loadedmetadata_event
const audio = document.querySelector('#myAudio');
audio.addEventListener('loadedmetadata', () => {
  console.log(audio.duration);
  // => 60.048
}, false);

// スクリプトで制御
document.querySelector('#btnPlay').addEventListener('click', () => {
  audio.play();
});
document.querySelector('#btnPause').addEventListener('click', () => {
  audio.pause();
});
```

- 音声の再生位置を変更

|プロパティ|振る舞い|データ型|
|-----|-----|-----|
|currentTime|再生ヘッドの値|数値|
|duration|音声の長さ|数値|

```
const audio = document.querySelector('#myAudio');
// 再生ヘッドの値を設定
audio.currentTime = 1.0;

audio.addEventListener('loadedmetadata', () => {
  // 音声の長さを取得
  console.log(audio.duration);
  // => 60.048
}, false);
```

- 音声のボリュームを変更

|プロパティ|振る舞い|データ型|
|-----|-----|-----|
|volume|ボリュームの値|数値|
|muted|ミュートの状態|真偽値|

```
const audio = document.querySelector('#myAudio');
// 音声のボリュームを変更
audio.volume = 1.0;
// ミュートの状態を変更
audio.muted = true;
```

#### Web Audio API
<a href="https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API" target="_blank" rel="noopener">MDN web docs</a>

```
HTML
<main class="centering">
  <button onclick="loadAndPlay()">再生する</button>
  <button onclick="stop()">停止する</button>
</main>

JavaScript
// => CROSの設定をしないとfetchでエラー
loadAndPlay();

let source;

// 再生させる
async function loadAndPlay() {
  // インスタンスを作成
  const context = new AudioContext();

  // サウンドファイルを読み込む
  const data = await fetch('./music.mp3');
  // ArrayBuffer として扱う
  const buffer = await data.arrayBuffer();
  // オーディオデータに変換する
  const decodedBuffer = await context.decodeAudioData(buffer);

  // ソースを作成
  source = contex.createBufferSource();
  // ソースにオーディオデータを割り当てる
  source.buffer = decodedBuffer;
  // スピーカーをつなげる
  source.context(context.destination);
  // 再生を開始
  source.start(0);
};

// 停止させる
function stop() {
  source.stop();
};

```

### 動画データ

|プロパティ|振る舞い|データ型|
|-----|-----|-----|
|src|リソースを指定|文字列|
|controls|コントロールバーを表示|-|
|autoplay|自動再生|-|
|loop|ループを指定|-|
|preload|プリロードの種類を指定|文字列|
|playsinline|インライン再生を指定|-|

```
<video src="動画ファイルのURL" width="" height=""></video>

<video src="./sample.mp4" width="320" height="240" controls></video>
```

```
<main class="centering">
  <div>
    <h2>プロパティなし</h2>
    <video src="./sample.mp4" width="320" height="240"></video>
    <h2>コントロールあり</h2>
    <video src="./sample.mp4" width="320" height="240" controls></video>
    <h2>自動再生あり</h2>
    <!-- autoplay を有効にするには muted を追記する -->
    <video src="./sample.mp4" width="320" height="240" autoplay muted></video>
    <h2>ループあり</h2>
    <video src="./sample.mp4" width="320" height="240" autoplay loop playsinline muted></video>
    <h2>プリロードなし</h2>
    <!-- auto => 自動 -->
    <!-- meta => メタデータのみ読み込み -->
    <!-- none => 自動読み込みしない -->
    <video src="./sample.mp4" preload="none"></video>
  </div>
</main>
```

- <strong>poster属性</strong><br>
サムネイル画像を表示する。

```
<main class="centering">
  <div>
    <h2>サムネイルあり</h2>
    <video src="./sample.mp4" width="320" height="240" poster="./images/photo.jpg" controls></video>
  </div>
</main>
```

- 動画をスクリプトで制御

|プロパティ|振る舞い|戻り値|
|-----|-----|-----|
|play()|再生|Promise|
|pause()|一時停止|なし|

```
<main class="centering">
  <div>
    <video id="myVideo" width="480" height="320" src="./sample.mp4"></video>
  </div>
  <div>
    <button id="btnPlay">再生</button>
    <button id="btnPause">停止</button>
  </div>
</main>

const video = document.querySelector('#myVideo');
// 再生
const btnPlay = document.querySelector('#btnPlay');
btnPlay.addEventListener('click', () => {
  video.play();
}, false);
// 一時停止
const btnPause = document.querySelector('#btnPause');
btnPause.addEventListener('click', () => {
  video.pause();
}, false);
```
