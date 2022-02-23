import { Link } from 'react-router-dom'

const Sidebar = () => {

  return <div className='sidebar'>
    <Link to="/" >Main</Link>
    <Link to="/list-tasks">List Tasks</Link>
    <Link to="/create-task" >Create Task</Link>
    <Link to="/bulk-delete">Bulk Delete</Link>
  </div>;
}

export default Sidebar;
