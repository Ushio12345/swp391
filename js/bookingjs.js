const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

option1.addEventListener('click', () => {
  if (option1.checked) {
    option1.checked = false;
  } else {
    option1.checked = true;
  }
});

option2.addEventListener('click', () => {
  if (option2.checked) {
    option2.checked = false;
  } else {
    option2.checked = true;
  }
});