
angFormApp.controller('MainCtrl', ['$scope', '$location',function($scope, $location){
  console.log('ok?');
  $scope.go = function(path){
    console.log('worked');
    $location.path(path);
  };
}]);
