import React, { Component, useRef, useState } from 'react'

export default function App() {
  const input = useRef()
  const [list, setlist] = useState([])
  const delitem = (index)=>{
    const deletetask = list.filter((_, i) => i !== index)
    setlist(deletetask) 
  }
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={() => {
        if(input.current.value === ""){
          alert("task input is empty")
        }else{
          const tasks = [...list]
          tasks.push(input.current.value)
          setlist(tasks)
        }
      }}>Addtask</button>
      <ul>
        {
          list.map((el, index) => {
            return <li key={index}>{index + 1}-{el}  <button onClick={()=> delitem(index)}>X</button></li>
          })
        }
      </ul>
    </div>
  )
}
