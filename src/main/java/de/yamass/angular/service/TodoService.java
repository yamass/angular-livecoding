package de.yamass.angular.service;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping(value = "data/todo")
public class TodoService {

    private final Map<Integer, Todo> todos = Collections.synchronizedMap(new LinkedHashMap<>());
    private static AtomicInteger idCounter = new AtomicInteger(1);

    public TodoService() {
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Todo> getAllTodos() {
        return new ArrayList<>(todos.values());
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Todo getTodo(@PathVariable("id") int id) {
        return todos.get(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Todo addTodo(@RequestBody Todo todo) {
        int id = idCounter.getAndIncrement();
        todo.setId(id);
        todos.put(id, todo);
        return todo;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void updateTodo(@PathVariable("id") int id, @RequestBody Todo todo) {
        todo.setId(id);
        todos.put(id, todo);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public Todo deleteTodo(@PathVariable("id") int id) {
        return todos.remove(id);
    }
}