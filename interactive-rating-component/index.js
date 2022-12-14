let buttons = document.querySelectorAll('input[data-selected=""]');
let submitButton = document.querySelector(
  '.container__rating-state--text-submit'
);

buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    // clean all inputs dataset
    let selected = document.querySelector('input[data-selected="selected"]');
    selected ? (selected.dataset.selected = '') : null;

    let element = e.target;
    element.dataset.selected = 'selected';
  });
});

submitButton.addEventListener('click', (e) => {
  let selected = document.querySelector('input[data-selected="selected"]');
  console.log(selected)

  let thankyou = document.querySelector('.container__thanks');
  let ratingState = document.querySelector('.container__rating-state');
  console.log(thankyou, ratingState)

  ratingState.classList.toggle('hide');

  thankyou.querySelector(
    '.container__thanks--selection'
  ).textContent = `You selected ${selected.value} out of 5`;

  thankyou.classList.toggle('hide');
});
