// CSS Transitions・CSS Animations
const button = document.querySelector('button');
button.addEventListener('click', handleClick, false);
function handleClick() {
  const element = document.querySelector('.target');
  if (element.classList.contains('state-show') === false) {
    element.classList.add('state-show');
  } else {
    element.classList.remove('state-show');
  };
};

const target = document.querySelector('.target');
target.addEventListener('transitionend', (e) => {
  const log = document.querySelector('.log');
  log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
});
