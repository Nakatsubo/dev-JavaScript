// // console.log('Hello, World');

// // 論理否定演算子
// const flg = 'JavaScript'.includes('a');
// console.log(!flg);
// // => false
// // 値を真偽値に変換
// console.log(!'apple');
// console.log(!10);
// console.log(![1, 2, 3]);
// // => false
// // 値をBoolean型に変換
// console.log(!!'apple');
// console.log(!!10);
// console.log(!![1, 2, 3]);
// // => true

// // 四捨五入、切り上げ、切り捨て
// // round 四捨五入
// console.log(Math.round(6.24));
// // => 6
// console.log(Math.round(-6.24));
// // => -6
// // floor 切り捨て
// console.log(Math.floor(6.24));
// // => 6
// console.log(Math.floor(-6.24));
// // => -7
// // ceil 切り上げ
// console.log(Math.ceil(6.24));
// // => 7
// console.log(Math.ceil(-6.24));
// // => 6
// // trunc 整数を返す
// console.log(Math.trunc(6.24));
// // => 6
// console.log(Math.trunc(-6.24));
// // => -6

// // ランダム数
// console.log(Math.random());
// // => 0 <= x < 1
// console.log(Math.floor(Math.random() * 100));
// // => 0 <= x < 100
// console.log(10 + Math.floor(Math.random() * 10));
// // => 0 <= x < 20

// // ランダム数を使用したサンプル
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

// // crypto.getRandomValues 安全な乱数を設定
// const randomArray = crypto.getRandomValues(new Uint16Array(10));
// console.log(randomArray.join(''));

// // 数学的な計算
// // abs 絶対値
// console.log(Math.abs(-10));
// // => 10
// // pow べき乗
// console.log(Math.pow(2, 10));
// // => 1024
// // sign 数値符号
// console.log(Math.sign(2));
// // => 1
// console.log(Math.sign(-2));
// // => -1
// // sqrt 平方根
// console.log(Math.sqrt(16));
// // => 4
// // log 自然対数
// console.log(Math.log(Math.E));
// // => 1
// // exp 指数関数
// // console.log(Math.exp());

// // 三角関数
// // 円周率
// console.log(Math.PI);
// // サイン
// console.log(Math.sin((90 * Math.PI) / 180));
// // コサイン
// console.log(Math.cos((90 * Math.PI) / 180));
// // タンジェント
// console.log(Math.tan((45 * Math.PI) / 180));
// // アークコサイン
// console.log(Math.acos(1));
// // 座標の例
// console.log(Math.atan2(1, 1) * 180 / Math.PI);

// // 三角関数を使用したサンプル
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

// // 文字列の長さを取得するサンプル
// let textarea = document.querySelector('.textarea');
// let strNum = document.querySelector('.str_num');
// textarea.addEventListener('keyup', onKeyUp, false);
// function onKeyUp() {
//   const inputText = textarea.value;
//   console.log(inputText.length);
//   strNum.innerHTML = inputText.length;
// }

// // trim 文字列の両端の空白を取り除く
// const targetStr1 = "  Hello, World!  "
// const trimmedStr1 = targetStr1.trim();
// console.log(trimmedStr1);
// const targetStr2 = "Hello, World!\n"
// const trimmedStr2 = targetStr2.trim();
// console.log(trimmedStr2);
// // => Hello, World!
// const targetStr3 = "  Hello, World!  Hello, JavaScript!  "
// const trimmedStr3 = targetStr3.trim();
// console.log(trimmedStr3);
// // => Hello, World!  Hello, JavaScript!

// // indexOf lastIndexOf 文字列を検索する 戻り値は数値
// const myStr = "Hello, World!"
// const a1 = myStr.indexOf('Hello');
// console.log(a1);
// // => 0
// const a2 = myStr.indexOf('World');
// console.log(a2);
// // => 7
// const a3 = myStr.lastIndexOf('o');
// console.log(a3);
// // => 8
// const a4 = myStr.lastIndexOf('JavaScript');
// console.log(a4);
// // => -1
// // 正規表現で検索する
// const a5 = myStr.search(/Hello/);
// console.log(a5);
// // => 0
// const a6 = myStr.search(/JavaScript/);
// console.log(a6);
// // => -1

// // includes startsWith endsWith 文字列を検索する 戻り値は真偽値
// // includes
// const myStr = 'Hello, World';
// const a1 = myStr.includes('Hello');
// console.log(a1);
// // => true
// // startsWith
// const a2 = myStr.startsWith('World');
// console.log(a2);
// // => false
// // endsWith
// const a3 = myStr.endsWith('World');
// console.log(a3);
// // => true

// // charAt 指定したインデックス(位置)の文字列を取り出す
// console.log('JavaScript'.charAt(3));
// // => a

// // 文字列を検索するサンプル
// const searchWordText = document.querySelector('#search-word-input');
// const prefectureList = document.querySelectorAll('#prefecture-list button');
// searchWordText.addEventListener('keyup', () => {
//   const searchWord = searchWordText.value;
//   prefectureList.forEach((element) => {
//     //console.log(element);
//     if (!searchWord || searchWord === '') {
//       element.classList.remove('hide');
//       return;
//     }
//     const prefectureName = element.dataset.name;
//     const phonetic = element.dataset.phonetic;
//     if (searchWord.charAt(0) === prefectureName.charAt(0) || searchWord.charAt(0) === phonetic.charAt(0)) {
//       element.classList.remove('hide');
//     } else {
//       element.classList.add('hide');
//     }
//   });
// });

// // 指定範囲の文字列を取得する
// // slice
// console.log('JavaScript'.slice(0, 4));
// // => Java
// console.log('JavaScript'.slice(0));
// // => JavaScript
// // substring
// console.log('JavaScript'.substring(0, 4));
// // => Java
// console.log('JavaScript'.substring(0));
// // => JavaScript
// // slice と substring は開始インデックスが終了インデックスより大きくなった場合、挙動が異なる。
// console.log('JavaScript'.slice(3, 1));
// // => ''
// console.log('JavaScript'.substring(3, 1));
// // => av

// // 文字数を指定して取得する
// // substr
// console.log('JavaScript'.substr(4, 6));
// // => Script

// // 文字列を置換する
// // replace
// const imageName = 'image1.png';
// console.log(imageName.replace('1.png', '2.png'));
// // => image2.png
// const inputText = 'Hello, \nWorld!';
// console.log(inputText.replace('\n', ''));
// // => Hello, World!
// let phoneNumber = '123-4567-8901'
// console.log(phoneNumber.replace('-', ''));
// // => 1234567-8901
// // 正規表現を使い、gオプションで文字列全体をマッチさせる
// phoneNumber = '123-4567-8901'
// console.log(phoneNumber.replace(/-/g, ''));
// // => 12345678901

// // 文字列の置換するサンプル
// const submitBtn = document.getElementById('submitButton');
// submitBtn.addEventListener('click', (event) => {
//   const phoneNumber = document.getElementById('phoneNumberText').value;
//   const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
//   alert(`電話番号は${trimmedPhoneNumber}です`);
//   event.preventDefault();
// }, false);

// // 文字列を分割する
// // split
// const myUrl = 'https://example.com/?id=123456&name=Hello&age=0';
// console.log(myUrl.split('&'));
// // => ["https://example.com/?id=123456", "name=Hello", "age=0"]
// // split(正規表現)
// console.log(myUrl.split(/&|\?/));
// // => ["https://example.com/", "id=123456", "name=Hello", "age=0"]
// console.log('JavaScript'.split(''));
// // =>  ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// // 文字列を分割するサンプル
// const hushes = {};
// const parameters = location.search.split(/&|\?/).filter((value) => {
//   // URLに'='が含まれるvalueのみreturn
//   return value.includes('=');
// })
// console.log(parameters);
// // => ["id=123456", "name=Hello", "age=0"]
// parameters.forEach((parameter) => {
//   const parameterList = parameter.split('=');
//   console.log(parameterList);
//   // => ["id", "123456"] ["name", "Hello"] ["age", "0"]
//   const key = parameterList[0];
//   // decodeURIComponent => URLをデコード(復号化)する
//   const value = decodeURIComponent(parameterList[1]);
//   hushes[key] = value;
// })
// console.log(hushes);
// // => {id: "123456", name: "Hello", age: "0"}
// if (hushes['id'] != null) {
//   document.querySelector('.id').innerHTML = hushes['id'];
// }
// if (hushes['name'] != null) {
//   document.querySelector('.name').innerHTML = hushes['name'];
// }
// if (hushes['age'] != null) {
//   document.querySelector('.age').innerHTML = hushes['age'];
// }

// // 文字列を大文字・小文字に変換する
// // toLowerCase
// console.log('JavaScript'.toLowerCase());
// // => javascript
// // toUpperCase
// console.log('JavaScript'.toUpperCase());
// // => JAVASCRIPT

// // 文字列を大文字・小文字に変換するサンプル
// const nameInput = document.querySelector('.name-input');
// const warningMessage = document.querySelector('.warning-message');
// nameInput.addEventListener('input', () => {
//   const inputStr = nameInput.value;
//   const normalStr = inputStr.toLowerCase();
//   if (normalStr === 'test') {
//     warningMessage.textContent = '「test」が含まれています'
//   } else {
//     warningMessage.textContent = '';
//   }
// }, false);

// // 文字列を動的に扱うサンプル
// const today = new Date();
// const main = document.querySelector('#main');
// main.innerHTML = `
//   <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
//   <p>東京は、晴れでしょう</p>
// `;

// // 正規表現
// // 正規表現で記述した場合
// if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
//   alert('アクセスしているブラウザはiOS端末です');
// }
// // 正規表現で記述しなかった場合
// if (
//   navigator.userAgent.includes('iPhone') ||
//   navigator.userAgent.includes('iPod') ||
//   navigator.userAgent.includes('iPad')
// ) {
//   alert('アクセスしているブラウザはiOS端末です');
// }

// // 正規表現のtestメソッドのサンプル
// const phoneNumberText = document.querySelector('#phoneNumberText');
// const warningMessage = document.querySelector('.warning-message');
// phoneNumberText.addEventListener('keyup', () => {
//   const phoneNumber = phoneNumberText.value;
//   const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
//   if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
//     warningMessage.innerText = '電話番号を正しく入力してください';
//   } else {
//     warningMessage.innerText = '';
//   }
// }, false);

// // 数値の桁数を指定する
// // toFixed 小数点以下を指定桁数に
// console.log((0.333333).toFixed(2));
// // => 0.33
// console.log((123.456).toFixed(1));
// // => 123.5 近似値に丸められる
// console.log((1.2).toFixed(4));
// // => 1.2000 桁数が揃えられる
// // toPrecision 指定桁数の精度に
// console.log((0.333333).toPrecision(2));
// // => 0.33
// console.log((123.456).toPrecision(3));
// // => 123
// console.log((123.456).toPrecision(1));
// // => 1e+2 近似値に丸められる
// console.log((1.2).toPrecision(4));
// // => 1.200 桁数が揃えられる

// // 数値の桁数を指定するサンプル
// const secondElement = document.querySelector('.second');
// const goalTime = new Date().getTime() + 15 * 1000;
// update();
// function update() {
//   const currentTime = new Date().getTime();
//   const leftTime = goalTime - currentTime;
//   secondElement.innerText = (leftTime / 1000).toFixed(2);
//   // requestAnimationFrame 再描画の前に関数を呼び出す
//   requestAnimationFrame(update);
// };

// 文字列を指定の長さになるように繰り返す
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

// 文字列を指定の長さになるように繰り返すサンプル
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
