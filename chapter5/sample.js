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
// // getMinutes();
// const minutes = date.getMinutes();
// // 秒数を取得
// // getSeconds();
// const seconds = date.getSeconds();
// const label = `${hour}時${minutes}分${seconds}秒`;
// document.querySelector('#log').innerHTML = `現時刻は${label}です`;

// // 時刻を取得するサンプル
// const date = new Date();
// const hour = date.getHours();
// let meridiem;
// let hour2;
// if (hour < 12) {
//   meridiem = '午前';
//   hour2 = hour;
// } else {
//   meridiem = '午後';
//   hour2 = hour - 12;
// };
// const label = `${meridiem}${hour2}時`;
// document.querySelector('#log').innerHTML = `現時刻は${label}です`;

// // 曜日を取得
// // 0~6 => 数値を取得 =>日~土
// // getDay();
// const date = new Date();
// const day = date.getDay();
// // const dayList = ['Son', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const dayList = ['日', '月', '火', '水', '木', '金', '土'];
// const label = dayList[day];
// document.querySelector('#log').innerHTML = `今日は${label}曜日です`;

// // ローカルの時刻を取得
// // 日付の文字列を取得 toLocalDateString();
// // 時刻の文字列を取得 toLocalTimeString();
// const date = new Date();
// const local = date.toLocaleString();
// const localDate = date.toLocaleDateString();
// const localTime = date.toLocaleTimeString();
// document.querySelector('#log').innerHTML = `${local}<br>${localDate}<br>${localTime}`;

// // タイムスタンプを取得
// // Date.parse(); => getTime(); メソッドと同じ値を取得
// console.log(Date.parse('2018/06/20'));
// // => 1529420400000
// console.log(Date.parse(2018, 5, 20));
// // => 1514764800000
// // 現在時刻を取得
// console.log(Date.now());
// // => 1579271442426

// // Dateインスタンスに別の日時を指定
// console.log(new Date('2018/6/20 20:01:10'));
// // => Wed Jun 20 2018 20:01:10 GMT+0900 (日本標準時)
// console.log(new Date('Tue Jun 20 2018 20:01:10'));
// // => Wed Jun 20 2018 20:01:10 GMT+0900 (日本標準時)
// console.log(new Date(2018, 5, 12, 20, 01, 10));
// // => Tue Jun 12 2018 20:01:10 GMT+0900 (日本標準時)
// console.log(new Date(1528801270000));
// // => Tue Jun 12 2018 20:01:10 GMT+0900 (日本標準時)

// const date = new Date();
// console.log(date);
// // => Fri Jan 17 2020 23:45:00 GMT+0900 (日本標準時)
// // 日時を設定
// console.log(date.setFullYear(2015));
// // => 1421505787487
// console.log(date.setMonth(0));
// // => 1421505787487
// console.log(date.setDate(1));
// // => 1420123387487
// console.log(date.setHours(0));
// // => 1420040587487
// console.log(date.setMinutes(0));
// // => 1420038007487
// console.log(date.setSeconds(0));
// // => 1420038000487
// document.querySelector('#log').innerHTML = date.toLocaleString();
// // => 2015/1/1 0:00:00

// // 日付/時刻値を加算/減算
// const date = new Date('2018/06/01');
// date.setMonth(date.getMonth() - 1);
// console.log(date.toLocaleDateString());
// // => 2018/5/1
// date.setDate(date.getDate() + 60);
// console.log(date.toLocaleDateString());
// // => 2018/6/30

// // 日付/時刻の差分を計算
// // 差分を計算する場合、ミリ秒の単位で計算する
// const dateA = new Date('2018/06/01');
// const dateB = new Date('2018/05/01');
// const diffMSec = dateA.getTime() - dateB.getTime();
// console.log(diffMSec);
// // => 2678400000
// const diffDate = diffMSec / (24 * 60 * 60 * 1000);
// console.log(diffDate);
// // => 31
// console.log(`${diffDate}日の差があります`);
// // => 31日の差があります
// const dateA = new Date('2018/06/01 10:00:00');
// const dateB = new Date('2018/06/01 07:00:00');
// const diffMSec = dateA.getTime() - dateB.getTime();
// console.log(diffMSec);
// // => 10800000
// const diffHour = diffMSec / (60 * 60 * 1000);
// console.log(diffHour);
// // => 3
// console.log(`${diffHour}時間の差があります`);
// // => 3時間の差があります
// const dateA = new Date('2018/06/01 01:10:00');
// const dateB = new Date('2018/06/01 00:50:00');
// const diffMSec = dateA.getTime() - dateB.getTime();
// console.log(diffMSec);
// // => 1200000
// const diffMin = diffMSec / (60 * 1000);
// console.log(diffMin);
// // => 20
// console.log(`${diffMin}分の差があります`);
// // => 20分の差があります
