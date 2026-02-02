function calculateArea(event) {
    event.preventDefault()
    var radius = document.getElementById("radius").value
    var area = 3.14 * radius * radius;

    document.getElementsByClassName("calculateArea")[0].innerHTML = `
    Radius : ${radius} <br>
    Area : ${area}
    `
}