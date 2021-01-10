// $("#nil").text("Abdul Motaleb sir")

// $("#nil").append("Abdul Motaleb sir")
// $("#nil").prepend("Abdul Motaleb munna")


// var mypara=$("<p></p>").text("This is paragraph 0")
// $("p").before(mypara)
// var myhat=$("<h1></h1>").text("This is heading")
// $("h1").after(myhat)
// $("a").attr("href", "https://www.facebook.com/mkmotaleb201")

// $("h3").css("color","red")
// $("h3").css("font-size","3rem")
// $("h3").css("background-color","green")
// $("h3").css("padding","10px")
// $("h3").css("text-align","center")
// $("h3").css("font-style","italic")
// $("h3").css({"border-radius":"10px","text-align":"left"})
// $("h4").addClass("nil nil2")
// $("h5").removeClass("nil nil2")



// $("button").click(function(){
// $("h1").toggleClass("nil")

$("#loginbutton").click(function(){


   var password1=$("#pass1").val();
   var password2=$("#pass2").val();
   if(password1 !="" && password2 !=""){
       if(password1==password2){
           alert("Successfully LogIn")
       }else{
           alert("This was Password worng!");
       }

   }else{
       alert("Please Enter Password!");
   }


});

    // $(".mybutton").on("mouseover", function(){
    //     var value=this.innerHTML;
    //     $("h1").text(value +" is clicked")
    // })
