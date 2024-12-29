
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const moneyToConvert = document.querySelector(".money-to-convert");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConvert = document.querySelector(".currency-value");

    console.log(moneyToConvert.value)
    //console.log(currencySelect.value)                                                                         
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.2;
    const bitcointoday = 307.089;


    if (moneyToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    }

    if (currencySelect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-RE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * dolarToday) / euroToday);
    }

    else if (currencySelect.value == "libra")
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format((inputCurrencyValue * dolarToday) / libraToday);

    else if (currencySelect.value == "bitcoin")
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format((inputCurrencyValue * dolarToday) / bitcointoday);

    else if (currencySelect.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue);
    }

    if (moneyToConvert.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue);

    if (currencySelect.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);

    }
    else if (currencySelect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)

    }

    else if (currencySelect.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)

    }

    else if (currencySelect.value == "bitcoin") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcointoday)

    }
}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyToConvertName = document.querySelector(".currency");
    const currencyToConvertImg = document.querySelector(".currency-to-convert-img");

    if (moneyToConvert.value == "dolar") {
        currencyToConvertName.innerHTML = "Dólar americano";
        currencyToConvertImg.src = "./assets/dolar.png";
    } else if (moneyToConvert.value == "real") {
        currencyToConvertName.innerHTML = "Real brasileiro";
        currencyToConvertImg.src = "./assets/real.png";
    }


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }



    convertValues();
}

moneyToConvert.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);