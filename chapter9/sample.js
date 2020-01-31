// const element = document.querySelector('#myText');
// element.addEventListener('input', handleChange, false);
// function handleChange(event) {
//   const log = document.querySelector('.log');
//   log.innerHTML = event.target.value;
// };
// element.addEventListener('change', handleChange, false);
// function handleChange(event) {
//   const log = document.querySelector('.log');
//   log.innerHTML = event.target.value;
// };

// // チェックボックスの情報を取得
// // 未チェック
// const checkBoxA = document.querySelector('#checkBoxA');
// console.log(checkBoxA.checked);
// // => false
// // チェック済
// const checkBoxB = document.querySelector('#checkBoxB');
// console.log(checkBoxB.checked);
// // => true

// // チェックされた状態に変化
// checkBoxA.checked = true;
// console.log(checkBoxA.checked);
// // => true

// チェックボックスの変更を検知
const checkBoxA = document.querySelector('#checkBoxA');
checkBoxA.addEventListener('change', handler, false);
function handler(event) {
  const log = document.querySelector('.log');
  log.innerHTML = `チェックボックスは ${event.target.checked} になりました`;
};
// => チェックボックスは true になりました
