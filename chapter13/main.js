// // setTimeout(関数, ミリ秒) => 一定時間後に処理を行う
// console.log('起動時の時刻', new Date().toLocaleTimeString());
// setTimeout(() => {
//   console.log('setTimeout後の時刻', new Date().toLocaleString());
// }, 1000);
// // => 実行結果
// // 起動時の時刻 15:15:37
// // setTimeout後の時刻 2020/2/18 15:15:38

// // clearTimeout(関数, ミリ秒) => setTimeout()メソッドで呼び出した処理をキャンセルする
// const TimerId = setTimeout(Timer, 1000);
// function Timer() {
//   console.log('setTimeout後の時刻', new Date().toLocaleString());
// };
// clearTimeout(TimerId);
// // => 処理はキャンセルされる

// // setInterval(関数, ミリ秒) => 一定時間ごとに処理を実行
// console.log('起動時の時刻', new Date().toLocaleTimeString());
// setInterval(() => {
//   console.log('setTimeout後の時刻', new Date().toLocaleTimeString());
// }, 1000);
// // => 実行結果
// // => 起動時の時刻 15:29:28
// // => setTimeout後の時刻 15:29:29
// // => setTimeout後の時刻 15:29:30
// // => setTimeout後の時刻 15:29:31
// // ...

// // clearInterval(関数, ミリ秒) => setinterval()メソッドで呼び出した処理をキャンセルする
// const IntervalId = setInterval(Timer, 1000);
// let count = 0;
// function Timer() {
//   count += 1;
//   console.log(count, new Date().toLocaleString());
//   if (count === 3) {
//     clearInterval(IntervalId);
//   };
// };
// // => 実行結果
// // => 1 "2020/2/18 15:36:58"
// // => 2 "2020/2/18 15:36:59"
// // => 3 "2020/2/18 15:37:00"

// // 非同期処理 Promise
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });
// promise.then(() => {
//   console.log('次の処理');
// });
// // => 実行結果
// // => 次の処理

// // resolve()メソッドには任意の引数を引き渡せる。その引数をthen()メソッド内で使える。
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('orange');
//   }, 1000);
// });
// promise.then((value) => {
//   console.log(value);
// });
// // => 実行結果
// // => orange

// // Promiseインスタンス.catch(コールバック関数) => Promiseでの失敗時の処理
// let flag = true;
// const promise = new Promise((resolve, reject) => {
//   if (flag === true) {
//     resolve('orange');
//   } else {
//     reject('apple');
//   };
// });
// promise.then((value) => {
//   console.log(value);
// });
// promise.catch((value) => {
//   console.log(value);
// });
// // => orange

// // Promiseで並列処理
// const arrFunc = [];
// for (let i = 0; i < 5; i++ ) {
//   // Promise実行時の関数を定義
//   const func = (resolve) => {
//     console.log(`処理${i}を開始`, new Date().toLocaleString());

//     // 遅延処理の時間をランダムに指定
//     const delayMsec = 2000 * Math.random();

//     // 遅延処理
//     setTimeout(() => {
//       console.log(`処理${i}が完了`, new Date().toLocaleString());
//       resolve();
//     }, delayMsec);
//   };

//   // 配列に関数を入れる
//   arrFunc.push(func);
// };

// console.log(arrFunc);
// // => 実行結果
// // => (5) [ƒ, ƒ, ƒ, ƒ, ƒ]
// // => 0: (resolve) => {…}
// // => 1: (resolve) => {…}
// // => 2: (resolve) => {…}
// // => 3: (resolve) => {…}
// // => 4: (resolve) => {…}
// // => length: 5
// // => __proto__: Array(0)

// // Promiseインスタンスを含む配列を作成する
// const arrPromise = arrFunc.map((func) => new Promise(func));
// console.log(arrPromise);
// // => 実行結果
// // => (5) [Promise, Promise, Promise, Promise, Promise]
// // => 0: Promise {<resolved>: undefined}
// // => 1: Promise {<resolved>: undefined}
// // => 2: Promise {<resolved>: undefined}
// // => 3: Promise {<resolved>: undefined}
// // => 4: Promise {<resolved>: undefined}
// // => length: 5
// // => __proto__: Array(0)

// // 並列処理を実行
// Promise.all(arrPromise).then(() => {
//   console.log('すべての処理が完了しました');
// });

// // Promiseで直列処理

// // Promiseのみで実装する方法
// Promise.resolve()
//   .then(() =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('ひとつめのPromise', new Date().toLocaleTimeString());
//         resolve();
//       }, 1000);
//     })
//   )
//   .then(() =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('ふたつめのPromise', new Date().toLocaleTimeString());
//         resolve();
//       }, 1000);
//     })
//   )
// // => 実行結果
// // => ひとつめのPromise 16:40:21
// // => ふたつめのPromise 16:40:22

// // async, awaitを使った記述方法
// start();

// async function start() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('ひとつめのPromise', new Date().toLocaleTimeString());
//       resolve();
//     }, 1000);
//   })

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('ふたつめのPromise', new Date().toLocaleTimeString());
//       resolve();
//     }, 1000);
//   })
// }

// Promiseで動的に直列処理
const listFunctions = [];
for (let i = 0; i < 5; i++) {
  // 1秒後に処理する非同期関数
  const func = (resolve) => {
    setTimeout(() => {
      console.log(`関数${i}が完了しました`, new Date().toLocaleTimeString());
      // Promiseを完了
      resolve();
    }, 1000);
  };
  listFunctions.push(func);
};

console.log(listFunctions);
// (5) [ƒ, ƒ, ƒ, ƒ, ƒ]

execute();

async function execute() {
  for (let i = 0; i < listFunctions.length; i++) {
    const func = listFunctions[i];
    await new Promise(func);
  };
};
