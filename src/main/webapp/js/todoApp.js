var todoModule = angular.module("TodoApp", []);



todoModule.controller("TodoController", function() {
    var me = this;

    me.todos = [
        {title: "Haircut", done: false},
        {title: "Milch und Brot kaufen", done: true}];

    me.newTodo = {};

    me.numberOfRemainingTodos = function() {
        return me.todos.filter(function(todo) {return !todo.done;}).length;
    }

    me.addTodo = function() {
        me.todos.push(me.newTodo);
        me.newTodo = {};
    }
});