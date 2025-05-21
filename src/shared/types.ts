export interface TodoItem {
    id: string;
    todoName: string;
    completed: boolean;
}

export type FilterType = 'All' | 'Completed'