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

// // チェックボックスの変更を検知
// const checkBoxA = document.querySelector('#checkBoxA');
// checkBoxA.addEventListener('change', handler, false);
// function handler(event) {
//   const log = document.querySelector('.log');
//   log.innerHTML = `チェックボックスは ${event.target.checked} になりました`;
// };
// // => チェックボックスは true になりました

// // ローカルファイルの情報を取得
// const element = document.querySelector('#myFile');
// element.addEventListener('change', (event) => {
//   const files = event.target.files;
//   // 配列となっているので、インデックス0番のファイルを参照
//   const file = files[0];
//   alert(`${file.name}が選択されました`);
// });

// // ローカルファイルをテキスト情報として取得
// // readAsText()メソッド
// const element = document.querySelector('#myFile');
// const pEl = document.querySelector('.log');
// element.addEventListener('input', (event) => {
//   const files = event.target.files;
//   const file = files[0];

//   // FileReaderのインスタンスを作成
//   const reader = new FileReader();
//   // loadイベントを監視
//   reader.addEventListener('load', () => {
//     // loadイベント完了後に、resultプロパティでデータへアクセス
//     pEl.innerHTML = reader.result;
//   });

//   // テキストファイルを読み込む
//   reader.readAsText(file);
// });

// // ローカルファイルをDataURLとして取得
// // readAsDataURL()メソッド
// const element = document.querySelector('#myFile');
// const imgEl = document.querySelector('.log img');
// element.addEventListener('input', (event) => {
//   const files = event.target.files;
//   const file = files[0];

//   // FileReaderのインスタンスを作成
//   const reader = new FileReader();
//   // loadイベントを監視
//   reader.addEventListener('load', () => {
//     // loadイベント完了後に、resultプロパティでデータへアクセス
//     imgEl.src = reader.result;
//   });

//   // テキストファイルを読み込む
//   reader.readAsDataURL(file);
// });

// const element = document.querySelector('form#radioGroup');
// // name属性で指定した値を取得
// const drinkValue = element.drink.value;
// const fruitValue = element.fruit.value;
// console.log(`drinkの値は ${drinkValue} です`);
// // => drinkの値は coke です
// console.log(`fruitの値は ${fruitValue} です`);
// // => fruitの値は apple です

// // ラジオボタンの変更を検知
// const element = document.querySelector('form#radioGroup');
// element.addEventListener('change', handleChange, false);
// function handleChange() {
//   // event.targetはname属性で指定
//   const drinkValue = element.drink.value;
//   const fruitValue = element.fruit.value;
//   console.log(`drinkの値は ${drinkValue} です`);
//   // => drinkの値は coke です
//   console.log(`fruitの値は ${fruitValue} です`);
//   // => fruitの値は apple です
// };

// // ドロップダウンメニューの情報を取得
// const element = document.querySelector('#mySelect');
// const value = element.value;
// const log = `選択されているのは ${value} です`;
// document.querySelector('.log').innerHTML = log;
// // => 選択されているのは apple です

// // ドロップダウンメニューの変更を検知
// const element = document.querySelector('#mySelect');
// element.addEventListener('change', handleChange, false);
// function handleChange() {
//   const value = element.value;
//   const log = `選択されているのは ${value} です`;
//   document.querySelector('.log').innerHTML = log;
// };
// // => 選択されているのは apple です

// スライダーの情報を取得
const element = document.querySelector('#myRange');
const value = element.value;
document.querySelector('.log').innerHTML = `現在の値は ${value} です`;
