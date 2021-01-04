// Map Javascvript API

function initMap() {
  const myLatLng = { lat: -7.795580, lng: 110.369492 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Yogyakarta",
  });
}

// Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#navbar a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 
      800);
    } // End if
  });
});

// Sticky menu background

window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  } else{
    document.querySelector('#navbar').style.opacity = 1;
  }
});

