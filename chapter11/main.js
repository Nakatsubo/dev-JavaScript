// // 画像をスクリプトで読み込む
// const imgA = document.querySelector('#myImageA');
// imgA.src = './images/photo_a.jpg';
// const imgB = document.querySelector('#myImageB');
// imgB.src = './images/photo_b.jpg';

// // 画像の読み込み後に処理を実行
// // onload イベント
// const img = document.querySelector('#myImage');
// img.onload = () => {
//   img.classList.remove('loading');
// };
// img.src = './images/photo.jpg';
// img.classList.add('loading');

// // 画像の遅延ロード
// // Mapオブジェクト => キーと値を組み合わせ、複数のデータをまとめて取り扱う
// const srcMap = new Map();
// window.addEventListener('DOMContentLoaded', () => {
//   const imgs = document.querySelectorAll('img');

//   imgs.forEach((img) => {
//     // Mapオブジェクトにimg要素のdata-src属性を保存
//     srcMap.set(img, img.dataset.src);
//     // src属性は空にしておく
//     img.removeAttribute('src');
//   });
// }, false);

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   const imgs = document.querySelectorAll('img');
//   console.log(srcMap);
//   // => Map(2) {img => "images/photo_a.jpg", img => "images/photo_b.jpg"}

//   // Mapオブジェクトに保存していたsrc属性を割り当てる
//   imgs.forEach((img) => {
//     const source = srcMap.get(img);
//     img.src = source;
//   });
// }, false);

// // Base64
// const img = document.querySelector('#myImage');
// img.src = 'data:image/jpeg;base64, ...';

// Imageオブジェクト(new Image())
const container = document.querySelector('.container');
for (let i = 0; i < 10; i++) {
  const img = new Image();
  img.src = `./images/photo-${i}.jpg`;
  container.appendChild(img);
};
