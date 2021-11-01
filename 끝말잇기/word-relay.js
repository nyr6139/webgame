const input = document.querySelector('input')
const button = document.querySelector('button')
const $word = document.querySelector('#word')
const $order = document.querySelector('#order')
const number = Number(prompt('몇 명이 참여하나요?'))
let word; // 제시어
let newWorld // 현재 단어

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWorld[0]) { // 제시어가 비어있는가?
    word = newWorld;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {  // 단어가 올바르지 않다.
    alert('단어가 올바르지 않습니다.')
  }
  input.value = ''
  input.focus()
};

const onInput = (event) => {
  newWorld = event.target.value;
}

button.addEventListener('click', onClickButton)
input.addEventListener('input', onInput)
input.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    onClickButton();
  }
})