// const box = document.querySelector('.box');
// console.log(box.innerHTML);
// // => 1つ目のボックス

// forEach()
const eachList = document.querySelectorAll('.box');
eachList.forEach((targetbox) => {
  console.log(targetbox);
});
// => <div class="box">1つ目のボックス</div>
// => <div class="box">2つ目のボックス</div>
// => <div class="box">3つ目のボックス</div>

// for
const forList = document.querySelectorAll('.box');
for(let i = 0; i < forList.length; i++) {
  console.log(forList[i]);
};
// => <div class="box">1つ目のボックス</div>
// => <div class="box">2つ目のボックス</div>
// => <div class="box">3つ目のボックス</div>

document.querySelectorAll('.box').forEach((targetbox) => {
  targetbox.addEventListener('click', () => {
    alert(`${targetbox.textContent}がクリックされました`);
  }, false);
});
