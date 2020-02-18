// // setTimeout(関数, ミリ秒) => 一定時間後に処理を行う
// console.log('起動時の時刻', new Date().toLocaleTimeString());
// setTimeout(() => {
//   console.log('setTimeout後の時刻', new Date().toLocaleString());
// }, 1000);
// // => 実行結果
// // 起動時の時刻 15:15:37
// // setTimeout後の時刻 2020/2/18 15:15:38

// clearTimeout(関数, ミリ秒) => setTimeout()メソッドで呼び出した処理をキャンセルする
const TimerId = setTimeout(Timer, 1000);
function Timer() {
  console.log('setTimeout後の時刻', new Date().toLocaleString());
};
clearTimeout(TimerId);
// => 処理はキャンセルされる
