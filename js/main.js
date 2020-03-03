// contact function
function userName(submit) {
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  alert("Hi " + name + " ,thank for contacting us we have recieved your message .");

};


// business logic
function Mypizza(type, size, crust, tops) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.tops = tops;
};

Mypizza.prototype.firstMypizza = function () {
  return this.type + " . Outermost layer is a crust of your choice and topping of your choice";
};


function Cost(price, number, pick) {
  this.price = price;
  this.number = number;
  this.pick = pick;

};

Cost.prototype.firstCost = function () {
  return this.price * this.number + this.pick;
};

var pizzaPrices = [1200, 950, 750];
var deliveryCost = [300, 0];
var crustingCost =[50,40,30];
var toppingCost = [80,60,50];




//user interface logic

$(document).ready(function () {
  $("#pizzaform").submit(function (event) {
    event.preventDefault();
    var typeOfPizza = $("#type").val();

    var sizeOfPizza = parseInt($("#size").val());

    var crustOfPizza = $("#crust").val();

    var topOfPizza = $("#topping").val();

    var numberOfPizza = parseInt($("#num").val());

    var pizzaDelivery = parseInt($("#mode").val());

    var finalPrice = pizzaPrices[sizeOfPizza] + toppingCost[topOfPizza] + crustingCost[crustOfPizza] ;
    var finalDelivery = deliveryCost[pizzaDelivery];

    var mypizza2 = new Mypizza(typeOfPizza, sizeOfPizza, crustOfPizza, topOfPizza);
    var total2 = new Cost(finalPrice, numberOfPizza, finalDelivery);
    //  console.log(pizzaDelivery);
    if (pizzaDelivery === 0) {
      prompt("Enter the place where Your pizza will be delivered.");
      alert("Thanks for placing an order which is " + mypizza2.firstMypizza() + ". And total cost of your pizza is ksh " + total2.firstCost());

    }
    else if (pizzaDelivery === 1) {

      alert("Thanks for placing order which is " + mypizza2.firstMypizza() + ". And total cost of your pizza is ksh " + total2.firstCost());

    }

  });
});
