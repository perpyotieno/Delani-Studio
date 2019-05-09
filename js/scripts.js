$(document).ready(function(){
  $(".design").click(function(){
    $(".design").hide();
    $(".designp").toggle();
    $(".designp").show();
  })
  $(".designp").click(function(){
    $(".design").toggle();
    $(".designp").hide();
    $(".design").show();
  })
  $(".development").click(function(){
    $(".development").hide();
    $(".developmentp").toggle();
    $(".developmentp").show();
  })
  $(".developmentp").click(function(){
    $(".development").toggle();
    $(".developmentp").hide();
    $(".development").show();
  })
  $(".product-management").click(function(){
    $(".product-management").hide();
    $(".product-managementp").toggle();
    $(".product-managementp").show();
  })
  $(".product-managementp").click(function(){
    $(".product-management").toggle();
    $(".product-managementp").hide();
    $(".product-management").show();
  })

  $('.test').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
});
  $("button").click(function(event){
    event.preventDefault();
    var input1 = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var user = document.getElementById('contactform').reset();
    if (input1 && email != ''){
        alert('Thanks ' +   input1 + " we have received your message. Thank you for reaching out to us.");
    }else {
      alert ('Invalid input')
    }

     });


});
