var app = angular.module("myapp", []);
app.service("myservice", function() {
	this.add = function(x, y) {
		return x + y
	}
	this.sub = function(x, y) {
		return x - y
	}
	this.mul = function(x, y) {
		return x * y
	}
	this.div = function(x, y) {
		return x / y
	}
	
});

app.controller("mycontroller", function($scope, myservice) {
	$scope.add = function() {
		$scope.ans = myservice.add($scope.num1, $scope.num2);
	}

	$scope.sub = function() {
		$scope.ans = myservice.sub($scope.num1, $scope.num2);
	}

	$scope.mul = function() {
		$scope.ans = myservice.mul($scope.num1, $scope.num2);
	}

	$scope.div = function() {
		$scope.ans = myservice.div($scope.num1, $scope.num2);
	}

}
);