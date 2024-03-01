import AccordionUI from '@/components/AccordionUI/AccordionUI';
import CatImage from '@/public/cat.jpg'
import Image from 'next/image';

const UserPage = () => {
  return (
    <div className='flex flex-col justigy-center items-center mt-10'>
      <AccordionUI />
      {/* <Image src={CatImage} alt='cat image' /> */}
    </div>
  )
};

export default UserPage;