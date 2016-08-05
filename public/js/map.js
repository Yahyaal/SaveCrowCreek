
mapboxgl.accessToken = 'pk.eyJ1IjoieWFoeWFhbCIsImEiOiJjaWoyNXlmYXEwMGZ5dHJtNGFlYWxuZ2I5In0.zMIaGbWHm1rtPpzlEV1XoA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [-95.973, 36.121], // starting position
    zoom: 14 // starting zoom
});

map.scrollZoom.disable(); // disabling scroll zoom

//add map style selection
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v8');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

//add highlight for the river
map.on('style.load', function () {
    map.addSource("route", {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                [-95.98536,36.116981],[-95.985091,36.117085],[-95.984888,36.117128],[-95.984716,36.117128],[-95.984523,36.117146],[-95.984287,36.117128],[-95.983428,36.116972],[-95.982484,36.116695],[-95.982356,36.116504],[-95.982291,36.11647],[-95.982044,36.116487],[-95.981411,36.116314],[-95.981293,36.116262],[-95.980489,36.11614],[-95.97977,36.11569],[-95.979577,36.11556],[-95.97933,36.115456],[-95.979276,36.11523],[-95.979191,36.115161],[-95.978536,36.115135],[-95.978171,36.115438],[-95.978085,36.115473],[-95.977667,36.11549],[-95.977131,36.115802],[-95.976948,36.115872],[-95.976669,36.115872],[-95.976498,36.115906],[-95.975586,36.116218],[-95.974813,36.116496],[-95.974084,36.116634],[-95.973891,36.116652],[-95.973697,36.116652],[-95.973526,36.116608],[-95.972689,36.116392],[-95.972292,36.116357],[-95.972142,36.116418],[-95.971627,36.116912],[-95.971541,36.117128],[-95.971477,36.117388],[-95.971423,36.117466],[-95.971165,36.117588],[-95.971004,36.117683],[-95.970929,36.117822],[-95.970929,36.117969],[-95.970994,36.118229],[-95.971498,36.118948],[-95.971498,36.119122],[-95.971369,36.119425],[-95.971069,36.119711],[-95.970768,36.120162],[-95.970693,36.120248],[-95.970597,36.120422],[-95.9705,36.120491],[-95.969588,36.120534],[-95.969492,36.120552],[-95.969427,36.120586],[-95.969374,36.120656],[-95.96932,36.120742],[-95.969449,36.121141],[-95.969427,36.121349],[-95.969427,36.121436],[-95.969449,36.121505],[-95.969384,36.121696],[-95.96947,36.121938],[-95.969578,36.122285],[-95.969524,36.122389],[-95.969406,36.122502],[-95.969234,36.122658],[-95.969009,36.122736],[-95.968794,36.122805],[-95.96873,36.12277],[-95.968623,36.122718],[-95.968548,36.122632],[-95.968451,36.12258],[-95.968301,36.12258],[-95.96814,36.122675],[-95.968075,36.122822],[-95.968097,36.123048],[-95.968011,36.123212],[-95.967947,36.123299],[-95.967882,36.123429],[-95.967872,36.123568],[-95.967925,36.123724],[-95.96799,36.123932],[-95.968354,36.124278],[-95.968387,36.124374],[-95.968354,36.124512],[-95.968312,36.124582],[-95.967925,36.124738],[-95.9677,36.124911],[-95.967303,36.12505],[-95.96711,36.125128],[-95.966445,36.126089],[-95.966058,36.126176],[-95.965533,36.126367],[-95.965329,36.126228],[-95.96476,36.125994],[-95.964642,36.125985],[-95.964041,36.125725],[-95.963741,36.125864],[-95.96343,36.125682],[-95.96314,36.125933],[-95.96299,36.125916],[-95.962421,36.125544],[-95.962228,36.1255],[-95.962132,36.12537],[-95.962078,36.125396],[-95.962046,36.12531],[-95.961928,36.125327],[-95.961788,36.125414],[-95.961563,36.125379],[-95.961434,36.125431],[-95.961424,36.125535],[-95.961402,36.125613],[-95.961327,36.125639],[-95.961252,36.125578],[-95.961188,36.125544],[-95.961112,36.125587],[-95.961016,36.125604],[-95.960994,36.12557],[-95.960984,36.125483],[-95.960984,36.125431],[-95.960887,36.125422],[-95.960812,36.125457],[-95.960758,36.125448],[-95.960673,36.125422],[-95.960404,36.125405],[-95.960308,36.125422],[-95.960179,36.125353],[-95.959943,36.125414],[-95.959879,36.125388],[-95.959761,36.12544],[-95.959621,36.125422],[-95.959289,36.125301],[-95.959106,36.125405],[-95.959074,36.125492],[-95.959203,36.125561],[-95.959235,36.125639],[-95.959117,36.125691],[-95.958999,36.125699],[-95.958881,36.125691],[-95.958817,36.12563],[-95.958677,36.12557],[-95.958538,36.125509],[-95.958387,36.125492],[-95.95828,36.125492],[-95.958044,36.125492],[-95.95799,36.125388],[-95.957787,36.125336],[-95.957626,36.125206],[-95.957411,36.125232],[-95.957443,36.125336],[-95.957325,36.125388],[-95.956499,36.125171],[-95.956435,36.125128],[-95.956306,36.124894],[-95.956145,36.124876],[-95.956038,36.124937],[-95.955898,36.124928],[-95.955791,36.124894],[-95.955491,36.124564],[-95.955458,36.124495],[-95.955512,36.124382],[-95.955426,36.124278],[-95.955147,36.124218]
                ]
            }
        }
    });

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": "route",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#f1f075",
            "line-width": 10,
            "line-opacity":0.4
        }
    });
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.Navigation());