'use strict';

var ClockDirect = angular.module('ClockDirect', []);
ClockDirect.directive('clockDirective', function(){
  return {
    restrict:'AEC',
    replace: 'true',
    templateUrl : '/clock.html',
    link : function(scope){

      scope.countDown = function(){
            var clockOutput = document.getElementById('timer');
            var duration = 900;
            var timer = duration, minutes, seconds;
            setInterval(function(){

                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                duration = minutes + ":" + seconds;
                console.log(duration);
                clockOutput.innerHTML = duration;
                if(--timer < 0){
                    timer = duration;
                }

            }, 1000);
          };
          countDown();
        };
  }
});

//
// var clock = function(){
//         var clockOutput = document.getElementById('timer');
//         var duration = 900;
//         var timer = duration, minutes, seconds;
//         setInterval(function(){
//
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);
//
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
//
//             duration = minutes + ":" + seconds;
//             console.log(duration);
//             clockOutput.innerHTML = duration;
//             if(--timer < 0){
//                 timer = duration;
//             }
//
//         }, 1000);
//     };
//
//   clock();
