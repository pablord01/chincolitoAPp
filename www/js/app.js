
angular.module('starter', ['ionic','ngCordova'])
//inicializacion
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//ruteo entre los diferentes templates, con sus correspondientes controladores
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('striped');
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('prueba',{
    url: '/prueba',
    templateUrl: 'templates/prueba.html',
    controller: 'Prueba'
  })

  .state('sugerencias',{
    url: '/sugerencias',
    templateUrl: 'templates/sugerencias.html',
    controller: 'sugerenciasCtrl'
  })
  .state('prueba1',{
    url: '/prueba1',
    templateUrl: 'templates/prueba1.html',
    controller: 'Prueba1'
  })
  .state('tabs',{
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'Tabs'
  })
  

  
  .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
      })
  .state('tabs.sugerencias', {
      url: "/sugerencias",
      views: {
        'sugerencias-tab': {
          templateUrl: "templates/sugerencias.html",
          controller: 'sugerenciasCtrl'
        }
      }
    })
  
  .state('tabs.ofertas', {
      url: "/ofertas",
      views: {
        'ofertas-tab': {
          templateUrl: "templates/ofertas.html",
          controller: 'ofertasCtrl'
        }
      }
    })
    .state('tabs.solicitud', {
      url: "/solicitud",
      views: {
        'solicitud-tab': {
          templateUrl: "templates/solicitud.html",
          controller: 'solicitudCtrl'
        }
      }
    })
 
    .state('tabs.panoramas', {
      url: "/panoramas",
      views: {
        'panoramas-tab': {
          templateUrl: "templates/panoramas.html",
          controller: 'panoramasCtrl'
        }
      }

    }) 
    .state('tabs.cercanos', {
      url: "/cercanos",
      views: {
        'cercanos-tab': {
          templateUrl: "templates/cercanos.html",
          controller: 'RutaCtrl'
        }
      }

    }) 
    .state('tabs.preruta', {
      url: "/preruta",
      views: {
        'preruta-tab': {
          templateUrl: "templates/preruta.html",
          controller: 'prerutaCtrl'
        }
      }
    })
    .state('tabs.prueba1', {
      url: "/prueba1",
      views: {
        'preruta-tab': {
          templateUrl: "templates/prueba1.html",
          controller: 'prerutaCtrl'
        }
      }
    })
    .state('tabs.ruta', {
      url: "/ruta",
      cache: true,
      views: {
        'preruta-tab': {
          templateUrl: "templates/ruta.html",
          controller: 'RutaCtrl'
        }
      }
    })

  

    .state('tabs.revisar', {
      url: "/revisar",
      views: {
        'ofertas-tab': {          
          templateUrl: "templates/verofertas.html",
          controller: 'showOffers'
        }
      }
    })
    .state('tabs.solicitar', {
      url: "/solicitar",
            
      views: {
        'solicitud-tab': {          
          templateUrl: "templates/confirmacionsolicitud.html",
          controller: 'solicitudCtrl'
          }
      }
    })
      .state('tabs.detalleoferta', {
      url: "/detalleoferta",            
      views: {
        'ofertas-tab': {          
          templateUrl: "templates/detalleoferta.html",
          controller: 'offerDetails'
          }
      }
    });

  


  
  
  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go('tabs.home', {}, {reload: true});
  });
})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope) {
  
})

// con esto cuando comienza la app verifica si estas logueado, en caso contrario te
// redirecciona al login y no entra directamente al dashboard
/*.run(function ($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) { 
    if (!AuthService.isAuthenticated()) {
      if (next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    }});
});*/
