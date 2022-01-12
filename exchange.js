document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = () => {
        const options = {
            method: "GET",
            headers: { Accept: "application/json" },
        };
        fetch(
                "https://api.fastforex.io/fetch-all?api_key=1b025d2e71-117618aad8-r5kqjz",
                options
            )
            .then((response) => response.json())
            .then((data) => {
                const currency = document
                    .querySelector("#currency")
                    .value.toUpperCase();

                if (data.results[currency] == undefined) {
                    document.querySelector("#result").innerHTML = "Invalid Currency";
                } else {
                    document.querySelector("#result").innerHTML =
                        data.results[currency].toFixed(2);
                }
            })
            .catch((error) => {
                document.querySelector("#result").innerHTML = "Error: " + error;
            });

        return false;
    };
});