// let str  = 'hello'; //string
// let num = 25; //number
// let bool = false; //boolean
// let num2; //undefined
// let zero = null; //null
//sumbol 
//object

// console.log(str);

// let age = prompt('enter your age:');
// console.log(age);





function showMobileMenu() {
    let menu = document.getElementById("mobile-menu");
    let icon = document.getElementById('menu-icon');
   

    if (menu.style.display === "block") {
        // Якщо меню відкрите, приховуємо його
        menu.style.display = "none";
        document.body.style.overflow = '';
        icon.src ="./images/Mobile Menu (1).svg";

    } else {
        // Якщо меню закрите, показуємо його
        menu.style.display = "block";
        document.body.style.overflow = 'hidden';
        icon.src = './images/Mobile Menu.svg';
    }


}


let cutletCount = document.getElementById('cutlet-count');
let mayoCount = document.getElementById('mayo-count');
let onionCount = document.getElementById('onion-count');
let tomatoCount = document.getElementById('tomato-count');
let cucumberCount = document.getElementById('cucumber-count');
let cheaseCount = document.getElementById('chease-count');
let saladCount = document.getElementById('salad-count');
let bunCount = document.getElementById('bun-count');


let cutletValue = 0;
let mayoValue = 0;
let onionValue = 0;
let tomatoValue = 0;
let cucumberValue = 0;
let cheaseValue = 0;
let saladValue = 0;
let bunValue = 0;


cutletCount.innerHTML = cutletValue;
mayoCount.innerHTML = mayoValue;
onionCount.innerHTML = onionValue;
tomatoCount.innerHTML = tomatoValue;
cucumberCount.innerHTML = cucumberValue;
cheaseCount.innerHTML = cheaseValue;
saladCount.innerHTML = saladValue;
bunCount.innerHTML = bunValue;

let cutletPlus = document.getElementById('cutlet-plus');
let mayoPlus = document.getElementById('mayo-plus');
let onionPlus = document.getElementById('onion-plus');
let tomatoPlus = document.getElementById('tomato-plus');
let cucumberPlus = document.getElementById('cucumber-plus');
let cheasePlus = document.getElementById('chease-plus');
let saladPlus = document.getElementById('salad-plus');
let bunPlus = document.getElementById('bun-plus');

let cutletMinus = document.getElementById('cutlet-minus');
let mayoMinus = document.getElementById('mayo-minus');
let onionMinus = document.getElementById('onion-minus');
let tomatoMinus = document.getElementById('tomato-minus');
let cucumberMinus = document.getElementById('cucumber-minus');
let cheaseMinus = document.getElementById('chease-minus');
let saladMinus = document.getElementById('salad-minus');
let bunMinus = document.getElementById('bun-minus');

cutletPlus.onclick = addCutlet;
cutletMinus.onclick = minusCutlet;

function addCutlet() {
    cutletValue++;
    cutletCount.innerHTML = cutletValue;
}

function minusCutlet() {
    if(cutletValue <= 0) {
        return;
    }
    
    cutletValue--;
    cutletCount.innerHTML = cutletValue;
}



mayoPlus.onclick = addMayo;

function addMayo() {
    mayoValue++;
    mayoCount.innerHTML = mayoValue;
}

onionPlus.onclick = addOnion;

function addOnion() {}