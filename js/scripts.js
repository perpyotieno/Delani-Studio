var output= function(name){
  return name;
}

$(document).ready(function(){
  $(#fill form).submit(function(event){
    event.preventDefault();
    var name =$("input#name").val();
    var email= $("input#email").val();
    var message=$("input#message").val();

    alert(output + "we have received your message. Thank you for reaching out to us.")
  })
})
