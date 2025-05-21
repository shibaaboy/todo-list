import { Button, Input, Modal } from "antd";
import { useMemo, useState } from "react";

import { TodoItem } from "../../shared";
import "./index.scss";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectedTodo?: TodoItem | null;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setIsSelectedTodo: React.Dispatch<React.SetStateAction<TodoItem | null>>;
}

function TodoEdit({ isModalOpen, setIsModalOpen, isSelectedTodo, setTodos, setIsSelectedTodo }: Props) {
  const [editTodo, setEditTodo] = useState(isSelectedTodo?.todoName ?? '');

  const disabledEdit = editTodo.length < 1;

  useMemo(()=> {
    if (isSelectedTodo && isSelectedTodo.todoName) {
      setEditTodo(isSelectedTodo.todoName)
    }
  }, [isSelectedTodo]);

  const handleEdit = () => {
    if (disabledEdit) return;
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === isSelectedTodo?.id ? { ...todo, todoName: editTodo.trim() } : todo
      )
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsSelectedTodo(null);
  };

  return (
    <div className="todo-edit">
      <Modal
        key={`edit-modal-${isSelectedTodo?.id}`}
        open={isModalOpen}
        title="Edit todo"
        onCancel={handleCancel}
        footer={
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" disabled={disabledEdit} onClick={handleEdit}>Save</Button>
          </>
        }
      >
        <Input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onPressEnter={handleEdit}
          placeholder="Edit a todo"
          allowClear
        />
      </Modal>
    </div>
  )
}

export { TodoEdit }