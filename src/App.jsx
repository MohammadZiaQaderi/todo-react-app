import { useState } from "react";

function App() {

  const [name, setName]=useState("")
  const [items,setItems]=useState([]);

  function handleChange(event) {
     setName(event.target.value) 
  }

  function handler() {
     setItems([...items,name])
     setName("");
  }
  return (
    <div style={{display:"grid",justifyContent:"center",}}>
      <input type="text" onChange={handleChange} value={name}/>
      <input type="button" value="Add" onClick={handler}/>
      <ul>
         {items.map((item,index) => <li key={index}>{item}ff</li> ) }
      </ul>
    </div>
  )
}
export default App;