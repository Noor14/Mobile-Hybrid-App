// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('psqca', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('welcome',{
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })
      .state('subscription',{
        url: '/subscription',
        templateUrl: 'templates/subscription.html',
        controller: 'SubscriptionController'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'templates/products.html',
        controller: 'ProductsController'
      })
      .state('qr_code', {
        url: '/qr_code',
        templateUrl: 'templates/qr_code.html',
        controller: 'QRController'
      })
      .state('publication', {
        url: '/publication',
        templateUrl: 'templates/publication.html',
        controller: 'PublicationController'
      })
      .state('links', {
        url: '/links',
        templateUrl: 'templates/links.html',
        controller: 'linksController'
      })
      .state('feedBack', {
        url: '/feedback',
        templateUrl: 'templates/feedback.html',
        controller: 'feedBackController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/aboutpsqca.html',
        controller: 'aboutController'
      })
      .state('alerts', {
        url: '/alerts',
        templateUrl: 'templates/alerts.html',
        controller: 'AlertsController'
      });


      $urlRouterProvider.otherwise('/welcome');


  });
