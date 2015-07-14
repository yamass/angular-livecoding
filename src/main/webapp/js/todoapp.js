var todoModule = angular.module('TodoApp', ['ngResource']);

todoModule.service("Todo", ["$resource", function($resource) {
    return $resource('/data/todo/:id');
}]);

todoModule.controller('TodoController', ["Todo", function (Todo) {
    var me = this;
    this.greeting = 'Welcome!';
    this.todos = Todo.query();
    this.newTodo = {};

    this.getNumberOfDoneTodos = function() {
        return me.todos.filter(function(t) {
            return t.done == true;
        }).length;
    };
    this.addTodo = function() {
        Todo.save(me.newTodo, function(todoFromServer) {
            me.todos.push(todoFromServer);
            me.newTodo = {};
        })
    }
    this.deleteTodo = function(todoId) {
        Todo.delete({id: todoId}).$promise.then(function() {
            me.todos = me.todos.filter(function(t) {return t.id != todoId});
        });
    }
}]);