function send_message(message){
    var previousMessage=  $("#display").html();
    // console.log(previousMessage.length);
     if(previousMessage.length >8){
         previousMessage=previousMessage+"<br>";
        
     }
     $("#display").html(previousMessage +"<span class='bot'>Bot :</span>"+message);
    
}
function userName(){
    send_message("Helo, what is ur name?");
}
$(function(){
    userName();
$("#userTextBox").keypress(function(event){
    if(event.which == 13){

        $("#submit").click();
// event.preventDefault();

    }
});
$("#submit").click(function(){
   
    var userMessage=$("#userTextBox").val();
    var user="<span class ='user'> You : </span>";
     var previousMessage=  $("#display").html();
   // console.log(previousMessage.length);
    if(previousMessage.length >8){
        previousMessage=previousMessage+"<br>";
       
    }
    $("#display").html(previousMessage +user+userMessage);
    ai(userMessage);
    $("#userTextBox").val("");
    $("#display").scrollTop($("#display").prop("scrollHeight"));
   
});
});
 var username="";
function ai(message){
  if(username.length<3){
    username=message;
send_message(" nice to meet you " +username+" how are you ?");
  }
if(message.indexOf("how are you")>=0 ||message.indexOf("what about you")>=0){
send_message("thanks for asking,iam fine ");
send_message("have you ate something?");
}

if(message.indexOf("no")>=0 ||message.indexOf("not yet")>=0){
    send_message("go eat and come i will wait for you "); }

if(message.indexOf("what you do")>=0 ||message.indexOf("what are you doing")>=0){
    send_message(" thinking "+ username +" what to do, what about you?");
    }

}