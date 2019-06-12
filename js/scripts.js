$(document).ready(function() {
  $("#ready").submit(function(event) {
    event.preventDefault();

    $("#littlemoney1").click(function(){
      $("littlemoney1").slideDown();
    });
debugger;
    var number1 = ($("input#littlemoney2").val());
    var number2 = ($("input#bitmoremoney2").val());
    var number3 = ($("input#decentmoney2").val());
    var number4 = ($("input#lotsofmoney2").val());
    var number5 = ($("input#richaf2").val());


    $("#yourname1").append($("input#yourname2").val());

    if(number1 === "yes"){
      $("#littlemoney1").show();
      $("#bitmoremoney1").hide();
      $("#decentmoney1").hide();
      $("#lotsofmoney1").hide();
      $("#richaf1").hide();

    }else if(number1 ==="no" && number2 === "yes"){
      $("#littlemoney1").hide();
      $("#bitmoremoney1").show();
      $("#decentmoney1").hide();
      $("#lotsofmoney1").hide();
      $("#richaf1").hide();

    }else if(number1 && number2 ==="no" && number3 === "yes"){
      $("#littlemoney1").hide();
      $("#bitmoremoney1").hide();
      $("#decentmoney1").show();
      $("#lotsofmoney1").hide();
      $("#richaf1").hide();

    }else if(number1,number2,number3 === "no" && number4 === "yes"){
      $("#littlemoney1").hide();
      $("#bitmoremoney1").hide();
      $("#decentmoney1").hide();
      $("#lotsofmoney1").show();
      $("#richaf1").hide();

    }else if(number1 && number5 === "yes"){
      $("#littlemoney1").hide();
      $("#bitmoremoney1").hide();
      $("#decentmoney1").hide();
      $("#lotsofmoney1").hide();
      $("#richaf1").show();


}


  });
  });
