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

// // Imageオブジェクト(new Image())
// const container = document.querySelector('.container');
// for (let i = 0; i < 10; i++) {
//   const img = new Image();
//   img.src = `./images/photo-${i}.jpg`;
//   container.appendChild(img);
// };

// // 音声をスクリプトで制御
// // loadedmetadata => メタデータが読み込まれたときに発生する。
// // https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/loadedmetadata_event
// const audio = document.querySelector('#myAudio');
// audio.addEventListener('loadedmetadata', () => {
//   console.log(audio.duration);
//   // => 60.048
// }, false);

// // スクリプトで制御
// document.querySelector('#btnPlay').addEventListener('click', () => {
//   audio.play();
// });
// document.querySelector('#btnPause').addEventListener('click', () => {
//   audio.pause();
// });

// const audio = document.querySelector('#myAudio');
// // 音声のボリュームを変更
// audio.volume = 1.0;
// // ミュートの状態を変更
// audio.muted = true;

// // Web Audio API
// // CROSの設定をしないとエラー
// loadAndPlay();

// let source;

// // 再生させる
// async function loadAndPlay() {
//   // インスタンスを作成
//   const context = new AudioContext();

//   // サウンドファイルを読み込む
//   const data = await fetch('./music.mp3');
//   // ArrayBuffer として扱う
//   const buffer = await data.arrayBuffer();
//   // オーディオデータに変換する
//   const decodedBuffer = await context.decodeAudioData(buffer);

//   // ソースを作成
//   source = contex.createBufferSource();
//   // ソースにオーディオデータを割り当てる
//   source.buffer = decodedBuffer;
//   // スピーカーをつなげる
//   source.context(context.destination);
//   // 再生を開始
//   source.start(0);
// };

// // 停止させる
// function stop() {
//   source.stop();
// };

// 動画をスクリプトで制御
const video = document.querySelector('#myVideo');
// 再生
const btnPlay = document.querySelector('#btnPlay');
btnPlay.addEventListener('click', () => {
  video.play();
}, false);
// 一時停止
const btnPause = document.querySelector('#btnPause');
btnPause.addEventListener('click', () => {
  video.pause();
}, false);
