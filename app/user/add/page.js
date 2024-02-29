'use client'

import { useState } from "react"

const AddNewUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandle = async () => {
    let res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({name, age, email})
    })
    res = await res.json();
    if(res.code === '00') {
      alert('Tạo thành công');
    } else {
      alert(res.message);
    }
  }
  return (
    <div>
      <input 
        type="text" 
        onChange={e => setName(e.target.value)} 
        value={name} 
        placeholder="Enter your name"
      />
      <br />
      <input 
        type="number" 
        onChange={e => setAge(e.target.value)} 
        value={age} 
        placeholder="Enter your age"
      />
      <br />
      <input 
        type="text" 
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        placeholder="Enter your email"
      />
      <br />
      <button onClick={addNewUserHandle}>Add</button>
    </div>
  )
}

export default AddNewUser