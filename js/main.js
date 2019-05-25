requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    'async': 'async',
    'goog': 'goog',
    'propertyParser' : 'propertyParser'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

define(
  'gmaps',
  ['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCwqQ_rzP4UfNTdgLea3YJ-t3PFE0XCOFk&libraries=geometry&amp;sensor=false'],
function(){
  return window.google.maps;
});

requirejs([
  'app/route',
  'gmaps',
],
function(route, gmaps) {
  // all ready!
});
