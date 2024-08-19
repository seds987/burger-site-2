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



const ingredientPrices = {
    cutlet: 2.50,    // Ціна за котлету
    mayo: 0.50,      // Ціна за майонез
    onion: 0.30,     // Ціна за цибулю
    tomato: 0.70,    // Ціна за помідор
    cucumber: 0.60,  // Ціна за огірок
    cheese: 1.00,    // Ціна за сир
    salad: 0.40,     // Ціна за салат
    bun: 1.50        // Ціна за булку
};


// cutlet

cutletPlus.onclick = addCutlet;
cutletMinus.onclick = minusCutlet;

function addCutlet() {
    cutletValue++;
    cutletCount.innerHTML = cutletValue;
    showBurger();
}

function minusCutlet() {
    if(cutletValue <= 0) {
        return;
    }
    
    cutletValue--;
    cutletCount.innerHTML = cutletValue;
    showBurger();
}
// mayo

mayoPlus.onclick = addMayo;
mayoMinus.onclick = minusMayo;

function addMayo() {
    mayoValue++;
    mayoCount.innerHTML = mayoValue;
    showBurger();
}

function minusMayo() {
    if(mayoValue <= 0) {
        return;
    }
    
    mayoValue--;
    mayoCount.innerHTML = mayoValue;
    showBurger();
}

// onion

onionPlus.onclick = addOnion;
onionMinus.onclick = minusOnion;

function addOnion() {
    onionValue++;
    onionCount.innerHTML = onionValue;
    showBurger();
}

function minusOnion() {
    if(onionValue <= 0) {
        return;
    }
    
    onionValue--;
    onionCount.innerHTML = onionValue;
    showBurger();
}

// tomato


tomatoPlus.onclick = addTomato;
tomatoMinus.onclick = minusTomato;

function addTomato() {
    tomatoValue++;
    tomatoCount.innerHTML = tomatoValue;
    showBurger();
}

function minusTomato() {
    if(tomatoValue <= 0) {
        return;
    }
    
    tomatoValue--;
    tomatoCount.innerHTML = tomatoValue;
    showBurger();
}

// cucumber

cucumberPlus.onclick = addCucumber;
cucumberMinus.onclick = minusCucumber;

function addCucumber() {
    cucumberValue++;
    cucumberCount.innerHTML = cucumberValue;
    showBurger();
}

function minusCucumber() {
    if(cucumberValue <= 0) {
        return;
    }
    
    cucumberValue--;
    cucumberCount.innerHTML = cucumberValue;
    showBurger();
}

// cheease

cheasePlus.onclick = addChease;
cheaseMinus.onclick = minusChease;

function addChease() {
    cheaseValue++;
    cheaseCount.innerHTML = cheaseValue;
    showBurger();
}

function minusChease() {
    if(cheaseValue <= 0) {
        return;
    }
    
    cheaseValue--;
    cheaseCount.innerHTML = cheaseValue;
    showBurger();
}

//salad

saladPlus.onclick = addSalad;
saladMinus.onclick = minusSalad;

function addSalad() {
    saladValue++;
    saladCount.innerHTML = saladValue;
    showBurger();
    
}

function minusSalad() {
    if(saladValue <= 0) {
        return;
    }
    
    saladValue--;
    saladCount.innerHTML = saladValue;
    showBurger();
}

//bun
bunPlus.onclick = addBun;
bunMinus.onclick = minusBun;

function addBun() {
    bunValue++;
    bunCount.innerHTML = bunValue;
    showBurger();
}

function minusBun() {
    if(bunValue <= 0) {
        return;
    }
    
    bunValue--;
    bunCount.innerHTML = bunValue;
    showBurger();
}


function showBurger() {
    console.log(
      "Burger: +++++++++++" +
        "Cutlet:" +
        cutletCount.innerHTML + "\n" +
        "Mayo:" +
        mayoCount.innerHTML + "\n" +
        "Onion:" +
        onionCount.innerHTML + "\n" +
        "Tomato:" +
        tomatoCount.innerHTML + "\n" +
        "Cucumber:" +
        cucumberCount.innerHTML + "\n" +
        "Cheese:" +
        cheaseCount.innerHTML + "\n" +
        "Salad:" +
        saladCount.innerHTML + "\n" +
        "Bun:" +
      bunCount.innerHTML
  );

  let BurgerPrice = cutletCount.innerHTML * ingredientPrices.cutlet +
    mayoCount.innerHTML * ingredientPrices.mayo + 
    onionCount.innerHTML * ingredientPrices.onion + 
    tomatoCount.innerHTML * ingredientPrices.tomato +
    cucumberCount.innerHTML * ingredientPrices.cucumber + 
    cheaseCount.innerHTML * ingredientPrices.cheese +
    saladCount.innerHTML * ingredientPrices.salad + 
    bunCount.innerHTML  * ingredientPrices.bun 

    document.getElementById('burger-price').innerHTML = '$' + BurgerPrice.toFixed(2);
  
}

showBurger();
















function canculateBurgerPrice(
   cutletCount,mayoCount,onionCount,tomatoCount,
   cucumberCount,cheaseCount,saladCount,bunCount 
) {
    console.log (
        cutletCount,mayoCount,onionCount,tomatoCount,
        cucumberCount,cheaseCount,saladCount,bunCount 
    )
}

canculateBurgerPrice(
    cutletCount.innerHTML,mayoCount.innerHTML,onionCount.innerHTML,tomatoCount.innerHTML,
    cucumberCount.innerHTML,cheaseCount.innerHTML,saladCount.innerHTML,bunCount.innerHTML 
)