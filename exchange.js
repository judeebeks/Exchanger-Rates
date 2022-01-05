document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = () => {
        fetch(
                "http://api.exchangeratesapi.io/v1/latest?access_key=96b45351a6188f08f13f7813dc2a0256"
            )
            .then((response) => response.json())
            .then((data) => {
                const currency = document
                    .querySelector("#currency")
                    .value.toUpperCase();
                const newBase = {...data, base: "USD" };
                if (newBase.rates[currency] == undefined) {
                    document.querySelector("#result").innerHTML = "Invalid Currency";
                } else {
                    document.querySelector("#result").innerHTML = newBase.rates[currency];
                }
            })
            .catch((error) => {
                document.querySelector("#result").innerHTML = "Error: " + error;
            });

        return false;
    };
});