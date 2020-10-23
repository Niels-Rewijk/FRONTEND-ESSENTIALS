var voornaam = prompt("Wat is je voornaam?")
var achternaam = prompt("Wat is je achternaam?")
var leeftijd = prompt("wat is je leeftijd?")
var email = prompt("wat is je email?")
var woonplaats = prompt("waar woon je?")

document.getElementById("naam").innerHTML = voornaam;
document.getElementById("achter").innerHTML = achternaam;
document.getElementById("age").innerHTML = leeftijd;
document.getElementById("mail").innerHTML = email;
document.getElementById("plaats").innerHTML = woonplaats;
if (leeftijd == 16) {
    document.body.style.backgroundColor = "orange";
}
if (leeftijd == 17) {
    document.body.style.backgroundColor = "blue";
}
if (leeftijd == 18) {
    document.body.style.backgroundColor = "yellow";
}
if (leeftijd == 19) {
    document.body.style.backgroundColor = "green";
}
if (leeftijd == "") {
    document.body.style.backgroundColor = "red";
}