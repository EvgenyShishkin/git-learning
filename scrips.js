let name = prompt('Кто у нас тут?:) А как тебя зовут, друг?', 1);

let h1 = document.querySelector('h1');
h1.innerHTML = `Hello my new friend ${name}`;
h1.style.color = 'orangered';
h1.style.textAlign = 'center';

