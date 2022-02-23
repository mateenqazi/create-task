import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const { v4: uuidv4 } = require('uuid');

interface List {
  title: string,
  priority: number,
  id: string,
  creater: string
}

interface Props {
  setState: any,
  list: List[]
}

const NewTask = (props: Props) => {
  const navigate = useNavigate()
  const { setState, list } = props;
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("")
  const [creater, setCreater] = useState("")


  const onSubmitHandler = () => {
    const obj = {
      id: uuidv4(),
      title,
      priority,
      creater
    }
    const temp = [...list, obj]
    setState(temp)
    navigate("/")

  }

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangePriorityHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPriority(e.target.value)
  }

  const onChangeCreaterHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCreater(e.target.value)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label>
        <input type={"text"} name="title" value={title} onChange={onChangeTitleHandler} required />
      </div>
      <div>
        <label>Priority</label>
        <input type={"number"} name="priority" value={priority} onChange={onChangePriorityHandler} required min={0} max={10} />
      </div>
      <div>
        <label>Create by</label>
        <input type={"text"} name="creater" value={creater} onChange={onChangeCreaterHandler} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewTask
