// CSS Transitions・CSS Animations
// const button = document.querySelector('button');
// button.addEventListener('click', handleClick, false);
// function handleClick() {
//   const element = document.querySelector('.target');
//   if (element.classList.contains('state-show') === false) {
//     element.classList.add('state-show');
//   } else {
//     element.classList.remove('state-show');
//   };
// };

// const target = document.querySelector('.target');
// target.addEventListener('transitionend', (e) => {
//   const log = document.querySelector('.log');
//   log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
// });

// const input = document.querySelector('input');
// input.addEventListener('click', () => {
//   const rect = document.querySelector('.rect');
//   if (rect.classList.contains('state-show') === false) {
//     rect.classList.add('state-show');
//   } else {
//     rect.classList.remove('state-show');
//   }
// }, false);

// const rect = document.querySelector('.rect');
// rect.addEventListener('transitionend', () => {
//   const log = document.querySelector('.log');
//   log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleString();
// });

// const input = document.querySelector('input');
// input.addEventListener('click', () => {
//   const rect = document.querySelector('.rect');
//   if (rect.classList.contains('state-show') === false) {
//     rect.classList.add('state-show');
//   } else {
//     rect.classList.remove('state-show');
//   }
// }, false);

// const rect = document.querySelector('.rect');
// const log = document.querySelector('.log');

// // animationstart
// rect.addEventListener('animationstart', () => {
//   log.innerHTML = 'animationstart 発生 : ' + new Date().toLocaleString();
// }, false);

// // animationiteration
// rect.addEventListener('animationiteration', () => {
//   log.innerHTML = 'animationiteration 発生 : ' + new Date().toLocaleString();
// }, false);

// // animationend
// // 繰り返しを指定した時、animationendは発生しない
// // rect.addEventListener('animationend', () => {
// //   log.innerHTML = 'animationend 発生 : ' + new Date().toLocaleString();
// // }, false);

// // Web Animation API
// const element = document.querySelector('.rect');
// element.animate(
//   // 第一引数 => 開始値と終了値を含むオブジェクト
//   {
//     transform: [
//       'translateX(0px) rotate(0deg)', // 開始値
//       'translateX(800px) rotate(360deg)' // 終了値
//     ]
//   },
//   // 第二引数 => アニメーションの属性を含むオブジェクト
//   {
//     duration: 3000, // デュレーション
//     iterations: Infinity, // 繰り返し回数
//     direction: 'normal', // 繰り返し挙動
//     easing: 'ease' // 加減速速度
//   }
// );

// // CSS Transition で実現するサンプル
// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener('change', () => {
//   const rect = document.querySelector('.rect');
//   // 条件式をtrueにしないと動かない
//   if (rect.classList.contains('state-show') === true) {
//     rect.classList.remove('state-show');
//   } else {
//     rect.classList.add('state-show');
//   };
// });

// // Web Animation API で実現するサンプル
// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener('change', () => {
//   const rect = document.querySelector('.rect');
//   rect.animate(
//     {
//       transform: [
//         'scale(1)',
//         'scale(5)'
//       ]
//     },
//     {
//       duration: 5000,
//       fill: 'forwards', // 終了時にプロパティを保つ
//       easing: 'ease'
//     }
//   );
// }, false);

// // CSS Transition で実現するサンプル
// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener('change', () => {
//   const rect = document.querySelector('.rect');
//   if (rect.classList.contains('state-show') === true) {
//     rect.classList.remove('state-show');
//   } else {
//     rect.classList.add('state-show');
//   };
// });

// // Web Animation API で実現するサンプル
// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener('change', () => {
//   const rect = document.querySelector('.rect');
//   rect.animate(
//     {
//       transform: [
//         'translateX(0px)',
//         'translateX(300px)'
//       ],
//       opacity:[
//         1.0, // 開始値
//         0.5 // 終了値
//       ]
//     },
//     {
//       duration: 3000,
//       fill: 'forwards',
//       easing: 'ease'
//     }
//   );
// });

// // 要素の明度、彩度を変える(brightness(), grayscale())
// // CSS Transition で実現するサンプル
// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener('change', () => {
//   const rect = document.querySelector('.rect');
//   if (rect.classList.contains('state-show') === true) {
//     rect.classList.remove('state-show');
//   } else {
//     rect.classList.add('state-show');
//   };
// });

// Web Animation API で実現するサンプル
const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', () => {
  const rect = document.querySelector('.rect');
  rect.animate(
    {
      // filter: [
      //   'brightness(100%)',
      //   'brightness(300%)'
      // ],
      filter:[
        'grayscale(0%)',
        'grayscale(100%)'
      ]
    },
    {
      duration: 3000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
});
