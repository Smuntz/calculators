const percentage = document.getElementById("percentage");
const cost = document.getElementById("cost"); 
let p = document.querySelector("p");
p.innerHTML = "Discounted Price $";

function calc() {
  p.innerHTML = "Discounted Price: $" + (Number(cost.value) - (Number(cost.value) * Number(percentage.value) / 100)).toFixed(2);
}