function calculateSI(event) {
    event.preventDefault();

    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var si = (amount * rate * time) / 100;

    document.getElementsByClassName("detailsInterest")[0].innerHTML = `
        Amount: ${amount}<br>
        Rate of Interest: ${rate}%<br>
        Time: ${time} years<br>
        <strong>Simple Interest: ${si}</strong>
    `;
}
