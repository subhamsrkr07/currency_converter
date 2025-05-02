
    const amountInput = document.querySelector("input[type='text']");
    const fromCurrency = document.querySelector("select[name='from']");
    const toCurrency = document.querySelector("select[name='to']");
    const exchangeMsg = document.querySelector(".msg");
    const convertButton = document.querySelector("button");

    const exchangeRates = {
        USD: { EUR: 0.85, MYR: 0.75, INR: 83.0 },
        EUR: { USD: 1.18, MTR: 0.88, INR: 90.0 },
        MYR: { USD: 1.33, EUR: 1.14, INR: 104.0 },
        INR: { USD: 0.012, EUR: 0.011, MYR: 0.0096}
    };

    convertButton.addEventListener("click", async function (event) {
        event.preventDefault();
        const amount = amountInput.value;
        if (isNaN(amount) || amount <= 0) {
            exchangeMsg.innerHTML = "Please enter a valid amount.";
            return;
        }

        const from = fromCurrency.value;
        const to = toCurrency.value;
       
        const exchangeRate = exchangeRates[from][to];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        exchangeMsg.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
        
    });




