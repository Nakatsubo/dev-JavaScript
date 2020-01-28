// const box = document.querySelector('.box');
// console.log(box.innerHTML);
// // => 1つ目のボックス

// // forEach()
// const eachList = document.querySelectorAll('.box');
// eachList.forEach((targetbox) => {
//   console.log(targetbox);
// });
// // => <div class="box">1つ目のボックス</div>
// // => <div class="box">2つ目のボックス</div>
// // => <div class="box">3つ目のボックス</div>

// // for
// const forList = document.querySelectorAll('.box');
// for(let i = 0; i < forList.length; i++) {
//   console.log(forList[i]);
// };
// // => <div class="box">1つ目のボックス</div>
// // => <div class="box">2つ目のボックス</div>
// // => <div class="box">3つ目のボックス</div>

// document.querySelectorAll('.box').forEach((targetbox) => {
//   targetbox.addEventListener('click', () => {
//     alert(`${targetbox.textContent}がクリックされました`);
//   }, false);
// });
// // => getElementsByClassName()にはforEach文が使えないので注意

// // console.dir() => オブジェクトのプロパティを階層構造で取得する
// // document.documentElement ルート要素を取得
// console.dir(document.documentElement);
// // => html...
// // document.head
// console.dir(document.head);
// // => head...
// console.dir(document.body);
// // => body...

// // head内にscriptタグを動的に挿入
// const scriptElement = document.createElement('script');
// scriptElement.src = 'js/sample-script.js';
// document.head.appendChild(scriptElement);
// // => <script src="js/sample-script.js"></script>

// // ウィンドウをダークモードにするサンプル
// const themeChangeButton = document.querySelector('.theme-change-button');
// themeChangeButton.addEventListener('click', () => {
//   document.body.classList.toggle('theme-dark');
// });

// const parentElement = document.querySelector('#parent');

// // 親ノード.children => 子ノード
// console.log(parentElement.children);
// // => HTMLCollection(3) [div#child1, div#child2, div#child3, child1: div#child1, child2: div#child2, child3: div#child3]

// // 親ノード.firstElementChild => 最初の子ノード
// console.log(parentElement.firstElementChild);
// // => <div id="child1">子要素1</div>

// // 親ノード.lastElementChild => 最後の子ノード
// console.log(parentElement.lastElementChild);
// // => <div id="child3">子要素3</div>

// const firstElementChild = parentElement.firstElementChild;
// // 兄弟ノード.nextElementSibling => 次(弟)のノード
// console.log(firstElementChild.nextElementSibling);

// // 兄弟ノード.previousElementSibling => 前(兄)のノード
// console.log(firstElementChild.previousElementSibling);
// // => null

// // 兄弟ノード.
// console.log(firstElementChild.parentElement);
// // => <div id="parent"></div>

// // 親要素の末尾に要素を追加
// // 親ノード.appendChild(子ノード)
// const myBox = document.querySelector('#myBox');
// const container = document.querySelector('.container');
// setTimeout(() => {
//   container.appendChild(myBox);
// }, 3000);

// // 指定した位置に要素を追加
// // 親ノード.insertBefore(子ノード, 指定した位置)
// const container = document.querySelector('.container');
// const myBox1 = document.querySelector('#mybox1');
// const myBox2 = document.querySelector('#mybox2');
// const box2 = document.querySelector('#box2');
// setTimeout(() => {
//   container.insertBefore(mybox1, container.firstElementChild);
// }, 3000);
// setTimeout(() => {
//   container.insertBefore(myBox2, box2);
// }, 4000);

// // 指定した位置の前後に要素を追加
// const myBox1 = document.querySelector('#mybox1');
// const myBox2 = document.querySelector('#mybox2');
// const targetBox = document.querySelector('#targetBox');

// // ノード1.before(ノード2) => ノード1の前にノード2を追加
// setTimeout(() => {
//   targetBox.before(myBox1);
// }, 3000);

// // ノード1.after(ノード2) => ノード1の後にノード2を追加
// setTimeout(() => {
//   targetBox.after(myBox2);
// }, 4000);

// // HTML要素を追加
// // 親要素.insertAdjiacentHTML(挿入位置, 文字列)
// const container = document.querySelector('.container');
// const newBox = `<div class="new-box box">.new-box要素</div>`;
// setTimeout(() => {
//   // 親要素の直前
//   container.insertAdjacentHTML('beforebegin', newBox);
//   // 親要素内の先頭
//   container.insertAdjacentHTML('afterbegin', newBox);
//   // 親要素内の末尾
//   container.insertAdjacentHTML('beforeend', newBox);
//   // 親要素の直後
//   container.insertAdjacentHTML('afterend', newBox);
// }, 3000);

// // 子のHTML要素を削除
// // ノード.removeChild(子ノード)
// setTimeout(() => {
//   const parentElement = document.querySelector('#parent');
//   const childElement = document.querySelector('#child');
//   parentElement.removeChild(childElement);
// }, 3000);

// // HTML要素を削除
// // ノード.remove();
// setTimeout(() => {
//   const  childElement = document.querySelector('#child');
//   childElement.remove();
// }, 3000);

// // HTML要素を生成
// // document.createElement('タグ', オプション);
// const divElement = document.createElement('div');
// console.log(divElement);
// // => <div></div>
// const anchorElement = document.createElement('a');
// console.log(anchorElement);
// // => <a></a>

// // モーダルを生成するサンプル
// document.querySelector('#create-modal-button').addEventListener('click', displayModalWindow, false);
// function displayModalWindow() {
//   // モーダルウィンドウを生成
//   const modalElement = document.createElement('div');
//   modalElement.classList.add('modal');
//   // モーダルウィンドウの中身を生成
//   const innerElement = document.createElement('div');
//   innerElement.classList.add('inner');
//   innerElement.innerHTML = `
//   <p>モーダルウィンドウの中身です</p>
//   <div class="character"></div>
//   `;
//   // DOMに要素を追加
//   modalElement.appendChild(innerElement);
//   document.body.appendChild(modalElement);
//   // 閉じるイベントを生成
//   innerElement.addEventListener('click', () => {
//     closeModalWindow(modalElement);
//   });
// };
// function closeModalWindow(modalElement) {
//   document.body.removeChild(modalElement);
// };

// // 要素を複製
// // ノード.cloneNode(真偽値)
// setTimeout(() => {
//   const clonedBox = document.querySelector('#myBox').cloneNode(true);
//   document.querySelector('.container').appendChild(clonedBox);
// }, 3000);

// // 要素を他の要素に置き換える
// // 親ノード.replaceChild(新ノード, 旧ノード)
// setTimeout(() => {
//   const container = document.querySelector('.container');
//   const oldBox = document.querySelector('.old-box');
//   const newBox = document.createElement('div');
//   // 新しい要素を生成
//   newBox.textContent = '新ボックス';
//   newBox.classList.add('new-box', 'box');
//   // 要素を置き換える
//   container.replaceChild(newBox, oldBox);
// }, 3000);

// // 要素を入れ替える
// // 旧ノード.replaceWith(新ノード)
// setTimeout(() => {
//   const oldBox = document.querySelector('.old-box');
//   const newBox = document.createElement('div');
//   // 新しい要素を生成
//   newBox.textContent = '新ボックス';
//   newBox.classList.add('new-box', 'box');
//   // 要素を置き換える
//   oldBox.replaceWith(newBox);
// }, 3000);

// // 要素内のテキストを書き換える
// // ノード.textContent
// // const weatherInformation = document.querySelector('#weather-information');
// // console.log(weatherInformation.textContent);
// const weather = document.querySelector('#weather');
// setTimeout(() => {
//   weather.textContent = '気温は24℃の予想です。';
// }, 3000);

// // 要素内のHTML要素を書き換える
// // ノード.innerHTML
// const weather = document.querySelector('#weather');
// setTimeout(() => {
//   weather. innerHTML = '気温は<strong>24℃</strong>の予想です。';
// }, 3000);

// // 要素そのものや属性を書き換える
// // ノード.outerHTML
// const weather = document.querySelector('#weather');
// console.log(weather);
// // => <p id="weather">明日は晴れるでしょう</p>
// weather.outerHTML = '<img src="sample.jpg" alt="サンプル">';
// console.log(weather);
// // => <img src="sample.jpg" alt="サンプル">

// 要素の属性を取得、書き換える
// ノード.setAttriute(属性名, 値) => 要素の属性を設定
const imageElement = document.querySelector('#image');
imageElement.setAttribute('src', 'sample.png');
console.log(imageElement);
// => <img src="sample.png" id="image">

// ノード.getAttribute(属性名) => 要素の属性を取得
const anchorElement = document.querySelector('#anchor');
console.log(anchorElement.getAttribute('href'));
// => https://example.com

// ノード.hasAttribute(属性名) => 要素の属性があるかどうか
