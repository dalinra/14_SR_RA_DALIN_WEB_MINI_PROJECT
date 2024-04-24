import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'
import Welcom from '../../../public/assets/icons/Welcom.png'
import Image from 'next/image'
const page = async () => {
  return (
    <div className=' w-full flex'>  
    <div className=" w-[20%]">
    <SidebarComponent/>
    </div>
    <div className=" w-[80%] ml-5">
    <NavbarComponent/>
     <div className=' ml-40 py-20' >
        <Image src={Welcom}/>
    </div>
    </div>
</div>   
  )
}

export default page