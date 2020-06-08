let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function chooseName() {
  let randomName = names[Math.floor(Math.random() * names.length)];
  //let randomName = names[1];
  para.textContent = randomName;
}

chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);