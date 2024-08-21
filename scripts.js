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
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("menu-icon");
  
    if (menu && icon) {
      const isOpen = menu.style.display === "block";
      menu.style.display = isOpen ? "none" : "block";
      document.body.style.overflow = isOpen ? "" : "hidden";
      icon.src = isOpen ? "./images/icons/Menu.svg" : "./images/icons/Cross.svg";
    }
  }
  
  const ingredients = [
    { name: "cutlet", price: 2.5, calories: 200, time: 5, weight: 150 },
    { name: "mayo", price: 0.5, calories: 50, time: 1, weight: 20 },
    { name: "onion", price: 0.3, calories: 10, time: 2, weight: 30 },
    { name: "tomato", price: 0.7, calories: 15, time: 1, weight: 40 },
    { name: "cucumber", price: 0.6, calories: 10, time: 1, weight: 50 },
    { name: "cheese", price: 1.0, calories: 70, time: 1, weight: 25 },
    { name: "salad", price: 0.4, calories: 5, time: 1, weight: 15 },
    { name: "bun", price: 1.5, calories: 100, time: 3, weight: 100 },
  ];
  
  const ingredientValues = {};
  
  // Ініціалізація кількості інгредієнтів та прив'язка подій до кнопок
  ingredients.forEach(({ name }) => {
    ingredientValues[name] = 0;
  
    const countElement = document.getElementById(`${name}-count`);
    const plusButton = document.getElementById(`${name}-plus`);
    const minusButton = document.getElementById(`${name}-minus`);
  
    if (countElement) {
      countElement.innerHTML = ingredientValues[name];
    }
  
    if (plusButton) {
      plusButton.onclick = () => updateIngredient(name, 1);
    }
  
    if (minusButton) {
      minusButton.onclick = () => updateIngredient(name, -1);
    }
  });
  
  function updateIngredient(name, delta) {
    ingredientValues[name] = Math.max(0, ingredientValues[name] + delta);
  
    const countElement = document.getElementById(`${name}-count`);
    if (countElement) {
      countElement.innerHTML = ingredientValues[name];
    }
  
    showBurger();
  }
  
  function showBurger() {
    const burgerGift = document.getElementById("burger-gift");
    const burgerPromo = document.getElementById("burger-promo");
  
    if (burgerGift) {
      burgerGift.style.display = "none";
    }
    if (burgerPromo) {
      burgerPromo.style.display = "block";
    }
  
    let burgerPrice = 0;
    let totalCalories = 0;
    let totalTime = 0;
    let totalWeight = 0;
  
    ingredients.forEach(({ name, price, calories, time, weight }) => {
      const count = ingredientValues[name];
      burgerPrice += count * price;
      totalCalories += count * calories;
      totalTime += count * time;
      totalWeight += count * weight;
    });
  
    const priceElement = document.getElementById("burger-price");
    if (priceElement) {
      priceElement.innerHTML = `$${burgerPrice.toFixed(2)}`;
    }
  
    const caloriesElement = document.querySelector(".property-values .property-icon:nth-child(1) p");
    const timeElement = document.querySelector(".property-values .property-icon:nth-child(2) p");
    const weightElement = document.querySelector(".property-values .property-icon:nth-child(3) p");
  
    if (caloriesElement) {
      caloriesElement.innerHTML = `${totalCalories} kcal`;
    }
    if (timeElement) {
      timeElement.innerHTML = `${totalTime} min`;
    }
    if (weightElement) {
      weightElement.innerHTML = `${totalWeight} g`;
    }
  
    if (burgerPrice >= 5) {
      if (burgerGift) {
        burgerGift.style.display = "block";
      }
      if (burgerPromo) {
        burgerPromo.style.display = "none";
      }
    }
  }
  
  // Виклик функції для початкового показу
  showBurger();
  