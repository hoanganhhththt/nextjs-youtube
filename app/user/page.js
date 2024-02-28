import CatImage from '@/public/cat.jpg'
import Image from 'next/image';

const UserPage = () => {
  return (
    <div>
      User Page
      <Image src={CatImage} alt='cat image' />
    </div>
  )
};

export default UserPage;