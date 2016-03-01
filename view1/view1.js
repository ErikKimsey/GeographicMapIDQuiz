
  var Ctrl1 = angular.module('Ctrl1',[]);
      Ctrl1.controller('Ctrl1', ['$scope', function($scope){
        
            console.log("in ctrl1");
          $scope.clicked = 0;
          $scope.init = 1200;
          console.log("in more");
          $scope.interest = 0.0075;
          $scope.dividend = 0;
          $scope.compound = 0;
          $scope.savings = function(){
              console.log("inside function")
              return for(var i=0; i<12; i++){
                  $scope.dividend = $scope.init * $scope.interest;
                  $scope.compound = $scope.dividend + $scope.init;
                  $scope.init = $scope.compound;
                  console.log("calcu");
                  $scope.clicked = $scope.init;
              }
              return $scope.clicked
          };
        $scope.savings();
}]);