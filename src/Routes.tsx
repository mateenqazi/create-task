import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './CreateTask.tsx/Dashboard';
import DeleteTask from './CreateTask.tsx/DeleteTask';
import Main from './CreateTask.tsx/ListTask';
import NewTask from './CreateTask.tsx/NewTask';


interface List {
  title: string,
  priority: number,
  id: string,
  creater: string
}
const MainRoutes = () => {
  const [list, setList] = useState<List[]>([])
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list-tasks" element={<Main list={list} />} />
      <Route path="/create-task" element={<NewTask setState={setList} list={list} />} />
      <Route path="/bulk-delete" element={<DeleteTask setState={setList} list={list} />} />

    </Routes>
  )
}

export default MainRoutes
