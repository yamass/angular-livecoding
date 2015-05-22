var todoModule = angular.module("TodoApp", ["todoServices"]);

todoModule.value("myValue", "Hallo myValue");

todoModule.controller("TodoController", function(myValue, todoResource, $http) {
    var me = this;

    me.todos = [];

    me.todos = todoResource.query();

    me.newTodo = {};

    me.numberOfRemainingTodos = function() {
        return me.todos.filter(function(todo) {return !todo.done;}).length;
    };

    me.addTodo = function() {
        todoResource.save(me.newTodo, function (persistedTodo) {
            me.todos.push(persistedTodo);
            me.newTodo = {title : "", done: false};
        }, function (httpResponse) {
            console.log("ERROR while writing todo!");
        });
    }
});

var todoServices = angular.module("todoServices", ["ngResource"]);

todoServices.factory('todoResource', ['$resource', function ($resource) {
    return $resource('/data/todo/:id');
}]);