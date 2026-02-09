const calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = Number(prompt("Enter value of a:"));
        this.b = Number(prompt("Enter value of b:"));

        if (isNaN(this.a) || isNaN(this.b)) {
            document.querySelector(".result").innerText =
                "Invalid input! Please enter numbers only.";
            throw "Invalid input! Please enter numbers only.";
        }

        document.getElementById("first-number").value = this.a;
        document.getElementById("second-number").value = this.b;

        document.querySelector(".result").innerText =
            "Values read successfully";


    },

    add() {
        return `Addition of ${this.a} & ${this.b}`, this.a + this.b;
    },

    subtract() {
        return `Subtraction of ${this.a} & ${this.b}`, this.a - this.b;
    },

    multiply() {
        return `Mutliplication of ${this.a} & ${this.b}`, this.a * this.b;
    }
};


function inputValues() {
    calculator.read();
}

function addValues() {
    document.querySelector(".result").innerHTML =
        `Addition Result: ${calculator.add()}`;
}

function subtractValues() {
    document.querySelector(".result").innerHTML =
        `Subtraction Result: ${calculator.subtract()}`;
}

function multiplyValues() {
    document.querySelector(".result").innerHTML =
        `Multiplication Result: ${calculator.multiply()}`;
}
