'use client'

import { Button, Card, Input, List, ListItem } from '@material-tailwind/react'
import { useState } from 'react'

const SpecificUser = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await fetch(`/api/users/${userId}`);
    const result = await res.json();
    if (result.code === '00') {
      setUserData(result?.user);
    } else {
      console.log("Error fetching user data");
      setUserData(null);
    }
  }
  return (
    <div>
      <div className='flex'>
        <div className='w-72'>
          <Input label='Enter User ID' type='text' value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <Button onClick={fetchUserData}>Fetch User</Button>
      </div>
      {userData ? (
        <>
          <Card className='w-96 mt-5'>
            <List>
              <ListItem>Id: {userData.id}</ListItem>
              <ListItem>Name: {userData.name}</ListItem>
              <ListItem>Age: {userData.age}</ListItem>
              <ListItem>Email: {userData.email}</ListItem>
              <ListItem>Password: {userData.password}</ListItem>
            </List>
          </Card>
        </>
      ) : (
        <p className='mt-2'>Search user</p>
      )}
    </div>
  )
}

export default SpecificUser