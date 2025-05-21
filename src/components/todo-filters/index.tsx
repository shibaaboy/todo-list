import { Checkbox } from "antd";

import { FilterType } from "../../shared";
import "./index.scss";

interface Props {
    filter: FilterType;
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

function TodoFilters ({ filter, setFilter }: Props) {
  return (
    <div className="todo-filters">
        <h3 className="todo-filters__title">Filters:</h3>
        <Checkbox
            checked={filter === 'All'}
            onChange={() => setFilter('All')}
        >
            All
        </Checkbox>
        <Checkbox
            checked={filter === 'Completed'}
            onChange={() => setFilter('Completed')}
        >
            Completed
        </Checkbox>
    </div>
  )
}

export { TodoFilters }