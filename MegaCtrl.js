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

    //XHR to get JSON
    $http.get('assets/json.json').success(function(data) {
        var i = 0;
        var answered;
        $scope.quizq = data.quizQs;
        $scope.totalLength = data.quizQs.length;
        $scope.hint = data.quizQs[i].hint;
        $scope.quiznum = i + 1;
        $scope.studAnswer = data.quizQs[i].studAnswer;
        $scope.correctAnswers = 0;


        //Iterate forward through JSON file
        $scope.next = function(){

                if($scope.quiznum >= $scope.totalLength){
                    alert("You're done.");
                    $scope.exitQuiz();
                }

                $scope.studentAnswer = null; //Clears input text
                //$scope.studAnswer = data.quizQs[i].studAnswer = null;
                if(this.answered !== true){
                    alert("You didn't submit answer.");
                }
                this.i = i++;
                console.log(i);
                $scope.hint = data.quizQs[i].hint;
                $scope.quiznum = i + 1;

                $scope.answer = data.quizQs[i].answer;

        };

        //Compares student's answer to that provided by JSON
        $scope.checkAnswer = function(studentAnswer){

            this.studAnswer = studentAnswer;
                console.log(data.quizQs[i].answer);
                if($scope.studAnswer != data.quizQs[i].answer){
                    alert("wrong");
                } else if ($scope.studAnswer === data.quizQs[i].answer){
                    alert("right");
                    $scope.correctAnswers = $scope.correctAnswers + 1;

                }
             this.answered = true;
        }

        //Exits quiz to landing page
        $scope.exitQuiz = function(){

            $scope.confirmexit = document.getElementById('confirmexit');
            $scope.confirmexit.style.display = 'block';
            /*
            // Navigate to VIEW3
            // VIEW3 details:
            // .number correct
            // .if quiz was completed
            // .leads to landing view
            */

            /*
            * Show EXIT button and hide a "Confirm Exit".
            * When EXIT is clicked "Confirm Exit" is shown.
            * Clicking "Confirm exit" will trigger ngRoute to VIEW3.
            */
        };

    });

}]);

MegaCtrl.controller('Ctrl3', ['$scope', function($scope){

    if($scope.quiznum < $scope.totalLength){
      alert("You're leaving the quiz.  That ok?")
    } else if ($scope.quiznum >= $scope.totalLength){
      alert("You've completed the quiz.  Moving on...");

    }
    console.log("in ctrl3");

}]);
