// 画像をスクリプトで読み込む
// const imgA = document.querySelector('#myImageA');
// imgA.src = 'photo_a.jpg';
// const imgB = document.querySelector('#myImageB');
// imgB.src = 'photo_b.jpg';

// 画像の読み込み後に処理を実行
// onload イベント
const img = document.querySelector('#myImage');
img.onload = () => {
  img.classList.remove('loading');
};
img.src = 'photo.jpg';
img.classList.add('loading');
