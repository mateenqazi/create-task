import React from "react"

interface List {
  title: string,
  priority: number,
  id: string,
  creater: string
}


interface Props {
  list: List[]
}

const Main: React.FC<Props> = (props: Props) => {
  const { list } = props
  return (
    <div>
      {list.length ?
        <table className="table">
          <tr>
            <th>Title</th>
            <th>Priorty</th>
            <th>Create by</th>
          </tr>
          {list.map((item) => {
            return <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.priority}</td>
              <td>{item.creater}</td>
            </tr>
          })}</table> : <h1>No List is Available</h1>
      }
    </div>
  )
}

export default Main
