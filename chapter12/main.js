// // SVG(スケーラブル・ベクター・グラフィックス)
// // createElementNS => 指定された名前空間 URI と修飾名を持つ要素を生成します。
// // https://developer.mozilla.org/ja/docs/Web/API/Document/createElementNS
// const myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

// myCircle.setAttribute('cx', '100'); // X座標の中心点
// myCircle.setAttribute('cy', '100'); // Y座標の中心点
// myCircle.setAttribute('r', '100'); // 円の半径
// myCircle.setAttribute('fill', '#FFFF8D'); // 塗り

// const mySvg = document.querySelector('#mySvg');
// mySvg.appendChild(myCircle);

// // SVGのスタイルを変更する
// // 要素.setAttribute(属性名, 値)
// const myCircle = document.querySelector('#myCircle');
// myCircle.setAttribute('r', 100);
// myCircle.setAttribute('fill', '#FFFF8D');
// myCircle.setAttribute('opacity', 0.5);

// // SVGをマウス操作する
// const myCircle = document.querySelector('#myCircle');
// myCircle.addEventListener('click', () => {
//   alert('クリックされました');
// });

// SVGをアニメーションさせる
const myCircle = document.querySelector('#myCircle');
let time = 0;

animate();

function animate() {
  time += 0.1;
  // hsl => 色合い, 彩度, 輝度
  myCircle.style.fill = `hsl(0, 100%, ${time}%)`;
  // console.log(time);
  // => (0, 100, 50) => Redになる

  // 繰り返し処理
  if (time < 50) {
    // requestAnimationFrame() => 自身の関数内で呼び出し、繰り返し処理
    requestAnimationFrame(animate);
  };
};
