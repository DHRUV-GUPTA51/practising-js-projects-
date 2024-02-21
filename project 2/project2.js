
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');
  if (height == '' || isNaN(height)) {
    result.innerHTML = `please give a valid index or value for height ${height}`;
  } else if (weight == '' || isNaN(weight)) {
    result.innerHTML = `please give a valid index for weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    const alpha = bmi;
    const bmistatus = document.createElement('span');

    if (alpha < 18.6) {
      bmistatus.textContent = `you are underweight`;
    } else if (alpha > 24.9) {
      bmistatus.textContent = `you are overweight motu`;
    } else {
      bmistatus.textContent = 'you are healthy kid congrats buddy';
    }
    document.createElement('br');
    result.appendChild(bmistatus);
  }
});
