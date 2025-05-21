import { useState } from "react";

import { TodoBadge } from '../todo-badge';
import { TodoEdit } from "../todo-edit";
import { TodoList } from "../todo-list";
import { TodoAdd } from "../todo-add";
import { TodoFilters } from "../todo-filters";
import { TodoSearch } from "../todo-search";
import { filterTodos, FilterType, TodoItem } from "../../shared";
import "./index.scss";

function TodoMain() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodoValue, setNewTodoValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelectedTodo, setIsSelectedTodo] = useState<TodoItem | null>(null);
    const [filter, setFilter] = useState<FilterType>('All');
    const [searchValue, setSearchValue] = useState('');

    const searchedTodos = todos.filter((todo) => todo.todoName.match(searchValue));
    const filteredTodos = filterTodos(searchValue ? searchedTodos : todos, filter);

    return (
      <div className='todo-list'>
        <TodoBadge count={todos.length ?? 0} />
        <div className="todo-list__filters">
          <TodoFilters filter={filter} setFilter={setFilter} />
          <TodoAdd 
            newTodoValue={newTodoValue} 
            setNewTodoValue={setNewTodoValue} 
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoEdit 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen} 
          isSelectedTodo={isSelectedTodo}
          setIsSelectedTodo={setIsSelectedTodo}
          setTodos={setTodos}
        />
        <TodoList 
          todos={filteredTodos} 
          setTodos={setTodos} 
          setIsModalOpen={setIsModalOpen} 
          setIsSelectedTodo={setIsSelectedTodo}
        />
      </div>
    );
  };

export { TodoMain };