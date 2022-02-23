import { useState } from "react"

interface List {
  title: string,
  priority: number,
  id: string,
  creater: string
}


interface Props {
  list: List[],
  setState: any,

}
const DeleteTask = (props: Props) => {
  const { list, setState } = props
  const [tempArr, setTempArr] = useState<string[]>([])

  const clickHandler = (id: string) => {
    if (!tempArr.includes(id)) {
      const temp = [...tempArr, id]
      setTempArr(temp)
    } else {
      const filtered = tempArr.filter((value) => value !== id);
      setTempArr(filtered)
    }
  }

  const deleteHandler = () => {
    if (window.confirm("Delete the item?")) {
      let filtered = list.filter((item) => {
        return tempArr.find(
          (val) => val !== item.id
        );
      });
      setState(filtered)
      setTempArr([])
    }
  }
  return (
    <div>
      {list.length ? <button onClick={deleteHandler} type="button" className={`bulk-delete ${!tempArr.length ? "disabled" : ""}`}>Bulk Delete</button> : null}

      {list.length ?
        <table className="table">
          <tr>
            <th>Title</th>
            <th>Priorty</th>
            <th>Create by</th>
            <th>Is Deleted? </th>
          </tr>
          {list.map((item) => {
            return <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.priority}</td>
              <td>{item.creater}</td>
              <td><input type="checkbox" onClick={() => clickHandler(item.id)} /></td>
            </tr>
          })}</table> : <h1>No List is Available</h1>
      }
    </div>
  )
}

export default DeleteTask
