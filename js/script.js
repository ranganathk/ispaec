$(document).ready(function() {
  $('#find-button').click(function(e) {
    e.preventDefault();
    var checkinDateInput = new Date($("#checkin-date-input").val());
    var checkoutDateInput = new Date($("#checkout-date-input").val());
    var c = $("#number-of-people").val();
    var timeDiff = Math.abs(checkoutDateInput.getTime() - checkinDateInput.getTime());
    var numDays = Math.ceil(timeDiff/(1000*3600*24));
    var pm = 4000;
    var pw = 1200;
    var pd = 250;
    var price = c*(pm*(Math.floor(numDays/30)) + pw*Math.floor((numDays%30)/7) + pd*((numDays%30)%7)); 
    
    alert ("Your total bill amount = " + price);

  });
  
});
