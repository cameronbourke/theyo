// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    });
  })

.controller('AppCtrl', function($scope, $ionicModal) {

    // check if localStorage['items'] is present
    if (!window.localStorage.items) {

      window.localStorage['items'] = JSON.stringify([{
        title: 'You Owe Me Now',
        fullName: 'Cameron Bourke',
        dollarAmount: '2',
        description: 'You owe me $2 for downloading this app. Only kidding!! This is just an example of a "Theyo". Delete me now by swiping to the left and enjoy.'
      }]);

    }

    $scope.contacts = JSON.parse(localStorage['items']) || [];

    $scope.createContact = function(u) {
      $scope.contacts.push({ fullName: u.fullName,
                             title: u.title,
                             dollarAmount: u.dollarAmount,
                             description: u.description });
      u.fullName = '';
      u.title = '';
      u.dollarAmount = '';
      u.description = '';

      window.localStorage.items = JSON.stringify($scope.contacts);
      $scope.modal.hide();
    };

    $scope.onItemDelete = function(item) {
      $scope.contacts.splice($scope.contacts.indexOf(item), 1);
      window.localStorage.items = JSON.stringify($scope.contacts);
    };

    $ionicModal.fromTemplateUrl('templates/addTheyo.html', {
     scope: $scope
      }).then(function(modal) {
     $scope.modal = modal;
    });

  });
