  var app = angular.module('myApp',['angular-steps']);

  app.controller('myCtrl', function($scope,StepsService) {
    $scope.students = [];
    $scope.tell1="hi";
    $scope.fetch =function()
    {
      $scope.tell1=$scope.tell;
      //console.log( $scope.tell1)
      $scope.concat();
    }
$scope.concat=function()
{
  console.log("concat")
  //$scope.q1={};
  $scope.q1={"Q1":$scope.tell1};
  $scope.students.push($scope.q1);
  localStorage.setItem("students", JSON.stringify($scope.students));

var stored = JSON.parse(localStorage.getItem("students"));
console.log(stored);



}

  });
 
  
