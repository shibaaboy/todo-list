import { Badge } from 'antd'
import "./index.scss";

interface Props {
    count?: React.ReactNode;
}

function TodoBadge({ count }: Props) {
    return (
        <div className='todo-badge'>
            <h2>All todos:</h2> 
            <Badge count={count} showZero color="blue" />
        </div>
    )
}

export { TodoBadge }