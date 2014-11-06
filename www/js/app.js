// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

  .controller('AppCtrl', function($scope, $ionicModal) {

    $scope.contacts = [{ 
      title: 'Car Money',
      fullName: 'Gordon Freeman',
      dollarAmount: '15',
      description: 'Dropped Gordo home from town.'
    },
    { 
      title: 'Drug Money',
      fullName: 'Isaac Shoeman',
      dollarAmount: '30',
      description: 'So many drugs in his pocket that I need.'
    }];

    $ionicModal.fromTemplateUrl('templates/addTheyo.html', {
      scope: $scope
      }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.createContact = function(u) {        
      $scope.contacts.push({ fullName: u.fullName },
                           { title: u.title },
                           { dollarAmount: u.dollarAmount },
                           { description: u.description });
      $scope.modal.hide();
    };

  });