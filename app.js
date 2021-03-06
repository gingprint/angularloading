

angular.module('LoadingBarExample', ['chieffancypants.loadingBar', 'ngAnimate'])
  .config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })

  .controller('ExampleCtrl', function ($scope, $http,$timeout,cfpLoadingBar) {
    $scope.posts = [];
   
    $scope.fetch = function() {
   
      $http.get('data.json').success(function(data) {
        $scope.posts = data;
        console.log(data);
      });
    };

    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }


    // fake the initial load so first time users can see it right away:
    $scope.start();
    $scope.fakeIntro = true;
    $timeout(function() {
      $scope.complete();
      $scope.fakeIntro = false;
    }, 10);


  });
