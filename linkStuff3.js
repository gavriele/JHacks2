function myFunction3() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

  //window.open('mailto:rgrossman719@gmail.com?subject=I am in trouble &body=I am in trouble, send help!');
  console.log("fkhdk")
  $.post( "http://befrum.com/watchit/mailer3.php", function( data ) {

    window.open('http://www.pinterest.com', '_blank')

  });

  }


  $( document ).ready(function() {
    $('.button3').click(function() {
      myFunction3()
    })
  });