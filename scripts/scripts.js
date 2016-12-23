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
