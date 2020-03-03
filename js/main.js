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
