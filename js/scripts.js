$(document).ready(function() {

    var favorites = ["berry", "coffee", "coconut", "vanila"];

    // favorites.forEach(function(flavor) {
    //   $("ul").append("<li>" + favorites + "</li>");
    // });

    var cars = ["honda", "ford", "gm"]

    cars.forEach(function(cars) {
      $("ul").append("<li>" + cars + "</li>");
      $("p").text(cars);
      cars.toString();
      alert(cars);
    });
});
