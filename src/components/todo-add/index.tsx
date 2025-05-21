import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import "./index.scss";
import { checkDisabledBtn, checkDuplicates, TodoItem } from "../../shared";

interface Props {
  newTodoValue: string;
  setNewTodoValue: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

function TodoAdd({ newTodoValue, setNewTodoValue, todos, setTodos }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const disabledBtn = checkDisabledBtn(newTodoValue.length);
  const hasDuplicates = checkDuplicates(todos, newTodoValue);

  const handleAdd = () => {
    if (!newTodoValue.trim() || disabledBtn || hasDuplicates) return;
    setTodos([...todos, { id: String(Date.now()), todoName: newTodoValue.trim(), completed: false }]);
    setNewTodoValue('');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="add-todo">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
            <PlusOutlined/> Add Todo
        </Button>
        <Modal
          key='add-new-todo'
          title="Add a new todo"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={
            <>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type="primary" disabled={disabledBtn || hasDuplicates} onClick={handleAdd}>Add</Button>
            </>
          }
        >
          <Input
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
            onPressEnter={handleAdd}
            placeholder="Add a new todo"
            allowClear
            status={hasDuplicates ? 'error' : undefined }
          />
          {hasDuplicates && <span style={{ color: 'red' }}>have duplicates</span>}
        </Modal>
      </div>
  )
}

export { TodoAdd }