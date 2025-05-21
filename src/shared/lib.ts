import { MIN_LENGTH } from "./const";
import { FilterType, TodoItem } from "./types"

const checkDuplicates = (arr: TodoItem[], checkedValue: string) => {
    return Boolean(arr.find((todo) => todo.todoName === checkedValue));
}

const checkDisabledBtn = (length: number) => {
    return length < MIN_LENGTH;
};

const filterTodos = (arr: TodoItem[], filter: FilterType) => {
    if (filter === 'Completed') {
        return arr.filter(el => el.completed)
    }
    return arr;
}

export { checkDuplicates, checkDisabledBtn, filterTodos }