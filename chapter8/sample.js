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
