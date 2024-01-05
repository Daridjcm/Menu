// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
    {
        name: "Pepperoni Pizza",
        price: 4.53
    },
];
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    let resultPrices = document.getElementById('resultPrices');
    resultPrices.innerHTML = '';
    for (let dish of dishData) {
        let finalPrice;
        if (taxBoolean == true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean == false) {
            finalPrice = dish.price;
        } else {
            resultPrices.innerHTML = "You need to pass a boolean to the getPrices call!";
            return;
        };
        resultPrices.innerHTML += `Dish: ${dish.name} <br> Price: $${finalPrice}<br><br>`;
    };
};

// Implement getDiscount()
let resultDiscount = document.getElementById('resultDiscount');
let btnDiscount = document.getElementById('btnInputDiscount');
btnDiscount.addEventListener ('click', function algo(){
    if (getPrices(true)) {
        getDiscount()
    } else if (getPrices(false)) {
        getDiscount()
    } else {
        resultDiscount.innerHTML = "Please, come again."
    }
})

function getDiscount(guests) {
    let discount = 0;
    let inputGuests = document.getElementById('inputGuests');
    resultDiscount.innerHTML = '';
    guests = inputGuests.value;
    if (guests < 5) {
        discount = 5;
        resultDiscount.innerHTML = "Discount is: $" + discount;
    } else if (guests >= 5) {
        discount = 10;
        resultDiscount.innerHTML = "Discount is: $" + discount;
    } else {
        resultDiscount.innerHTML = "The second argument must be a number between 0 and 10";
    };
};