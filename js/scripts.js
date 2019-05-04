// var output= function(name){
//   return name;
// }
//
// $(document).ready(function(){
//   $(#fill form).submit(function(event){
//     event.preventDefault();
//     var name =$("input#name").val();
//     var email= $("input#email").val();
//     var message=$("input#message").val();
//
//     alert(output + "we have received your message. Thank you for reaching out to us.")
//   })
// })

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
  
})
