'use client'

import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { useState } from 'react'
import AllUsersPage from '../AllUsers/AllUsers';
import SpecificUser from '../SpecificUser/SpecificUser';
import CreateUser from '../CreateUser/CreateUser';

const AccordionUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className='w-[40rem]'>
      <Accordion open={open ===1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsersPage />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search For Specific User
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Create User
        </AccordionHeader>
        <AccordionBody>
          <CreateUser />
        </AccordionBody>
      </Accordion>
    </section>
  )
}

export default AccordionUI