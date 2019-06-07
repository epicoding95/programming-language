$(document).ready(function() {
  $("form#ready").submit(function(event) {
    event.preventDefault();
debugger;

    var number1 = ($("#style1").val());
    var number2 = ($("#money1").val());
    var number3 = ($("#life1").val());
    var number4 = ($("#beer1").val());
    var number5 = ($("#darts1").val());


    if(style1 === "yes"){
      $("#style1").show();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").hide();

    }else if((total >= 11)&& (total <=30)){
      $("#style1").hide();
      $("#money1").show();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").hide();
    }else if((total >= 11)&& (total <=30)){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").show();
      $("#beer1").hide();
      $("#darts1").hide();
      }else if((total >= 11)&& (total <=30)){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").show();
      $("#darts1").hide();
      }else if((total >= 11)&& (total <=30)){
      $("#style1").hide();
      $("#money1").hide();
      $("#life1").hide();
      $("#beer1").hide();
      $("#darts1").show();


    }

  });
  });
