(function(){

var app = angular.module("githubApp",[]);

var mainCtrlFun = function($scope,$http){


    $scope.username = "js";
    $scope.message="Welcome in Github Viewer"+ $scope.username;
   
    var resUser =function(_response){
        $scope.user = _response.data;
    };
    
    var resRepos =function(_response){
        $scope.repos = _response.data;
    };
    
  // $http.get("https://api.github.com/users/mekhalifa").then(resUser);

    $scope.search= function(){
      $http.get("https://api.github.com/users/"+$scope.username).then(resUser);
      $http.get("https://api.github.com/users/"+$scope.username+"/repos").then(resRepos);
       
    };

    $scope.reposFun=function(){
       $http.get("https://api.github.com/users/"+$scope.username+"/repos").then(resRepos);
    };


};


app.controller("mainCtrl",["$scope","$http",mainCtrlFun]);
}());