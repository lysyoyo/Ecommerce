function removeLetterInput() {
    const price = document.querySelector('.price');
    price.addEventListener('input', function (e) {
        let inputValue = e.target.value;
        let numericValue = inputValue.replace(/[^\d]/g, '');
        e.target.value = numericValue;
        let isValid = /^\d+$/.test(numericValue);
        if (!isValid || numericValue < 0) {
            return price.classList.add('priceError');
        } else if (numericValue > 0) {
            return price.classList.remove('priceError');
        }
    });

    const prices = document.querySelector('#price');
    prices.addEventListener('input', function (e) {
        let inputValue = e.target.value;
        let numericValue = inputValue.replace(/[^\d]/g, '');
        e.target.value = numericValue;
        let isValid = /^\d+$/.test(numericValue);
        if (!isValid || numericValue < 0) {
            return prices.classList.add('priceError');
        } else if (numericValue > 0) {
            return prices.classList.remove('priceError');
        }
    });
}

function checkbox() {
    const checkbox = document.querySelector('.checkbox');
    const productData = {
        is_in_inventory: undefined,
    };

    checkbox.addEventListener('change', function (event) {
        productData.is_in_inventory = checkbox.checked;
        console.log(productData.is_in_inventory);
    });
}


checkbox();
removeLetterInput();
