function position(map) {
       var myPoint = new LatLonPoint(38.693848, -9.304395);
	   map.setCenterAndZoom(myPoint, 16);
	   map.setMapType(Mapstraction.SATELLITE);

       var marker = new Marker(myPoint);
       marker.setInfoBubble("<b>Restaurante Yum Cha</b>");
		map.addMarker(marker);
}

function mapWhere()
{	
	  var gmapstraction = new Mapstraction('gmap','google');
	  gmapstraction.addControls({
                pan: true, 
                zoom: 'small',
                map_type: true 
            });

      position(gmapstraction);

       var ycsync = function() {
        var center = ymapstraction.getCenter();
		gmapstraction.setCenter(center);
		mmapstraction.setCenter(center);
		osmapstraction.setCenter(center);
		center = undefined;
      };
	  
        var yzsync = function() {
        var zoom = ymapstraction.getZoom();
        gmapstraction.setZoom(zoom);
		mmapstraction.setZoom(zoom);
		osmapstraction.setZoom(zoom);
		zoom = undefined;
      };

}