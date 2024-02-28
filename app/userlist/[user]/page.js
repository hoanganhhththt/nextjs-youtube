'use client'

const UserInfoPage = ({ params }) => {
  console.log(params)
  return (
    <div>Hello {params?.user}</div>
  )
};

export default UserInfoPage;