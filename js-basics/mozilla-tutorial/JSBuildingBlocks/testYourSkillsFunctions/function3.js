let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function random(low, high) {
  return Math.floor(Math.random() * high + low);
}

function chooseName(array) {
  randomNum = random(0, array.length);
  return array[randomNum];
}

para.textContent = chooseName(names);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);