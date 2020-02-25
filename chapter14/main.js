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

// オブジェクトにインデントをつけてJSONに変換する
const data = { a: 1000, b: 'Hello, World!' }
// オブジェクトをJSONに変換する
const str = JSON.stringify(data, null, ' ');
console.log(str);
// => 出力結果
// {
//   "a": 1000,
//   "b": "Hello, World!"
//  }
