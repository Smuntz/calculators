const rent = document.getElementById("rent");
let p = document.querySelector("p");
p.innerHTML = "Monthly Rent $";

function interest() {
    p.innerHTML = "Monthly Rent: $" + ((Number(rent.value) * 52) / 12).toFixed(2);
}