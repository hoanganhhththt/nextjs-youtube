'use client'

import { useState } from 'react'
import { Button, Input } from '@material-tailwind/react'

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !age || !email || !password) {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }
    try {
      const res = await fetch('/api/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, age, email, password})
      })
      const result = await res.json();
      if(result.code === '00') {
        alert('tạo thành công');
        return;
      } else {
        alert('co lỗi')
        return;
      }
    } catch(error) {
      alert(error);
      return;
    }
  } 

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input label='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></Input>
          <Input label='age' type='text' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}></Input>
          <Input label='email' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
          <Input label='password' type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
          <Button className='mt-2' type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser