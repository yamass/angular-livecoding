var todoModule = angular.module("TodoApp", ["todoServices"]);

todoModule.value("myValue", "Hallo myValue");

todoModule.controller("TodoController", function(myValue, todoService, $http) {
    var me = this;

    me.todos = [];
    $http.get("http://localhost:8080/data/todo").success(function(todosFromServer) {
        me.todos = todosFromServer;
    });

    me.newTodo = {};

    me.numberOfRemainingTodos = function() {
        return me.todos.filter(function(todo) {return !todo.done;}).length;
    };

    me.addTodo = function() {
        $http.post("http://localhost:8080/data/todo", me.newTodo)
                .success(function (persistedTodo) {
                    me.todos.push(persistedTodo);
                    me.newTodo = {title : "", done: false};
                }).error(function () {
                    console.log("ERROR while writing todo!");
                });
    }
});

var todoServices = angular.module("todoServices", []);

todoServices.service("todoService", function($http) {

    var me = this;
    var idCounter = 1;

    var todos = [
        {title: "Haircut", done: false},
        {title: "Milch und Brot kaufen", done: true}
    ];

    this.getAll =function() {

        return todos;
    };

    this.add = function(todo) {
        todos.push(todo);
        todo.id = idCounter++;
        return todo;
    }
});