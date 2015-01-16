var app = angular.module('myApp', ['ng-polymer-elements']);
app.controller('devicesController', ['$scope', function($scope){
	$scope.devices = [
		{deviceName:'Nexus 5', antiteft:true, privacy:true, settings:true, vulnerability:false, protection:false, optimizer:false},
		{deviceName:'My Dell', antiteft:true, privacy:false, settings:false, vulnerability:true, protection:true, optimizer:true},
		{deviceName:'Nokia 920', antiteft:false, privacy:true, settings:true, vulnerability:false, protection:false, optimizer:true}
	];
}]);

app.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
});