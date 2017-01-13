/*ANIMATION MAP*/

function initMap() {
  var uluru = {lat: 41.145642444184055, lng: -8.601023554801941};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

/*ANIMATION SCROLL TOP*/

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        window.location.hash = hash;
      });
    }
  });
});
