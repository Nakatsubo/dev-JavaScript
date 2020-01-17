// // 西暦を取得
// // getFullYear()
// const date = new Date();
// const year = date.getFullYear();
// // document.querySelector('#log').innerHTML = `今年は西暦${year}年です`;
// // 日付を取得
// // getMonth();
// const month = date.getMonth() + 1;
// // getDate();
// const day = date.getDate();
// // const label = `${month}月${day}日`;
// // document.querySelector('#log').innerHTML = `今日は${label}です`;
// // 時間を取得
// // getHours();
// const hour = date.getHours();
// // 分数を取得
// const minutes = date.getMinutes();
// // 秒数を取得
// const seconds = date.getSeconds();
// const label = `${hour}時${minutes}分${seconds}秒`;
// document.querySelector('#log').innerHTML = `現時刻は${label}です`;

const date = new Date();
const hour = date.getHours();
let meridiem;
let hour2;
if (hour < 12) {
  meridiem = '午前';
  hour2 = hour;
} else {
  meridiem = '午後';
  hour2 = hour - 12;
};
const label = `${meridiem}${hour2}時`;
document.querySelector('#log').innerHTML = `現時刻は${label}です`;
