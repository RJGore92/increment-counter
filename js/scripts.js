function countByIncrement(numberLow, numberHigh) {
  var numberOne = numberLow;
  var numberTwo = numberHigh;
  for (var i = numberOne; i <= numberTwo; i+= numberOne) {
    if (i <= numberTwo) {
      $("ul#increments").append("<li>" + i + "</li>");
      console.log(i);
    }
  }
}

$(document).ready(function() {
  $("form#numbers-to-count").submit(function(event) {
    event.preventDefault();
    $("#results").show();
    $("ul#increments").empty();
    var numberLow = 1;
    var numberHigh = 1;
    var numberInOne = parseInt($("input#number-one").val());
    var numberInTwo = parseInt($("input#number-two").val());
    if (numberInOne > numberInTwo) {
      numberLow = numberInTwo;
      numberHigh = numberInOne;
    }
    else {
      numberLow = numberInOne;
      numberHigh = numberInTwo;
    }
    countByIncrement(numberLow, numberHigh);
  });
});
