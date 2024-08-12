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


