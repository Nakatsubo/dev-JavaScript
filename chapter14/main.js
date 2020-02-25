// // JSONをパースする
// const jsonString = `{ "students": 40, "grade": 4, "name": "C組" }`;
// // 文字列をJSONオブジェクトに変換
// const data = JSON.parse(jsonString);
// console.log(data);
// // => Object
// console.log(data.students);
// // => 40
// console.log(data.grade);
// // => 4
// console.log(data.name);
// // => C組

// // オブジェクトをJSONに変換する
// const data = { a: 1000, b: 'Hello, World!' }
// // オブジェクトをJSONに変換する
// const str = JSON.stringify(data);
// console.log(str);
// // => {"a":1000,"b":"Hello, World!"}

// // オブジェクトにインデントをつけてJSONに変換する
// const data = { a: 1000, b: 'Hello, World!' }
// // オブジェクトをJSONに変換する
// const str = JSON.stringify(data, null, ' ');
// console.log(str);
// // => 出力結果
// // {
// //   "a": 1000,
// //   "b": "Hello, World!"
// //  }

// // オブジェクトの一部をJSONに変換する
// const replacer = (key, value) => {
//   if (typeof value === 'number') {
//     return undefined;
//   };
//   return value;
// };
// const obj = {
//   pref: 'Tokyo',
//   orange: 100,
//   flag: true,
//   apple: 100
// };
// const str = JSON.stringify(obj, replacer, ' ')
// console.log(str);
// // => 出力結果
// // {
// //   "pref": "Tokyo",
// //   "flag": true
// //  }

// // fetch()メソッド
// fetch('sample.txt')
//   .then((data) => data.text())
//   .then((text) => {
//     console.log(text);
//   })

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  async function load() {
    const data = await fetch('sample.txt');
    const text = await data.text();
    console.log(text);
    // テキストを出力
    document.querySelector('#log').innerHTML = text;
  }
  load();
});