import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Checkbox, Empty, List } from 'antd'

import { TodoItem } from "../../shared";
import "./index.scss";


interface Props {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelectedTodo: React.Dispatch<React.SetStateAction<TodoItem | null>>;
}

function TodoList({ todos, setTodos, setIsModalOpen, setIsSelectedTodo }: Props) {
  if (!todos && !setTodos) return null;

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const showModal = (item: TodoItem) => {
    setIsModalOpen(true);
    setIsSelectedTodo(item)
  }

  return (
    <List
      locale={{ emptyText: <Empty description="Empty list"/> }} 
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(item) => (
        <List.Item>
          <Checkbox
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
          />
          <List.Item.Meta
            className='item-title'
            title={
              <div style={{
                  textDecoration: item.completed ? 'line-through' : 'none',
                  color: item.completed ? 'gray' : 'black',
                }}>
                  {item.todoName}
              </div>
            }
          />
          <div className='todo-btns'>
            <Button onClick={() => deleteTodo(item.id)} >
              <DeleteOutlined />Delete
            </Button>
            <Button type="primary" onClick={() => showModal(item)}>
              <EditOutlined />Edit
            </Button>
          </div>
        </List.Item>
      )}
    />
  )
}

export { TodoList }