// new Array()を用いて配列を初期化する
// new Array()
const a1 = new Array('apple', 'banana');
console.log(a1[0]);
// => apple
// 配列の要素数を指定する
const a2 = new Array(10);
a2[0] = 'apple';
console.log(a2[0]);
// => apple

// 配列の各要素に処理を行う
// forEach
const a3 = ['apple', 'banana', 'starwberry'];
a3.forEach((value, index) => {
  console.log(index, value);
});
// =>
// 0 "apple"
// 1 "banana"
// 2 "starwberry"
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

// APIデータなどから配列を出力するサンプル
// const userList = [
//   {id: 1, name: 'apple', address: 'shibuya'},
//   {id: 2, name: 'banana', address: 'shinjyuku'},
//   {id: 3, name: 'starwberry', address: 'ikebukuro'}
// ];
// const container = document.querySelector('.container');
// userList.forEach((userData) => {
//   // console.log(userData);
//   container.innerHTML += `
//     <div class="card">
//       <h2>${userData.name}</h2>
//       <p>出身地:${userData.address}</p>
//     </div>
//   `;
// });

// 配列の先頭/末尾に要素を追加する
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

// 配列の先頭/末尾に要素を削除する
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

// 配列の要素を指定位置から取り出しつつ、追加する
// splice
const a10 = ['apple', 'banana', 'starwberry'];
// インデックス番号1の位置から、1つ要素を取り出し、要素'orange'を追加する
a10.splice(1, 1, 'orange');
console.log(a10);
// => ["apple", "orange", "starwberry"]

// 配列を連結する
// concat
const a11 = ['apple', 'banana'];
const a12 = ['starwberry', 'orange'];
const a13 = a11.concat(a12);
console.log(a13);
// => ["apple", "banana", "starwberry", "orange"]

// スプレッド演算子(...)
const a14 = ['apple', 'banana'];
const a15 = ['starwberry', 'orange'];
const a16 = [...a14, ...a15];
console.log(a16);
// => ["apple", "banana", "starwberry", "orange"]

// 配列の要素を結合して文字列にする
const a17 = [2, 4, 10];
console.log(a17.join());
// オプションの文字列を省略した場合、,(コンマ)で結合される
// => 2,4,10
const a18 = ['a', 'b', 'c'];
console.log(a18.join(''));
// => abc

// 配列の検索をする
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

// 配列から特定の条件の要素を取り出す
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

// ユーザー情報の配列から検索ユーザーの情報を表示するサンプル
// const userDataList = [
//   {id: 1, name: 'nakatsubo'},
//   {id: 2, name: 'sakita'},
//   {id: 3, name: 'kouda'}
// ]
// const searchIdInput = document.querySelector('#search-id-input');
// const searchResult = document.querySelector('.search-result');
// searchIdInput.addEventListener('keyup', (event) => {
//   const searchId = Number(event.target.value);
//   findUser(searchId);
// }, false);
// function findUser(searchId) {
//   const targetData = userDataList.find((element) => element.id === searchId);
//   // console.log(targetData === null);
//   // => Error
//   if (targetData == null) {
//     searchResult.textContent = '該当者なし';
//     return;
//   }
//   searchResult.textContent = targetData.name;
// }

// 配列の並び順を逆にする
// reverse
const a22 = [1, 3, 5];
console.log(a22.reverse());
// => [5, 3, 1]

// 配列をソートする
// sort(callback)
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

// オブジェクトを含む配列をソートするサンプル
// const userDataList = [
//   {id: 2, name: 'nakatsubo'},
//   {id: 10, name: 'sakita'},
//   {id: 4, name: 'kouda'},
//   {id: 29, name: 'yuki'},
//   {id: 101, name: 'yamazaki'}
// ]
// // 並び替え処理
// function updateList() {
//   let listHTML = '';
//   for(const value of userDataList) {
//     listHTML += `<li>${value.id}：${value.name}</li>`;
//   };
//   document.querySelector('.user-list').innerHTML = listHTML;
// };
// // 昇順
// document.querySelector('.ascending').addEventListener('click', () => {
//   sortByAscending();
// }, false);
// function sortByAscending() {
//   userDataList.sort((a, b) => {
//     return a.id - b.id;
//   });
//   updateList();
// };
// // 降順
// document.querySelector('.descending').addEventListener('click', () => {
//   sortByDescending();
// }, false);
// sortByAscending();
// function sortByDescending() {
//   userDataList.sort((a, b) => {
//     return b.id - a.id;
//   });
//   updateList();
// }

// 文字列の順番で配列をソートする
// a.localCompare(b)
const a25 = ['starwberry', 'banana', 'apple'];
a25.sort((a, b) => a.localeCompare(b));
console.log(a25);
// => ["apple", "banana", "starwberry"]

// ある配列を元に別の配列をつくる
// map(callback)
const idList = [4, 10, 20];
const userIdList1 = idList.map((value) => `userid_${value}`);
console.log(userIdList1);
// => ["userid_4", "userid_10", "userid_20"]
const userIdList2 = idList.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList2);
// => ["userid_1_4", "userid_2_10", "userid_3_20"]

// オブジェクトの配列から別の配列をつくるサンプル
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

// ある配列を元に条件を満たす別の配列をつくる
// filter(callback)
const a26 = [1, 2, 3, 4].filter((value) => value >= 3);
console.log(a26);
// => [3, 4]

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

// 各要素から単一の値をつくる
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

