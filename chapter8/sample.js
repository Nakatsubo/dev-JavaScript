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

// 指定した位置の前後に要素を追加
const myBox1 = document.querySelector('#mybox1');
const myBox2 = document.querySelector('#mybox2');
const targetBox = document.querySelector('#targetBox');

// ノード1.before(ノード2) => ノード1の前にノード2を追加
setTimeout(() => {
  targetBox.before(myBox1);
}, 3000);

// ノード1.after(ノード2) => ノード1の後にノード2を追加
setTimeout(() => {
  targetBox.after(myBox2);
}, 4000);
