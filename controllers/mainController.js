angular.module('mainController',[])
.controller('mainCtrl', function($scope, db){
$scope.bands = [];
$scope.activeband = {};


db.getData().then(function(result){

$scope.bands = result.data
},function(error){
	console.log(error);
})
$scope.display = function(band){
$scope.activeband = band;
}
})