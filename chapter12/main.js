// SVG(スケーラブル・ベクター・グラフィックス)
// createElementNS => 指定された名前空間 URI と修飾名を持つ要素を生成します。
// https://developer.mozilla.org/ja/docs/Web/API/Document/createElementNS
const myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

myCircle.setAttribute('cx', '100'); // X座標の中心点
myCircle.setAttribute('cy', '100'); // Y座標の中心点
myCircle.setAttribute('r', '100'); // 円の半径
myCircle.setAttribute('fill', '#FFFF8D'); // 塗り

const mySvg = document.querySelector('#mySvg');
mySvg.appendChild(myCircle);

