$(document).ready(function() {
  $("#ready").submit(function(event) {
    event.preventDefault();

debugger;
    var number1 = ($("input#style2").val());
    var number2 = ($("input#money2").val());
    var number3 = ($("input#life2").val());
    var number4 = ($("input#beer2").val());
    var number5 = ($("input#darts2").val());


    if(number1 === "yes"){
      $("#style1").show();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").hide();

    }else if(number1 ==="no" && number2 === "yes"){
      $("#style1").hide();
      $("#money1").show();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").hide();

    }else if(number1 && number2 ==="no" && number3 === "yes"){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").show();
      $("#beer1").hide();
      $("#darts1").hide();

    }else if(number1,number2,number3 === "no" && number4 === "yes"){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").show();
      $("#darts1").hide();

    }else if(number1,number2,number3,number4 === "no" && number5 === "yes"){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").show();


}


  });
  });
