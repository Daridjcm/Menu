const dishData = [
    {
        name: 'Italian pasta',
        price: 9.55
    },
    {
        name: 'Rice with veggies',
        price: 8.65
    },
    {
        name: 'Chicken with potatoes',
        price: 15.55
    },
    {
        name: 'Vegetarian Pizza',
        price: 6.45
    },
    {
        name: 'Pepperoni Pizza',
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
            resultPrices.innerHTML = 'You need to pass a boolean to the getPrices call!';
            return;
        };
        resultPrices.innerHTML += `
        <span class='dish-name'>${dish.name}</span> <span class='final-price'>$${finalPrice}</span> <br><br>
        </div>`;
    };
};

// Implement getDiscount()
function getDiscount() {
    var inputGuests = document.getElementById('inputGuests').value;
    var discount = 0;

    if (inputGuests >= 5 && inputGuests < 10) {
        discount = 10;
    } else if (inputGuests >= 10 && inputGuests < 15) {
        discount = 15;
    } else if (inputGuests >= 15 && inputGuests < 20) {
        discount = 20;
    } else if (inputGuests >= 20 && inputGuests < 25) {
        discount = 25;
    } else if (inputGuests >= 25) {
        discount = 30;
    };
    document.getElementById('resultDiscount').innerText = 'Discount: ' + discount + '%';
    document.getElementById('btnInputDiscount').disabled = false;
};