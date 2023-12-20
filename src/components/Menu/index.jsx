import { FiSettings } from "react-icons/fi"; 
import { GrUserManager } from "react-icons/gr"; 
import { CgMail } from "react-icons/cg"; 
import React from 'react'

function Menu() {
  return (
    <div className='flex gap-10 justify-center'>
      <div className='w-[550px] h-[70px] bg-[#6DD3D6] text-white flex items-center gap-10 px-10 justify-start'>
        <p className='uppercase'>Menu</p>
        <p className='uppercase'>Link</p>
        <p className='uppercase'>Link</p>
        <p className='uppercase'>Dropdown</p>
      </div>
      <div className='w-[550px] h-[70px] bg-[#C45D4B] text-white flex items-center gap-10 px-10 justify-between'>
        <p className='uppercase'>Icons</p>
        <div className='flex gap-4'>
            <CgMail size={20}/>
            <GrUserManager size={20}/>
           <FiSettings size={20}/>
        </div>
     </div><br />
    </div>
  )
}

export default Menu