var todoServices = angular.module("todoServices", ["ngResource"]);

todoServices.factory('todoResource', ['$resource', function ($resource) {
    return $resource('/data/todo/:id');
}]);