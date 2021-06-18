// ---------------------------------------------------------------------------------------------------------
//                                 C L A S S W O R K
// ---------------------------------------------------------------------------------------------------------

//     Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
//
// let element = document.getElementById('main_header');
// element.innerHTML = `April - 2021`;
// element.style.color = '#9027ec';
// element.style.fontSize = '40px';


// b) робить шириниу елементу ul 400px
//
// document.getElementsByTagName('ul')[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const links = document.getElementsByClassName('linkList');
// for (const link of links) {
//     link.style.width = '50%';
//     link.style.height = '20px';  //        моя property
//     link.style.backgroundColor = '#cbb7ff';   //       моя property
//     link.style.margin = '10px';   //      моя property
//     link.style.padding = '10px';    //    моя property
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// const textElement = document.getElementsByClassName('listElement2')[0].innerText;
// console.log(textElement);


// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let greyColorOfLi = document.getElementsByTagName('li');
// for (const element of greyColorOfLi) {
//     element.style.backgroundColor = '#acabab'
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
//
// const elementsA = document.getElementsByTagName('a');
// for (const element of elementsA) {
//     element.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
//
// let elementA = document.getElementsByTagName('a');
// for(let item of elementA) {
//     if (item.innerText === 'link3') {
//         item.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let a = document.getElementsByTagName('a');
// for (let item of a) {
//     item.classList.add('element_XXX', item.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// const subHeader = document.getElementsByClassName('sub-header');
// const colorOfSubHeader = prompt('Enter background color!');
// for (let item of subHeader) {
//     item.style.backgroundColor = colorOfSubHeader;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment. Колір отримати з prompt()


// const subHeader2 = document.getElementsByClassName('sub-header');
// const color = prompt('Enter the color of the text!');
// const content2Segment = document.getElementsByTagName('h3')[1];
// for (const item of subHeader2) {
//     if (item.style.color === content2Segment.style.color) {
//         item.style.color = color;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє в ньому текст на довільний.
// Текст отримати з prompt()
//
// const text = prompt('Enter the text');
// document.getElementsByClassName('content_1').innerText = text;


// l) отримати елементи p та змінити їм padding на 20px
//
// let elementP = document.getElementsByTagName('p');
// for (let item of elementP) {
//     item.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// const text2 = document.getElementsByClassName('text2');
// for (const item of text2) {
//     item.innerText = 'April-2021'
// }


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//

// const form = document.forms.myForm2;
// const btn = document.getElementById('btn_form');
//
// btn.addEventListener(' ', event => {
//     event.preventDefault()
//
//     localStorage.setItem('inputValue', JSON.stringify(form.someText.value));
//
//     location.href='index2.html';
// });


// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
//     На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//


// let persons = JSON.parse(localStorage.getItem('persons'));
//     if (!persons) persons = [];
//
// let form2 = document.forms.form2;
//
// form2.addEventListener('submit', (event) => {
//     // event.preventDefault();
//
//     const person = {
//         name: form2.name.value,
//         age: form2.age.value
//     };
//
//     persons.push(person)
//     localStorage.setItem('persons', JSON.stringify(persons));
//
// })

//                 OR
//

const {name, price, img} = document.forms.form;
const btn = document.getElementById('btn');
const key = 'key';


const save = (name, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];

    store.push({id: Math.random(), name, price, img})
    localStorage.setItem(key, JSON.stringify(store));
}

btn.onclick = () => {
    save(name.value, price.value, img.value);
}








// ---------------------------------------------------------------------------------------------------------
//     ДОДАТКОВО
// ---------------------------------------------------------------------------------------------------------
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар




















