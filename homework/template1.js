//-------------------------------------------------------------------------------------------------------
//                                HOMEWORK
//-------------------------------------------------------------------------------------------------------

// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//

// 1) Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
// + a) отримує текст з параграфа з id "content"
// + b) отримує текст з блоку з id "rules"
//
let elementById = document.getElementById('content');
console.log(elementById);

let elementById2 = document.getElementById('rules');
console.log(elementById2);

console.log(`-----------------------------------------------------------------------`);
console.log(`-----------------------------------------------------------------------`);

let getElementsByClassName = document.getElementsByClassName('fc bp')
console.log(getElementsByClassName);


// + c) замініть текст параграфа з id 'content' на будь-який інший
// + d) замініть текст параграфа з id 'rules' на будь-який інший
//
// elementById.innerText = 'Look! This is a new text.';
//   OR
elementById.innerHTML = 'This is My TEXT';

elementById2.innerText = 'This is a new paragraph!';
//   OR
// elementById2.innerHTML = 'This is MY NEW paragraph!'


// + e) змініть кожному елементу колір фону на різні кольори (<li> зробити різнокольорові)
//
elementById.style.backgroundColor = '#32e2cd';
elementById2.style.backgroundColor = '#7de1ff';

let getElementsByTagName = document.getElementsByTagName('li');

const backgroundColors = ['#fcf4a9','#33c33a', '#a75068','#ffc823','#73aedb'];
for (let i = 0; i < getElementsByTagName.length; i++) {
    getElementsByTagName[i].style.backgroundColor = backgroundColors[i];
}


//     + f) змініть кожному елементу колір тексту на синій
//
elementById.style.color = 'blue';
elementById2.style.color = 'blue';

let blueColorOfText = document.getElementsByClassName('fc_rules');

for (const blueElement of blueColorOfText) {
    blueElement.style.color = 'blue';
}


//     +g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// console.log(elementById2.classList.value)
//   OR
for (let i = 0; i < elementById2.classList.length; i++) {
    console.log(elementById2.classList[i])
}


//     + h) отримати всі елементи з класом fc_rules
//
// let getElementsByTagNameLi = document.getElementsByTagName('li')
// console.log(getElementsByTagNameLi);
//
// for (let i = 0; i < getElementsByTagName.length; i++) {
//     console.log(getElementsByTagName[i]);
// }
//
//                     OR
//
// console.log(`-----------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------`);
//
let getElementsByClassName2 = document.getElementsByClassName('fc_rules')
console.log(getElementsByClassName2);

for (let i = 0; i < getElementsByClassName2.length; i++) {
    console.log(getElementsByClassName2[i]);
}


//     + i) поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRulesChangeColor = document.getElementsByClassName('fc_rules');

for (const fcElement of fcRulesChangeColor) {
    fcElement.style.color = 'red';
}

