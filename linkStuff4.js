function myFunction4() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

  //window.open('mailto:rgrossman719@gmail.com?subject=I am in trouble &body=I am in trouble, send help!');
  console.log("fkhdk")
  $.post( "http://befrum.com/watchit/mailer4.php", function( data ) {

    window.open('http://www.twitter.com', '_blank')

  });

  }


  $( document ).ready(function() {
    $('.button4').click(function() {
      myFunction4()
    })
  });
