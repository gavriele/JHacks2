function myFunction() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

  //window.open('mailto:rgrossman719@gmail.com?subject=I am in trouble &body=I am in trouble, send help!');
  console.log("fkhdk")
  $.post( "http://befrum.com/watchit/mailer.php", function( data ) {

    window.open('http://www.facebook.com', '_blank')

  });

  }


  $( document ).ready(function() {
    $('.button1').click(function() {
      myFunction()
    })
  });