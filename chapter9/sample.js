const element = document.querySelector('#myText');
element.addEventListener('input', handleChange, false);
function handleChange(event) {
  const log = document.querySelector('.log');
  log.innerHTML = event.target.value;
};
element.addEventListener('change', handleChange, false);
function handleChange(event) {
  const log = document.querySelector('.log');
  log.innerHTML = event.target.value;
};

// チェックボックスの情報を取得
// 未チェック
const checkBoxA = document.querySelector('#checkBoxA');
console.log(checkBoxA.checked);
// => false
// チェック済
const checkBoxB = document.querySelector('#checkBoxB');
console.log(checkBoxB.checked);
// => true

// チェックされた状態に変化
checkBoxA.checked = true;
console.log(checkBoxA.checked);
// => true

// チェックボックスの変更を検知
const checkBoxA = document.querySelector('#checkBoxA');
checkBoxA.addEventListener('change', handler, false);
function handler(event) {
  const log = document.querySelector('.log');
  log.innerHTML = `チェックボックスは ${event.target.checked} になりました`;
};
// => チェックボックスは true になりました

// ローカルファイルの情報を取得
const element = document.querySelector('#myFile');
element.addEventListener('change', (event) => {
  const files = event.target.files;
  // 配列となっているので、インデックス0番のファイルを参照
  const file = files[0];
  alert(`${file.name}が選択されました`);
});

// ローカルファイルをテキスト情報として取得
// readAsText()メソッド
const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');
element.addEventListener('input', (event) => {
  const files = event.target.files;
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();
  // loadイベントを監視
  reader.addEventListener('load', () => {
    // loadイベント完了後に、resultプロパティでデータへアクセス
    pEl.innerHTML = reader.result;
  });

  // テキストファイルを読み込む
  reader.readAsText(file);
});

// ローカルファイルをDataURLとして取得
// readAsDataURL()メソッド
const element = document.querySelector('#myFile');
const imgEl = document.querySelector('.log img');
element.addEventListener('input', (event) => {
  const files = event.target.files;
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();
  // loadイベントを監視
  reader.addEventListener('load', () => {
    // loadイベント完了後に、resultプロパティでデータへアクセス
    imgEl.src = reader.result;
  });

  // テキストファイルを読み込む
  reader.readAsDataURL(file);
});

const element = document.querySelector('form#radioGroup');
// name属性で指定した値を取得
const drinkValue = element.drink.value;
const fruitValue = element.fruit.value;
console.log(`drinkの値は ${drinkValue} です`);
// => drinkの値は coke です
console.log(`fruitの値は ${fruitValue} です`);
// => fruitの値は apple です

// ラジオボタンの変更を検知
const element = document.querySelector('form#radioGroup');
element.addEventListener('change', handleChange, false);
function handleChange() {
  // event.targetはname属性で指定
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;
  console.log(`drinkの値は ${drinkValue} です`);
  // => drinkの値は coke です
  console.log(`fruitの値は ${fruitValue} です`);
  // => fruitの値は apple です
};

// ドロップダウンメニューの情報を取得
const element = document.querySelector('#mySelect');
const value = element.value;
const log = `選択されているのは ${value} です`;
document.querySelector('.log').innerHTML = log;
// => 選択されているのは apple です

// ドロップダウンメニューの変更を検知
const element = document.querySelector('#mySelect');
element.addEventListener('change', handleChange, false);
function handleChange() {
  const value = element.value;
  const log = `選択されているのは ${value} です`;
  document.querySelector('.log').innerHTML = log;
};
// => 選択されているのは apple です

// スライダーの情報を取得
const element = document.querySelector('#myRange');
const value = element.value;
document.querySelector('.log').innerHTML = `現在の値は ${value} です`;

// スライダーの変更を検知
const element = document.querySelector('#myRange');
// input だとスライダーを動かす度に取得
// element.addEventListener('input', handleChange, false);

// change だとスライダーを動かした後に取得
element.addEventListener('change', handleChange, false);

function handleChange() {
  const value = element.value;
  document.querySelector('.log').innerHTML = `現在の値は ${value} です`;
};

// カラーピッカーの情報を取得
const element = document.querySelector('#myColor');
let value = element.value;
console.log(value);
// => #ff0000

// カラーピッカーの変更を検知
const element = document.querySelector('#myColor');
element.addEventListener('change', (event) => {
  const value = event.target.value;
  const log = `選択された色が ${value} になりました`;
  const logEl = document.querySelector('.log');
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});

// プルダウンリストのサンプル
// JISコードに対応した都道府県の連想配列
const PREF_LIST = [
  { value: 1, name: '北海道' },
  { value: 2, name: '青森県' },
  { value: 3, name: '岩手県' },
  { value: 4, name: '宮城県' },
  { value: 5, name: '秋田県' },
  { value: 6, name: '山形県' },
  { value: 7, name: '福島県' },
  { value: 8, name: '茨城県' },
  { value: 9, name: '栃木県' },
  { value: 10, name: '群馬県' },
  { value: 11, name: '埼玉県' },
  { value: 12, name: '千葉県' },
  { value: 13, name: '東京都' },
  { value: 14, name: '神奈川県' },
  { value: 15, name: '新潟県' },
  { value: 16, name: '富山県' },
  { value: 17, name: '石川県' },
  { value: 18, name: '福井県' },
  { value: 19, name: '山梨県' },
  { value: 20, name: '長野県' },
  { value: 21, name: '岐阜県' },
  { value: 22, name: '静岡県' },
  { value: 23, name: '愛知県' },
  { value: 24, name: '三重県' },
  { value: 25, name: '滋賀県' },
  { value: 26, name: '京都府' },
  { value: 27, name: '大阪府' },
  { value: 28, name: '兵庫県' },
  { value: 29, name: '奈良県' },
  { value: 30, name: '和歌山県' },
  { value: 31, name: '鳥取県' },
  { value: 32, name: '島根県' },
  { value: 33, name: '岡山県' },
  { value: 34, name: '広島県' },
  { value: 35, name: '山口県' },
  { value: 36, name: '徳島県' },
  { value: 37, name: '香川県' },
  { value: 38, name: '愛媛県' },
  { value: 39, name: '高知県' },
  { value: 40, name: '福岡県' },
  { value: 41, name: '佐賀県' },
  { value: 42, name: '長崎県' },
  { value: 43, name: '熊本県' },
  { value: 44, name: '大分県' },
  { value: 45, name: '宮崎県' },
  { value: 46, name: '鹿児島県' },
  { value: 47, name: '沖縄県' }
];

const selectElement = document.querySelector('#pref');
// option要素の初期値
let optionString = '<option value="">選択してください</option>';
PREF_LIST.forEach((item) => {
  optionString += `<option value="${item.value}">${item.name}</option>`
});

//option要素をselect要素に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener('change', (e) => {
  console.log(e);
  const value = e.target.value;
  const message = value === '' ? '選択されていません' : `選択されているのは${value}です`;

  // 選択した要素を表示
  document.querySelector('.message').innerHTML = message;
}, false);

// フォーム送信時の処理
const formElement = document.querySelector('form');

// 送信イベントを監視
formElement.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  // comfirm でユーザーに確認
  const isYes = confirm('この内容で送信していいですか？');

  // いいえを選択した場合
  if (isYes === false) {
    e.preventDefault();
  };
};
