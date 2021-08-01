let quantity = prompt("put product quantity");
let sum = 0;

for (var i = 1; i <= quantity; i++) {
  let item_price = prompt("product number1 price" + i);
  sum = sum + parseInt(item_price);
  document.getElementById("price-list").innerHTML +=
    "product number" + i + ":" + item_price + "pound" + "<br/>";
}
document.getElementById("result").innerHTML = " total price " + sum + " pound";
