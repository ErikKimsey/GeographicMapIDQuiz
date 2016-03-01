'use strict';
var MegaCtrl = angular.module('MegaCtrl', []);

MegaCtrl.controller('homeCtrl', function($scope){
   // 
});

MegaCtrl.controller('Ctrl1', ['$scope', function($scope){
        
        //$scope.clicked = "Back again";
    console.log("in ctrl1");
       
}]);


MegaCtrl.controller('Ctrl2', ['$scope', '$http', function($scope, $http){

    
    $http.get('assets/json.json').success(function(data) {
        var i = 0;
        var answered;
        $scope.quizq = data.quizQs;
        $scope.totalLength = data.quizQs.length;
        $scope.hint = data.quizQs[i].hint;
        $scope.quiznum = i + 1;
        $scope.studAnswer = data.quizQs[i].studAnswer;
        
        
        $scope.next = function(){
            
            
            if(this.answered !== true){
                alert("You didn't submit answer.");
            }
            this.i = i++;
            console.log(i);
            $scope.hint = data.quizQs[i].hint;
            $scope.quiznum = i + 1;
            $scope.studAnswer = data.quizQs[i].studAnswer = "";
            $scope.answer = data.quizQs[i].answer;
        
        };
        
        $scope.checkAnswer = function(studentAnswer){
            
            this.studAnswer = studentAnswer;
                console.log(data.quizQs[i].answer);
                if($scope.studAnswer != data.quizQs[i].answer){
                    alert("wrong");
                } else if ($scope.studAnswer === data.quizQs[i].answer){
                    alert("right");
                }
             this.answered = true;
        }

    });

}]);


