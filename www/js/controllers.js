angular.module('starter')

.controller('AppCtrl', function(getData, AuthService,  $scope, $state, $ionicPopup, $ionicModal, AuthService) {

})
//controlador del login
.controller('LoginCtrl', function(getData, $scope, $state, $ionicPopup, $ionicLoading, AuthService) {
  $scope.data = {};
 
  $scope.login = function(data) {
    /*$ionicLoading.show({
        template: 'Iniciando sesión'
      });
    AuthService.login(data.username, data.password, function(token) {*/
      $state.go('prueba', {}, {reload: true});
    //});
  };
})


.controller('Tabs', function(getData, AuthService, $scope, $state, $http, $ionicPopup, AuthService) {
  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };
})


.controller('Prueba', function($scope) {
  $scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
  
  $scope.Filters = [
{ "title": "Gastronomía",
"filters" : [
{"name": "Rope", "checked": false},
{"name": "Cables", "checked": false},
{"name": "Step Box", "checked": false},
{"name": "Barbell", "checked": false},
{"name": "Dumbbell", "checked": false},
{"name": "Gym Ball", "checked": false},
{"name": "Foam Roller", "checked": false},
{"name": "Kettlebell", "checked": false}
]},
{
"title": "Deporte",
"filters" : [
{"name": "Fútbol", "checked": false},
{"name": "Tenis", "checked": false},
{"name": "Basquetbol", "checked": false},
{"name": "Handball", "checked": false},
{"name": "Ping Pong", "checked": false},
{"name": "Natación", "checked": false},
{"name": "Rugby", "checked": false},
]},
{
"title": "Cultura",
"filters" : [
{"name": "Fútbol", "checked": false},
{"name": "Tenis", "checked": false},
{"name": "Basquetbol", "checked": false},
{"name": "Handball", "checked": false},
{"name": "Ping Pong", "checked": false},
{"name": "Natación", "checked": false},
{"name": "Rugby", "checked": false},
]},
{
"title": "Social",
"filters" : [
{"name": "Fútbol", "checked": false},
{"name": "Tenis", "checked": false},
{"name": "Basquetbol", "checked": false},
{"name": "Handball", "checked": false},
{"name": "Ping Pong", "checked": false},
{"name": "Natación", "checked": false},
{"name": "Rugby", "checked": false},
]},
{
"title": "Espectáculos",
"filters" : [
{"name": "Fútbol", "checked": false},
{"name": "Tenis", "checked": false},
{"name": "Basquetbol", "checked": false},
{"name": "Handball", "checked": false},
{"name": "Ping Pong", "checked": false},
{"name": "Natación", "checked": false},
{"name": "Rugby", "checked": false},
]},

{
"title": "Cine",
"filters" : [
{"name": "Terror", "checked": false},
{"name": "Acción", "checked": false},
{"name": "Drama", "checked": false},
{"name": "Comedia", "checked": false},
{"name": "Ciencia Ficción", "checked": false},
{"name": "Infantil", "checked": false},
{"name": "Parodia", "checked": false},

]},
{
"title": "Música ",
"filters" : [
{"name": "Foot & Shin", "checked": false},
{"name": "Calf", "checked": false},
{"name": "Quads", "checked": false},
{"name": "Neck", "checked": false},
{"name": "Triceps", "checked": false},
{"name": "Biceps", "checked": false},
{"name": "Wrist & Hand", "checked": false}
]},

{
"title": "Arte",
"filters" : [
{"name": "Foot and Ankle", "checked": false},
{"name": "Knee", "checked": false},
{"name": "Hip & Pelvis", "checked": false},
{"name": "Lumbar ", "checked": false},
{"name": "Thoracic Region", "checked": false},
{"name": "Cervical", "checked": false},
{"name": "Shoulder", "checked": false},
{"name": "Elbow, Wrist & Hand", "checked": false}
]}
] 

  
  
  
  
  
})

.controller('HomeTabCtrl', function(saveAmmount, $scope, $state, $rootScope, $http, $q, $ionicLoading, $sce, $ionicPopup, AuthService, getData) {

})

.controller('solicitudCtrl',function(saveAmmount, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

})

.controller('ofertasCtrl',function(passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

})



.controller('showOffers',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){
})


.controller('pendientesCtrl',function($scope, $ionicLoading, $ionicModal){

    var geocoder;
    $scope.places = [
    {
        id : '1',
        name : 'El principito',
        desc : 'Centro de Eventos Matucana 100',
        description: 'Novela clásica escrita por Antoine de Saint-Exupéry llevada al teatro dirigida a toda la familia',
        lat : -33.44471866212755,
        long : -70.67959785461426
    },
    {
        id : '2',
        name : 'Guirnaldas de Luz',
        desc : 'Museo Interactivo Artequin',
        description: 'Actividad para toda la familia, en que los niños pueden crear sus propios adornos navideños',
        lat : -33.44455751997385,
        long : -70.68420052528381 
    },
    {
        id : '3',
        name : 'Exposición 40a aniversario',
        desc : 'Museo Ferroviario de Santiago',
        description: 'Conmemoración del 40a aniversario del Museo Ferroviario, invitados por confirmar',
        lat : -33.443250466999814,
        long : -70.68514466285706 
    },
    {
        id : '4',
        name : 'Astronomía',
        desc : 'Museo de Ciencias y tecnología',
        description: 'El universo se toma el museo para acercarnos a galaxias lejanas con juegos de luces y proyecciones en vivo',
        lat : -33.44004541814073,
        long : -70.68369626998901 
    },
    {
        id : '5',
        name : 'Defensa, promoción y denuncia',
        desc : 'Museo de la Memoria y los Derechos Humanos',
        description: 'Galeria de fotografías inéditas tomadas en dictadura por fotografos aficionados',
        lat : -33.440009606870085,
        long : -70.67945301532745 
    },
    {
        id : '6',
        name : 'Expo Vegan',
        desc : 'Plaza Yungay',
        description: 'Los mejores exponentes de Santiago se reunen en uno de los lugares íconos de la comuna a presentar sus mejores recetas y degustar a la gente con una tarde entretenida en familia',
        lat : -33.437440109624404,
        long : -70.67399740219116 
    }
];
  $scope.init = function() {
        var myLatlng = new google.maps.LatLng(-33.440009606870085, -70.67945301532745);
        var mapOptions = {
            center: myLatlng,
            zoom: 15.5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var lat_lng = [];

        for (i = 0; i < $scope.places.length;i++){
            lat_lng.push(new google.maps.LatLng($scope.places[i].lat, $scope.places[i].long))
        }
 
        $scope.map = map;
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow({
          maxWidth: 200,
          maxHeight: 100
        });
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                label: info.id,
                animation: google.maps.Animation.DROP,
                title: info.name
            });

            var information = '<div style="height: 100px;">' +
                    '<h4>'+info.name+'</h4>' +
                    '<h5>'+info.desc+'</h5>' +
                      '<p>'+info.description+'</p>' +
                  '</div>';
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(information);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 0; i < $scope.places.length; i++){
            createMarker($scope.places[i]);
        }

        // Additional Markers //
        for (var t = 0;
        (t + 1) < lat_lng.length; t++) {
        //Intialize the Direction Service
        var service = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var bounds = new google.maps.LatLngBounds();
        if ((t + 1) < lat_lng.length) {
          var src = lat_lng[t];
          var des = lat_lng[t + 1];
          service.route({
            origin: src,
            destination: des,
            travelMode: google.maps.DirectionsTravelMode.WALKING
          }, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              // new path for the next result
              var path = new google.maps.MVCArray();
              //Set the Path Stroke Color
              // new polyline for the next result
              var poly = new google.maps.Polyline({
                map: map,
                strokeColor: '#E80606'
              });
              poly.setPath(path);
              for (var k = 0, len = result.routes[0].overview_path.length; k < len; k++) {
                path.push(result.routes[0].overview_path[k]);
                bounds.extend(result.routes[0].overview_path[k]);
                map.fitBounds(bounds);
              }
            } else alert("Directions Service failed:" + status);
          });
        }
      }

    };

    $ionicModal.fromTemplateUrl('templates/modal.html',function($ionicModal) {
      $scope.modal = $ionicModal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.openModal = function(info) {
      var Format = wNumb({
        prefix: '$',
        decimals: 0,
        thousand: '.'
      });
      $scope.selectedNombre = nombre;
      $scope.selectedMonto = Format.to(monto);
      $scope.selectedFolio = folio;
      $scope.selectedEmision = new Date(emision).toUTCString();
      $scope.selectedExpira = new Date(expira).toUTCString();
      $scope.selectedErp= erp;
      $scope.selectedReceiver= receiver;
      $scope.selectedIssuing= issuing;
      $scope.modal.show();
    }
    $scope.closeModal = function(id) {
      $scope.selectedId = id;
      $scope.modal.hide();
    }


    ionic.Platform.ready($scope.init); 
})

.controller('offerDetails',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

})