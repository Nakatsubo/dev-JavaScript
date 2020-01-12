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
const userList = [
  {id: 1, name: 'apple', address: 'shibuya'},
  {id: 2, name: 'banana', address: 'shinjyuku'},
  {id: 1, name: 'starwberry', address: 'ikebukuro'}
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
