console.log('lets add javascript to the project ');
console.log('lets add javascript to the project ');

const cant = document.querySelectorAll('.button');

const main = document.querySelector('main');
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
