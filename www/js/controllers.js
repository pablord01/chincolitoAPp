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
{"name": "Restaurantes", "checked": false},
{"name": "Comida al paso", "checked": false},
{"name": "Food Truck", "checked": false},
{"name": "Cafeterias", "checked": false},
{"name": "Servicio Buffet", "checked": false},
{"name": "Comida rápida", "checked": false}
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
{"name": "Museos", "checked": false},
{"name": "Ferias costumbristas", "checked": false},
{"name": "Teatro", "checked": false},
{"name": "Danza", "checked": false},
{"name": "Artes plásticas", "checked": false},
{"name": "Fotografía", "checked": false}
]},
{
"title": "Cine",
"filters" : [
{"name": "Terror", "checked": false},
{"name": "Acción", "checked": false},
{"name": "Drama", "checked": false},
{"name": "Comedia", "checked": false},
{"name": "Sicológico", "checked": false},
{"name": "Ciencia Ficción", "checked": false},
{"name": "Infantil", "checked": false},
{"name": "Parodia", "checked": false},

]},
{
"title": "Música ",
"filters" : [
{"name": "Conciertos", "checked": false},
{"name": "Presentación al aire libre", "checked": false},
{"name": "Festivales", "checked": false},
{"name": "Micrófono abierto", "checked": false}
]},

{
"title": "Arte",
"filters" : [
{"name": "Talleres gratuitos", "checked": false},
{"name": "Exposiciones de arte", "checked": false},
{"name": "Charlas y conversatorios", "checked": false}
]}
] 

  
  
  
  
  
})

.controller('Prueba1', function($scope) {
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
{"name": "Restaurantes", "checked": false},
{"name": "Comida al paso", "checked": false},
{"name": "Food Truck", "checked": false},
{"name": "Cafeterias", "checked": false},
{"name": "Servicio Buffet", "checked": false},
{"name": "Comida rápida", "checked": false}
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
{"name": "Museos", "checked": false},
{"name": "Ferias costumbristas", "checked": false},
{"name": "Teatro", "checked": false},
{"name": "Danza", "checked": false},
{"name": "Artes plásticas", "checked": false},
{"name": "Fotografía", "checked": false}
]},
{
"title": "Cine",
"filters" : [
{"name": "Terror", "checked": false},
{"name": "Acción", "checked": false},
{"name": "Drama", "checked": false},
{"name": "Comedia", "checked": false},
{"name": "Sicológico", "checked": false},
{"name": "Ciencia Ficción", "checked": false},
{"name": "Infantil", "checked": false},
{"name": "Parodia", "checked": false},

]},
{
"title": "Música ",
"filters" : [
{"name": "Conciertos", "checked": false},
{"name": "Presentación al aire libre", "checked": false},
{"name": "Festivales", "checked": false},
{"name": "Micrófono abierto", "checked": false}
]},

{
"title": "Arte",
"filters" : [
{"name": "Talleres gratuitos", "checked": false},
{"name": "Exposiciones de arte", "checked": false},
{"name": "Charlas y conversatorios", "checked": false}
]}
] 

  
  
  
  
  
})

.controller('modal', function($scope) {
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
  
})


.controller('HomeTabCtrl', function(saveAmmount, $scope, $state, $rootScope, $http, $q, $ionicLoading, $sce, $ionicPopup, AuthService, getData) {

})



.controller('prerutaCtrl', function($ionicModal, $scope, $state, $rootScope, $http, $q, $ionicLoading, $sce, $ionicPopup, AuthService, getData) {
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
{"name": "Restaurantes", "checked": false},
{"name": "Comida al paso", "checked": false},
{"name": "Food Truck", "checked": false},
{"name": "Cafeterias", "checked": false},
{"name": "Servicio Buffet", "checked": false},
{"name": "Comida rápida", "checked": false}
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
{"name": "Museos", "checked": false},
{"name": "Ferias costumbristas", "checked": false},
{"name": "Teatro", "checked": false},
{"name": "Danza", "checked": false},
{"name": "Artes plásticas", "checked": false},
{"name": "Fotografía", "checked": false}
]},
{
"title": "Cine",
"filters" : [
{"name": "Terror", "checked": false},
{"name": "Acción", "checked": false},
{"name": "Drama", "checked": false},
{"name": "Comedia", "checked": false},
{"name": "Sicológico", "checked": false},
{"name": "Ciencia Ficción", "checked": false},
{"name": "Infantil", "checked": false},
{"name": "Parodia", "checked": false},

]},
{
"title": "Música ",
"filters" : [
{"name": "Conciertos", "checked": false},
{"name": "Presentación al aire libre", "checked": false},
{"name": "Festivales", "checked": false},
{"name": "Micrófono abierto", "checked": false}
]},

{
"title": "Arte",
"filters" : [
{"name": "Talleres gratuitos", "checked": false},
{"name": "Exposiciones de arte", "checked": false},
{"name": "Charlas y conversatorios", "checked": false}
]}
] 

  
  
  
  
  
})


.controller('pendientesCtrl', function(saveAmmount, $scope, $state, $rootScope, $http, $q, $ionicLoading, $sce, $ionicPopup, AuthService, getData) {

})
.controller('solicitudCtrl',function(saveAmmount, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

 $scope.clearSearch = function() {
    $scope.search = "";
  };

$ionicModal.fromTemplateUrl('templates/modal.html',function($ionicModal) {
      $scope.modal = $ionicModal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.openModal = function(nombre,imagen,detalle, fecha, hora, lugar) {
      var Format = wNumb({
        prefix: '$',
        decimals: 0,
        thousand: '.'
      });
      $scope.selectedNombre = nombre;
      $scope.selectedImagen = imagen;
      $scope.selectedDetalle = detalle;
      $scope.selectedFecha = fecha;
      $scope.selectedHora = hora;
      $scope.selectedLugar = lugar;

    
      $scope.modal.show();
    }
    $scope.closeModal = function() {      
      $scope.modal.hide();
    };


  $scope.eventos =[
{"nombre": "31 MINUTOS: ROMEO Y JULIETA",
"imagen": "img/31.png",
"fecha": "2017/02/22 ",
"hora": "21:00 hrs",
"lugar": "Parque Brasil, La Granja. Santiago",
"entrada": "Gratuita",
"color": "red",
"filters" : {"des": "Para condonarle sus deudas de juego, el cascarrabias del Sr. Monstruo obliga a Juan Carlos Bodoque a representar su obra favorita, Romeo y Julieta de William Shakespeare, en un plazo de cinco años. Pasado este tiempo y Bodoque no ha movido ni un dedo. El Sr. Monstruo regresa dispuesto a ver un colosal montaje, y no se imagina que el trabajo está donde mismo lo dejó, es decir, sin comenzar. Bodoque llama a sus amigos de 31 minutos para que le ayuden a salir del apuro. Junto al conocido elenco de 31 minutos, comienza a improvisar en vivo su versión del clásico y entre actos, un coro de juglares interpretará canciones explicativas de tan entramada tragedia. En 31 minutos: Romeo y Julieta, los personajes de la popular serie infantil desatarán una versión exageradamente libre del clásico shakesperiano, indignando a los eruditos y confundiendo a los ignorantes.",
"dis": "Teatro de títeres", 
"fecha": "22/02/2017", 
"hora": "21:00 hrs.", 
"lugar": "Parque Brasil, La Granja. Santiago",
"duracion": "55 min. sin intermedio", 
"precio":"Gratuito" }
},
{"nombre": "LOLLAPALOOZA CHILE 2017",
"imagen": "img/lola.png",
"fecha": "2017/04/1 & 2",
"hora": "Todo el día",
"lugar": "Parque O'higgins. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Lollapalooza Chile es más que un festival de música. Se realiza todos los años, desde 2011, en el Parque O’Higgins de Santiago de Chile. Lolla es una experiencia cultural de dos días que se realiza en este histórico parque del centro de la capital chilena.",
"dis": "Espectáculo Musical",
"fecha": "1 & 2/04/2017", 
"lugar": "Parque O'higgins. Santiago",
"hora": "Todo el día", 
"duracion": "Todo el día", 
"precio":" Varían entre $67.200 y $161.000.-"
}

},
{"nombre": "JUSTIN BIEBER 2017",
"imagen": "img/justin.png",
"fecha": "2017/03/23",
"hora": "21:00 hrs",
"lugar": "Estadio Nacional. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Luego de que sus fans agotaran totalmente las fechas programadas en Norte América y Europa de su dinámico show en vivo, la superestrella global Justin Bieber ha anunciado el tramo Latinoamericano de su PURPOSE WORLD TOUR que comienza el 15 de febrero de 2017 en Monterrey, México y concluye el 24 de abril de 2017 en San José, Costa Rica. En Chile se presentará el próximo 23 de marzo de 2017 en el Estadio Nacional. Los fans podrán ver en este imperdible concierto lo mejor del álbum Purpose, que se encuentra #1 en más de 100 países, junto con sus galardonados sencillos 'What Do You Mean', 'Sorry' y 'Love Yourself'. El tour que cuenta con más de 10 presentaciones en vivo, viene de la mano de AEG Live y viajará a través de estadios de las ciudades más grandes e importantes de Sudamérica, incluyendo Ciudad de México, Lima, Sao Paulo, Santiago y Bogotá. ",
"dis": "Espectáculo Musical",
"fecha": "23/03/2017", 
"hora": "21:00 hrs", 
"lugar": "Estadio Nacional. Santiago",
"duracion": "1:45 minutos", 
"precio":" Varían entre $55.200 y $322.000.-"
}


},
{"nombre": "CIRQUE DU SOLEIL: SODA STEREO",
"imagen": "img/circo.png",
"fecha": "2017/07/19-27",
"hora": "21:00 hrs",
"lugar": "Movistar Arena. Santiago",
"entrada": "Pagada",
"filters":{
"des": "EL SHOW DEL CIRQUE DU SOLEIL INSPIRADO EN LA HISTORIA Y LA MÚSICA DE SODA STEREO. Soda Stereo SEP7IMO DIA by Cirque du Soleil lleva a la reconocida banda argentina al nivel de las afamadas producciones de la compañía canadiense inspiradas en la vida y la obra de íconos de la música, tales como The Beatles Love y Michael Jackson The Immortal World Tour y One. El espectáculo es dirigido por Michel Laprise (también director del MDNA Tour de Madonna y de Kurios, la obra más reciente del Cirque du Soleil), secundado por Chantal Tremblay (directora de creación de Love, el asombroso musical sobre los Beatles). En palabras de Laprise, SEP7IMO DIA - No Descansaré 'nos presenta a un personaje de 15 años, enjaulado y con sed de vivir, que transita esa edad clave en la que aparece el amor por una banda que se transformará en la favorita para toda tu vida. Es cuando uno siente la necesidad de cambiar al mundo, sin el poder suficiente. Cuando el personaje escucha la música de Soda Stereo se libera, viviendo en un planeta donde el tiempo es elástico, el tiempo de quien vive enamorado. El espectáculo abordará el poder emocional y la intensidad del legado musical de la banda, y explorará la conexión con sus fans”.",
"dis": "Espectáculo Musical - Danza",
"fecha": "19-27/04/2017", 
"hora": "21:00 hrs", 
"lugar": "Movistar Arena. Santiago",
"duracion": "2:15 minutos", 
"precio":" Varían entre $64.400 y $218.500.-"
}


},
{"nombre": "INTI ILLIMANI HISTÓRICO",
"imagen": "img/inti.jpg",
"fecha": "2017/01/7-21",
"hora": "20:30 hrs",
"lugar": "Centro Cívico San Luis, Peñalolen. Santiago",

"entrada": "Gratuita",
"color": "red",
"filters":{
"des": "Inti-Illimani Histórico – 50 Anni es un homenaje a Italia en gratitud por la cálida acogida que tuvo el grupo durante sus 16 años de exilio, en los que alcanzó gran popularidad en Europa y el resto del mundo. Su sonoridad se vio enriquecida por influjos mediterráneos y celtas, la que dio amplitud y universalidad a su música. La primera parte del concierto incluirá canciones de Roberto de Simone, uno de los compositores italianos más importantes del siglo XX, quien ha realizado arreglos sinfónicos para el conjunto –como El aparecido y América novia mía— y ha preparado tres composiciones napolitanas originales para celebrar los 50 años.",
"dis": "Espectáculo Musical",
"fecha": "7-21/01/2017", 
"hora": "20:30 hrs", 
"lugar": "Centro Cívico San Luis, Peñalolen. Santiago",
"duracion": "67 minutos", 
"precio":"Gratuito"
}

},
{"nombre": "FIESTA AÑO NUEVO SUN PARTY",
"imagen": "img/sun.jpg",
"fecha": "2017/01/1",
"hora": "00:30 hrs",
"lugar": "Sun Monticello. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Este 31 de diciembre después de las cenas, en los jardines de Sun Monticello se desarrollará un increíble espectáculo pirotécnico para recibir el 2017. Luego en el Centro de Conferencias la Sonora Palacios promete hacer bailar hasta que salga el sol. También animarán la noche Dj MA.",
"dis": "Fiesta Bailable",
"lugar": "Sun Monticello. Santiago",
"fecha": "1/01/2017", 
"hora": "00:30 hrs", 
"duracion": "7 horas", 
"precio":" Varían entre $34.200 y $79.200.-"
}

},
{"nombre": "THE COLOR OF TIME",
"imagen": "img/color.jpg",
"fecha": "2017/01/12 - 17",
"hora": "19:30 hrs",
"lugar": "Varias Comunas. Santiago",
"entrada": "Gratuita",
"color": "red",
"filters":{
"des": "Como un arcoíris de polvo y danza, The color of time reinventa la tradicional fiesta india de Holi, que se celebra al llegar la primavera. Cada año se lanzan al aire grandes cantidades de polvo gulal (polvo de maíz coloreado) y se ofrecen abrazos a los desconocidos. Ese día no existen las castas ni otras distinciones sociales, y las calles se transforman en un espacio de cohesión y mestizaje simbolizado por la mezcla de colores. En su reinterpretación contemporánea, la compañía francesa Artonik creó esta intervención callejera de teatro y danza acompañada por música en vivo. Después de ser sobrepasados por la energía destructora, llega la toma de conciencia, el trance y la purificación, para después llenar el suelo de figuras de colores, en forma de ofrendas. En su espectacular cierre, el público es invitado a ser parte de la explosión de color y alegría, a celebrar la unidad y la aceptación de la diversidad. El debut latinoamericano de Artonik será en Santiago a Mil.",
"dis": "Danza teatro - Calle",
"fecha": "2017/03/23",
"lugar": "San Joaquín, Lo espejo, Quilicura, La Granja y Peñalolen", 
"hora": "19:00 hrs", 
"duracion": "1 hora 15 min. sin intermedios", 
"precio":" Gratuito"
}

},
{"nombre": "JUAN LUIS GUERRA",
"imagen": "img/juan.jpg",
"fecha": "2017/03/19",
"hora": "20:00 hrs",
"lugar": "Movistar Arena. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Considerado el rey indiscutido de la bachata y el merengue, Juan Luis Guerra vuelve a Chile este 19 de marzo de 2017 junto a 4.40 para presentarnos su más reciente producción discográfica, y por supuesto todos los grandes éxitos que lo han convertido en una verdadera leyenda de la música latina y el principal embajador de su natal republica Dominicana. Ganador de numerosos premios, incluyendo 18 Grammy Latinos, dos Grammy Norteamericanos y dos Premios Latin Billboard, Juan Luis Guerra no solo es una leyenda en su genero, sino que también es admirado por artistas consolidados como Enmanuel, Maná, Diego Torres, Nelly Furtado, Enrique Iglesias, Miguel Bosé, Tony Bennett, Alejandro Sanz, Luis Fonsi, Jessy & Joy, entre otros, con los que ha colaborado durante una carrera que se extiende por más de tres décadas.",
"dis": "Espectáculo Musical",
"lugar": "Movistar Arena. Santiago",
"fecha": "19/03/2017", 
"hora": "20:00 hrs", 
"duracion": "90 minutos", 
"precio":" Varían entre $23.300 y $148.000.-"
}
},
{"nombre": "ANIME EXPO SANTIAGO AEX24",
"imagen": "img/anime.png",
"fecha": "2017/02/4 & 5",
"hora": "11:00-19:00 hrs",
"lugar": "Centro Cultural Estación Mapocho. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Anime Expo Santiago, hoy AEX®, es la convención de animé, cómics, videojuegos y entretención con mayor convocatoria y trayectoria en Chile y una de las mayores de latino américa. Hoy somos miembros de una gran asociación internacional, IOEA (International Otaku Expo Asociation), con quienes esperamos avanzar y crecer para realizar cada vez mejores eventos. Nuestro evento nace en el año 2002 , y surge debido a la falta de estas actividades en nuestro país, y como motivo de celebración del 20vo aniversario de Macross, una de las series favoritas del grupo de amigos que participó en los inicios del proyecto, entregando en nuestro país un novedoso formato de entretención inédito a la fecha, donde fanáticos del anime, cómics, videojuegos y la cultura oriental en general se reúnen dos veces al año para disfrutar de las novedades que AEX® siempre entrega en cada edición de nuestra convención.",
"dis": "Exposición Anime",
"fecha": "4 & 5/03/2017", 
"hora": "Todo el día", 
"lugar": "Centro Cultural Estación Mapocho. Santiago",
"duracion": "Todo el día", 
"precio":" $7.000.-"
}

}

]
})

.controller('ofertasCtrl',function(passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

})



.controller('showOffers',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){
})

.controller('sugerenciasCtrl',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){
})

.controller('panoramasCtrl',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

 $scope.clearSearch = function() {
    $scope.search = "";
  };

$ionicModal.fromTemplateUrl('templates/modal.html',function($ionicModal) {
      $scope.modal = $ionicModal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.openModal = function(nombre,imagen,detalle, fecha, hora, lugar) {
      var Format = wNumb({
        prefix: '$',
        decimals: 0,
        thousand: '.'
      });
      $scope.selectedNombre = nombre;
      $scope.selectedImagen = imagen;
      $scope.selectedDetalle = detalle;
      $scope.selectedFecha = fecha;
      $scope.selectedHora = hora;
      $scope.selectedLugar = lugar;

    
      $scope.modal.show();
    }
    $scope.closeModal = function() {      
      $scope.modal.hide();
    };


  $scope.eventos =[
  {"nombre": "FINAL COPA CHILE",
"imagen": "img/final.jpg",
"fecha": "2016/12/14 ",
"hora": "20:00 hrs",
"lugar": "Estadio Nacional. Santiago",
"entrada": "Pagada",
"filters" : {"des": "Colo Colo y Everton luchan por quedarse con el torneo más antiguo del Fútbol Chileno, la copa a a disputarse será llevada a cabo en cancha neutral, es decir, el Estadio Nacional, ubicado en la comuna de Ñuñoa",
"dis": "Deporte, Fútbol", 
"fecha": "14/12/2016", 
"hora": "20:00 hrs.", 
"lugar": "Estadio Nacional. Santiago",
"duracion": "90 min", 
"precio":"Varían entre $7.700 y $27.500.-" }
},
{"nombre": "BOMBO FICA - SOSPECHOSA LA ..",
"imagen": "img/bombo.jpg",
"fecha": "2016/12/17 ",
"hora": "21:00 hrs",
"lugar": "Sun Monticello, San francisco de Mostazal",
"entrada": "Pagada",
"filters" : {"des": "Después de su exitosa gira 2016, que se vio coronada con su película. El exitoso humorista  promete pasar un momento lleno de buenos momentos,risas y sorpresas. Venga preparado para disfrutar del mejor humor blanco, de la inigualable simpatía y chispa de este galardonado humorista nacional.",
"dis": "Humos", 
"fecha": "17/12/2016", 
"hora": "21:00 hrs.", 
"lugar": "Sun Monticello, San francisco de Mostazal",
"duracion": "74 min", 
"precio":"Varían entre $14.250 y $28.500.-" }
},
{"nombre": "31 MINUTOS: ROMEO Y JULIETA",
"imagen": "img/31.png",
"fecha": "2017/02/22 ",
"hora": "21:00 hrs",
"lugar": "Parque Brasil, La Granja. Santiago",
"entrada": "Gratuita",
"color": "red",
"filters" : {"des": "Para condonarle sus deudas de juego, el cascarrabias del Sr. Monstruo obliga a Juan Carlos Bodoque a representar su obra favorita, Romeo y Julieta de William Shakespeare, en un plazo de cinco años. Pasado este tiempo y Bodoque no ha movido ni un dedo. El Sr. Monstruo regresa dispuesto a ver un colosal montaje, y no se imagina que el trabajo está donde mismo lo dejó, es decir, sin comenzar. Bodoque llama a sus amigos de 31 minutos para que le ayuden a salir del apuro. Junto al conocido elenco de 31 minutos, comienza a improvisar en vivo su versión del clásico y entre actos, un coro de juglares interpretará canciones explicativas de tan entramada tragedia. En 31 minutos: Romeo y Julieta, los personajes de la popular serie infantil desatarán una versión exageradamente libre del clásico shakesperiano, indignando a los eruditos y confundiendo a los ignorantes.",
"dis": "Teatro de títeres", 
"fecha": "22/02/2017", 
"hora": "21:00 hrs.", 
"lugar": "Parque Brasil, La Granja. Santiago",
"duracion": "55 min. sin intermedio", 
"precio":"Gratuito" }
},
{"nombre": "DON OMAR",
"imagen": "img/dono.jpg",
"fecha": "2016/12/17 ",
"hora": "21:00 hrs",
"lugar": "Movistar. Santiago",
"entrada": "Pagada",
"filters" : {"des": "Vuelve a Chile “El Rey de Reyes”, DON OMAR, el máximo exponente del reggaetón latino regresa a Chile para una fiesta inolvidable el próximo sábado 17 de diciembre en Movistar Arena. Luego de su estruendoso éxito en el Festival de Viña del Mar de 2016, El Movistar Arena será el escenario donde Don Omar desembarcará con todos sus éxitos y con dos grandes invitados; Kevin Roldán y Feid. Don Omar un artista que ha vendido más de 15 millones de álbumes alrededor del mundo. Ha sido nominado a más de 200 premios, entre ellos Latin Grammys, Billboard y MTV. El año 2013 estuvo nominado a 18 premios Latin Billboards de los cuales ganó 10. El Rey de Reyes del reggaetón se prepara junto a sus invitados y fans para hacer reventar un Movistar Arena que con seguridad bailará y cantará todos su éxitos.",
"dis": "Espectáculo Musical", 
"fecha": "17/12/2016", 
"hora": "21:00 hrs.", 
"lugar": "Movistar. Santiago",
"duracion": "86 min. sin intermedio", 
"precio":"Varían entre $20.700 y $67.850" }
},
{"nombre": "99 - LA MORGUE",
"imagen": "img/morgue.jpg",
"fecha": "2017/01/5-17 ",
"hora": "21:00 hrs",
"lugar": "Teatro Camilo Henríquez. Santiago",
"entrada": "Gratuita",
"color": "red",
"filters" : {"des": "Chile es como una morgue. En este Instituto Médico Legal conviven las ilusiones y sueños de sus funcionarios con la cruda realidad de los cuerpos torturados que la pueblan, en medio de cantos de evangélicos que se cruzan con la aparición de la Virgen del Carmen, el enamoramiento de una mujer, la lucidez de un interno y la desatada necrofilia de su director. Esta emblemática obra fue entrenada en 1986 por la compañía Teatro Fin de Siglo, en El Trolley, espacio de resistencia cultural durante la dictadura. Desde entonces, más de 5 mil personas han visto esta obra, tercera parte de la trilogía compuesta por Historias de un galpón abandonado y Cinema Utoppia, donde se puso en escena por primera vez la existencia de detenidos desaparecidos, y que imagina un futuro sin dictadura. En palabras de Griffero: “muestra un Chile abandonado, un país destruido moralmente, falsificación de certificados, detenidos desaparecidos ¿Qué harán los que vendrán? Hoy tenemos una respuesta a esa pregunta”",
"dis": "Teatro", 
"fecha": "5-17/01/2017", 
"hora": "21:00 hrs.", 
"lugar": "Teatro Camilo Henríquez. Santiago",
"duracion": "1 hora 20 min. sin intermedio", 
"precio":"Gratuito" }
},
{"nombre": "LOLLAPALOOZA CHILE 2017",
"imagen": "img/lola.png",
"fecha": "2017/04/1 & 2",
"hora": "Todo el día",
"lugar": "Parque O'higgins. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Lollapalooza Chile es más que un festival de música. Se realiza todos los años, desde 2011, en el Parque O’Higgins de Santiago de Chile. Lolla es una experiencia cultural de dos días que se realiza en este histórico parque del centro de la capital chilena.",
"dis": "Espectáculo Musical",
"fecha": "1 & 2/04/2017", 
"lugar": "Parque O'higgins. Santiago",
"hora": "Todo el día", 
"duracion": "Todo el día", 
"precio":" Varían entre $67.200 y $161.000.-"
}

},
{"nombre": "JUSTIN BIEBER 2017",
"imagen": "img/justin.png",
"fecha": "2017/03/23",
"hora": "21:00 hrs",
"lugar": "Estadio Nacional. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Luego de que sus fans agotaran totalmente las fechas programadas en Norte América y Europa de su dinámico show en vivo, la superestrella global Justin Bieber ha anunciado el tramo Latinoamericano de su PURPOSE WORLD TOUR que comienza el 15 de febrero de 2017 en Monterrey, México y concluye el 24 de abril de 2017 en San José, Costa Rica. En Chile se presentará el próximo 23 de marzo de 2017 en el Estadio Nacional. Los fans podrán ver en este imperdible concierto lo mejor del álbum Purpose, que se encuentra #1 en más de 100 países, junto con sus galardonados sencillos 'What Do You Mean', 'Sorry' y 'Love Yourself'. El tour que cuenta con más de 10 presentaciones en vivo, viene de la mano de AEG Live y viajará a través de estadios de las ciudades más grandes e importantes de Sudamérica, incluyendo Ciudad de México, Lima, Sao Paulo, Santiago y Bogotá. ",
"dis": "Espectáculo Musical",
"fecha": "23/03/2017", 
"hora": "21:00 hrs", 
"lugar": "Estadio Nacional. Santiago",
"duracion": "1:45 minutos", 
"precio":" Varían entre $55.200 y $322.000.-"
}


},
{"nombre": "CIRQUE DU SOLEIL: SODA STEREO",
"imagen": "img/circo.png",
"fecha": "2017/07/19-27",
"hora": "21:00 hrs",
"lugar": "Movistar Arena. Santiago",
"entrada": "Pagada",
"filters":{
"des": "EL SHOW DEL CIRQUE DU SOLEIL INSPIRADO EN LA HISTORIA Y LA MÚSICA DE SODA STEREO. Soda Stereo SEP7IMO DIA by Cirque du Soleil lleva a la reconocida banda argentina al nivel de las afamadas producciones de la compañía canadiense inspiradas en la vida y la obra de íconos de la música, tales como The Beatles Love y Michael Jackson The Immortal World Tour y One. El espectáculo es dirigido por Michel Laprise (también director del MDNA Tour de Madonna y de Kurios, la obra más reciente del Cirque du Soleil), secundado por Chantal Tremblay (directora de creación de Love, el asombroso musical sobre los Beatles). En palabras de Laprise, SEP7IMO DIA - No Descansaré 'nos presenta a un personaje de 15 años, enjaulado y con sed de vivir, que transita esa edad clave en la que aparece el amor por una banda que se transformará en la favorita para toda tu vida. Es cuando uno siente la necesidad de cambiar al mundo, sin el poder suficiente. Cuando el personaje escucha la música de Soda Stereo se libera, viviendo en un planeta donde el tiempo es elástico, el tiempo de quien vive enamorado. El espectáculo abordará el poder emocional y la intensidad del legado musical de la banda, y explorará la conexión con sus fans”.",
"dis": "Espectáculo Musical - Danza",
"fecha": "19-27/04/2017", 
"hora": "21:00 hrs", 
"lugar": "Movistar Arena. Santiago",
"duracion": "2:15 minutos", 
"precio":" Varían entre $64.400 y $218.500.-"
}


},
{"nombre": "INTI ILLIMANI HISTÓRICO",
"imagen": "img/inti.jpg",
"fecha": "2017/01/7-21",
"hora": "20:30 hrs",
"lugar": "Centro Cívico San Luis, Peñalolen. Santiago",

"entrada": "Gratuita",
"color": "red",
"filters":{
"des": "Inti-Illimani Histórico – 50 Anni es un homenaje a Italia en gratitud por la cálida acogida que tuvo el grupo durante sus 16 años de exilio, en los que alcanzó gran popularidad en Europa y el resto del mundo. Su sonoridad se vio enriquecida por influjos mediterráneos y celtas, la que dio amplitud y universalidad a su música. La primera parte del concierto incluirá canciones de Roberto de Simone, uno de los compositores italianos más importantes del siglo XX, quien ha realizado arreglos sinfónicos para el conjunto –como El aparecido y América novia mía— y ha preparado tres composiciones napolitanas originales para celebrar los 50 años.",
"dis": "Espectáculo Musical",
"fecha": "7-21/01/2017", 
"hora": "20:30 hrs", 
"lugar": "Centro Cívico San Luis, Peñalolen. Santiago",
"duracion": "67 minutos", 
"precio":"Gratuito"
}

},
{"nombre": "FIESTA AÑO NUEVO SUN PARTY",
"imagen": "img/sun.jpg",
"fecha": "2017/01/1",
"hora": "00:30 hrs",
"lugar": "Sun Monticello. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Este 31 de diciembre después de las cenas, en los jardines de Sun Monticello se desarrollará un increíble espectáculo pirotécnico para recibir el 2017. Luego en el Centro de Conferencias la Sonora Palacios promete hacer bailar hasta que salga el sol. También animarán la noche Dj MA.",
"dis": "Fiesta Bailable",
"lugar": "Sun Monticello. Santiago",
"fecha": "1/01/2017", 
"hora": "00:30 hrs", 
"duracion": "7 horas", 
"precio":" Varían entre $34.200 y $79.200.-"
}

},
{"nombre": "THE COLOR OF TIME",
"imagen": "img/color.jpg",
"fecha": "2017/01/12 - 17",
"hora": "19:30 hrs",
"lugar": "Varias Comunas. Santiago",
"entrada": "Gratuita",
"color": "red",
"filters":{
"des": "Como un arcoíris de polvo y danza, The color of time reinventa la tradicional fiesta india de Holi, que se celebra al llegar la primavera. Cada año se lanzan al aire grandes cantidades de polvo gulal (polvo de maíz coloreado) y se ofrecen abrazos a los desconocidos. Ese día no existen las castas ni otras distinciones sociales, y las calles se transforman en un espacio de cohesión y mestizaje simbolizado por la mezcla de colores. En su reinterpretación contemporánea, la compañía francesa Artonik creó esta intervención callejera de teatro y danza acompañada por música en vivo. Después de ser sobrepasados por la energía destructora, llega la toma de conciencia, el trance y la purificación, para después llenar el suelo de figuras de colores, en forma de ofrendas. En su espectacular cierre, el público es invitado a ser parte de la explosión de color y alegría, a celebrar la unidad y la aceptación de la diversidad. El debut latinoamericano de Artonik será en Santiago a Mil.",
"dis": "Danza teatro - Calle",
"fecha": "2017/03/23",
"lugar": "San Joaquín, Lo espejo, Quilicura, La Granja y Peñalolen", 
"hora": "19:00 hrs", 
"duracion": "1 hora 15 min. sin intermedios", 
"precio":" Gratuito"
}

},
{"nombre": "JUAN LUIS GUERRA",
"imagen": "img/juan.jpg",
"fecha": "2017/03/19",
"hora": "20:00 hrs",
"lugar": "Movistar Arena. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Considerado el rey indiscutido de la bachata y el merengue, Juan Luis Guerra vuelve a Chile este 19 de marzo de 2017 junto a 4.40 para presentarnos su más reciente producción discográfica, y por supuesto todos los grandes éxitos que lo han convertido en una verdadera leyenda de la música latina y el principal embajador de su natal republica Dominicana. Ganador de numerosos premios, incluyendo 18 Grammy Latinos, dos Grammy Norteamericanos y dos Premios Latin Billboard, Juan Luis Guerra no solo es una leyenda en su genero, sino que también es admirado por artistas consolidados como Enmanuel, Maná, Diego Torres, Nelly Furtado, Enrique Iglesias, Miguel Bosé, Tony Bennett, Alejandro Sanz, Luis Fonsi, Jessy & Joy, entre otros, con los que ha colaborado durante una carrera que se extiende por más de tres décadas.",
"dis": "Espectáculo Musical",
"lugar": "Movistar Arena. Santiago",
"fecha": "19/03/2017", 
"hora": "20:00 hrs", 
"duracion": "90 minutos", 
"precio":" Varían entre $23.300 y $148.000.-"
}
},
{"nombre": "ANIME EXPO SANTIAGO AEX24",
"imagen": "img/anime.png",
"fecha": "2017/02/4 & 5",
"hora": "11:00-19:00 hrs",
"lugar": "Centro Cultural Estación Mapocho. Santiago",
"entrada": "Pagada",
"filters":{
"des": "Anime Expo Santiago, hoy AEX®, es la convención de animé, cómics, videojuegos y entretención con mayor convocatoria y trayectoria en Chile y una de las mayores de latino américa. Hoy somos miembros de una gran asociación internacional, IOEA (International Otaku Expo Asociation), con quienes esperamos avanzar y crecer para realizar cada vez mejores eventos. Nuestro evento nace en el año 2002 , y surge debido a la falta de estas actividades en nuestro país, y como motivo de celebración del 20vo aniversario de Macross, una de las series favoritas del grupo de amigos que participó en los inicios del proyecto, entregando en nuestro país un novedoso formato de entretención inédito a la fecha, donde fanáticos del anime, cómics, videojuegos y la cultura oriental en general se reúnen dos veces al año para disfrutar de las novedades que AEX® siempre entrega en cada edición de nuestra convención.",
"dis": "Exposición Anime",
"fecha": "4 & 5/03/2017", 
"hora": "Todo el día", 
"lugar": "Centro Cultural Estación Mapocho. Santiago",
"duracion": "Todo el día", 
"precio":" $7.000.-"
}

}

]
})

.controller('CercanosCtrl',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){




})

.controller('RutaCtrl',function($scope, $ionicLoading, $ionicModal, $compile){

    var geocoder;
    $scope.places = [
    {
      name: 'inicio',
      id: '0',
      lat: -33.449582,
      long:  -70.686988
    },
    {
        id : '1',
        name : 'El principito',
        image: 'img/principito.jpg  ',
        date: '12/12/16 al 21/12/16',
        hour: '14:00 a 15:20 hrs',
        place : 'Centro de Eventos Matucana 100',
        price: '$5.000 Adultos \n $2.500 Niños',
        category: 'Cultura, Teatro',
        duracion: '1 hora 20 minutos',
        description: 'Novela clásica escrita por Antoine de Saint-Exupéry llevada al teatro dirigida a toda la familia',
        lat : -33.44471866212755,
        long : -70.67959785461426
    },
    {
        id : '2',
        name : 'Guirnaldas de Luz',
        image: 'img/artequin.jpg',
        date: '12/12/16 al 21/12/16',
        hour: '11:00 a 20:00 hrs',
        place : 'Museo Interactivo Artequin',
        price: 'Entrada Liberada',
        category: 'Museo de Ciencia',
        duracion: '40 minutos',
        description: 'Actividad para toda la familia, en que los niños pueden crear sus propios adornos navideños',
        lat : -33.44455751997385,
        long : -70.68420052528381 
    },
    {
        id : '3',
        name : 'Astronomía',
        image: "img/ciencia.jpg",
        date: 'De Martes a Sábado',
        hour: '10:00 a 20:00 hrs',
        place : 'Museo de Ciencias y tecnología',
        price: 'Aporte voluntario desde $300',
        category: 'Museo de Ciencia',
        duracion: '1 hora',
        description: 'El universo se toma el museo para acercarnos a galaxias lejanas con juegos de luces y proyecciones en vivo',
        lat : -33.44004541814073,
        long : -70.68369626998901 
    },
    {
        id : '4',
        name : 'Defensa, promoción y denuncia',
        image: 'img/memoria.jpg',
        date: '12/12/17 al 24/01/17',
        hour: '18:00 a 20:00 hrs',
        place : 'Museo de la Memoria y los Derechos Humanos',
        price: 'Entrada Liberada',
        category: 'Exposición histórica',
        duracion: '50 minutos',
        description: 'Galeria de fotografías inéditas tomadas en dictadura por fotografos aficionados',
        lat : -33.440009606870085,
        long : -70.67945301532745 
    },
    {
        id : '5',
        name : 'Expo Vegan',
        image: 'img/yungay.jpg',
        date: '12/12/16 al 22/12/16',
        hour: '10:00 a 21:30 hrs',
        place : 'Plaza Yungay',
        price: 'Entrada Liberada',
        category: 'Feria cultural',
        duracion: '1 hora 15 minutos',
        description: 'Los mejores exponentes de Santiago se reunen en uno de los lugares íconos de la comuna a presentar sus mejores recetas y degustar a la gente con una tarde entretenida en familia',
        lat : -33.437440109624404,
        long : -70.67399740219116 
    }
];
  $scope.init = function() {
        var myLatlng = new google.maps.LatLng(-33.440009606870085, -70.67945301532745);
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
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
        var marker = new google.maps.Marker({
                position: new google.maps.LatLng($scope.places[0].lat, $scope.places[0].long),
                map: $scope.map,
                label: $scope.places[0].id,
                animation: google.maps.Animation.DROP,
                title: $scope.places[0].name
            });
            infoWindow.setContent('Punto de Inicio');
            infoWindow.open($scope.map,marker);
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('Punto de Inicio');
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);


        var createMarker = function (info,index){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                label: info.id,
                animation: google.maps.Animation.DROP,
                title: info.name
            });
            var aux = '<a ng-click="openModal1('+index+')">'+info.name+'</a>';
            var information = $compile(aux)($scope);
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(information[0]);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 1; i < $scope.places.length; i++){
            createMarker($scope.places[i],i);
        }
        for (var t = 0;
        (t + 1) < lat_lng.length; t++) {
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
              var path = new google.maps.MVCArray();
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
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.init());

    $ionicModal.fromTemplateUrl('templates/modalmapa.html',function($ionicModal) {
      $scope.modal = $ionicModal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.openModal1 = function(index) {
      $scope.selectedNombre = $scope.places[index].name;
      $scope.selectedImagen = $scope.places[index].image;
      $scope.selectedDetalle = $scope.places[index].description;
      $scope.selectedFecha = $scope.places[index].date;
      $scope.selectedHora = $scope.places[index].hour;
      $scope.selectedLugar = $scope.places[index].place;
      $scope.selectedPrice = $scope.places[index].price;
      $scope.selectedCategory = $scope.places[index].category;
      $scope.selectedDuracion = $scope.places[index].duracion;
      $scope.modal.show();
    }
    $scope.closeModal1 = function() {      
      $scope.modal.hide();
    };
})




.controller('offerDetails',function($ionicHistory,  passingData, getData,AuthService,$state, $rootScope, $ionicModal, $ionicPopup, $scope, $ionicLoading){

})