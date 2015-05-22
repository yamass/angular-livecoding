var todoModule = angular.module("TodoApp", []);

todoModule.value("myValue", "Hallo myValue");

todoModule.controller("TodoController", function(myValue, todoService) {
    var me = this;

    me.todos = todoService.getAll();

    me.newTodo = {};

    me.numberOfRemainingTodos = function() {
        return me.todos.filter(function(todo) {return !todo.done;}).length;
    };

    me.addTodo = function() {
        todoService.add(me.newTodo);
        me.newTodo = {title : "", done: false};
        console.log(myValue);
    }
});

todoModule.service("todoService", function() {

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