const convertBotao = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConver = document.querySelector(".currency-value-to-convert")
    const currencyValueConvertd = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2


    if(currencySelect.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConver.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertBotao.addEventListener("click",  convertValue )