$(document).ready(function(){

  // var answers = []
  //
  // function pointTotal(name){
  //   var counter = 0;
  //   $('input:checkbox[name='+name+']:checked').each(function(){
  //     counter += 1;
  //   });
  //   answers.push(counter);
  // }
  //
  // pointTotal('warningSign');
  // pointTotal('symptom');
  // pointTotal('method');

  $('#stressForm').submit(function(event){
    //warningSign, symptom, method
    var counter= 0;
    $("input:checkbox[name=warningSign]:checked").each(function(){
      counter += 1;
    });
    $("input:checkbox[name=symptom]:checked").each(function(){
      counter += 1;
    });
    $("input:checkbox[name=method]:checked").each(function(){
      counter-= 1;
    });
    if (counter < 0) {
      alert("you are doing great");
    }
    else if (counter <=3) {
      alert ("you are just alive");
    }
    else {
      alert("go crazy relax alot");
    }


    event.preventDefault();
  });

});
