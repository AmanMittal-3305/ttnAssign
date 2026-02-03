const calculator = {
    temp: undefined,

    read() {
        try {
            this.temp = Number(prompt("Enter temperature in Celsius:"));

            if (isNaN(this.temp)) {
                throw "Invalid input! Please enter numbers only.";
            }

            document.getElementById("temperature").value = this.temp;
            document.querySelector(".result").innerText =
                "Temperature read successfully.";

        } catch (err) {
            document.querySelector(".result").innerText = err;
        }
    },

    fahrenheit() {
        if (this.temp === undefined) {
            return "Please read temperature first.";
        }
        return `${this.temp} °C = ${(this.temp * 1.8 + 32)} °F`;
    },

    kelvin() {
        if (this.temp === undefined) {
            return "Please read temperature first.";
        }
        return `${this.temp} °C = ${this.temp + 273} K`;
    }
};

function readTemperature() {
    calculator.read();
}

function convertToFahrenheit() {
    document.querySelector(".result").innerHTML =
        calculator.fahrenheit();
}

function convertToKelvin() {
    document.querySelector(".result").innerHTML =
        calculator.kelvin();
}

function display() {
    if (calculator.temp === undefined) {
        document.querySelector(".result").innerText =
            "Please read temperature first.";
        return;
    }

    const celsius = calculator.temp;
    const fahrenheit = (celsius * 1.8) + 32;
    const kelvin = celsius + 273;

    document.querySelector(".result").innerHTML = `
        <strong>Temperature Values</strong><br><br>
        Celsius: ${celsius} °C <br>
        Fahrenheit: ${fahrenheit} °F <br>
        Kelvin: ${kelvin} K
    `;
}

