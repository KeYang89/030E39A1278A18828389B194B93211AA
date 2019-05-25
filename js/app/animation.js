define(['gmaps'],function(gmaps){
  var animationIndex = 0;

  function animateRoute(coords, map, stopAnimation=false) {

    var self = this,
        step = 0,
        numSteps = 220,
        animationSpeed = 0.10,
        offset = animationIndex,
        nextOffset = animationIndex + 1,
        departure, destination, nextStop, line, interval;

    if (nextOffset >= coords.length) {
      clearInterval(interval);
      return false;
    }

    departure = coords[offset];
    destination = coords[nextOffset];

    line = new gmaps.Polyline({
      path: [departure, departure],
      geodesic: false,
      strokeColor: 'red',
      strokeOpacity: 1,
      strokeWeight: 2,
      map: map
    });

    interval = setInterval(function() {
        if (stopAnimation){
          animateRoute(coords, map, stopAnimation);
          return false;
        }
        step++;
        if (step > numSteps) {
          animationIndex++;
          animateRoute(coords, map, stopAnimation);
          clearInterval(interval);
        } else {
          nextStop = gmaps.geometry.spherical.interpolate(departure,destination,step/numSteps);
          line.setPath([departure, nextStop]);
        }
        

      

    }, animationSpeed);
  }

  return animateRoute;
});
