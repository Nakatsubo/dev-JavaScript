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





```
```
