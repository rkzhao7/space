$(document).ready(function() {
    //hide all of the accordion items to start.
    $('.accordion-item').hide();
    
    //code to respond to clicking one of the buttons in div.filters
    $('.accordion-header').click(function() {
      // toggle show and hide
      $(this).next('.accordion-item').toggle(500);
      return false;
    }); //end accordion-header.click()
  }); //end document.ready()

  