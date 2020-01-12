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
