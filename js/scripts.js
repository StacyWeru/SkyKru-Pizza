 
function getSize() {
  var size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}

function getTopping() {
  var topping = document.getElementById("pizzaTopping").value;
  return parseInt(topping);
}

function getCheese() {
  var cheese = document.getElementById("pizzaCheese").value;
  return parseInt(cheese);
}

function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(number);
}

/*to calculate the total amount */
function totalAmount() {
  var totals = (getSize() + getCrust() + getTopping() + getCheese()) * getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," + 
    "" +
    " amounting to ksh. " +
    totals +
    "" +
    " Thanks for your order welcome again."
  );
}




