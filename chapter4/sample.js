// 配列を参照
// const arr = [1, 2, 3];
// console.log(arr);

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

// イミュータブル(immutale, 不変) と ミュータブル(mutable, 可変)
// イミュータブル(immutale, 不変)
// let myNumber = 10;
// console.log(myNumber);
// // 10が20へ変化したわけではないので、変数は別のデータと考える。
// myNumber = 20;
// console.log(myNumber);
// // ミュータブル(mutable, 可変)
// const myArray = [1, 2, 3];
// console.log(myArray);
// // 配列のデータの0番目が変化したので、配列は同じデータと考える。
// myArray[0] = 100;
// console.log(myArray);

// データ型を調べる
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

// 値がオブジェクトのインスタンスかどうか調べる
// value instanceof object
const today = new Date();
console.log(today instanceof Date);
console.log(today instanceof Array);
// => true
// => false

// instanceof を使ったサンプル
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

// データ型の変換
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

// 暗黙の型変換
console.log(100 + '200');
// => 100200 => 文字列型に変換
console.log('200' - 100);
// => 100 => 数値型に変換
console.log(1 == '1');
// => true

// 値が未定義の場合
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

// データの値がない場合
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
