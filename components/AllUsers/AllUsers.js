'use client'

import { List, ListItem, Card } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

const AllUsersPage = () => {
  const [users, setUsers] = useState('');

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await fetch('/api/users');
      const userInfo = await res.json();
      setUsers(userInfo.result);
    };
    fetchAllUsers();
  }, [])
  return (
    <div>
      {users && users.map((user) => (
        <Card key={user.id} className='mb-4'>
          <List>
              <ListItem>{user.name}</ListItem>
          </List>
        </Card>
      ))}
    </div>
  )
}

export default AllUsersPage