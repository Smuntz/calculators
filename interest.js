const percentage = document.getElementById("percentage");
const balance = document.getElementById("balance");
let p = document.querySelector("p");
p.innerHTML = "Monthly Interest: $";

function interest() {
    p.innerHTML = "Monthly Interest: $" + ((Number(balance.value) * (Number(percentage.value) / 100)) / 12).toFixed(2);
}