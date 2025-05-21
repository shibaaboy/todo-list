import { Input } from "antd";

interface Props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function TodoSearch({ searchValue, setSearchValue }: Props) {

    return (
        <div className="add-todo">
            <Input.Search
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search a todo"
                allowClear
            />
        </div>
    )
}

export { TodoSearch }