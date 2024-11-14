import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const headerMenu = [
       { id:1,
        name:'Ride',
        icon:'/taxi.jpeg'
    },
       { id:1,
        name:'Package',
        icon:'/box.jpeg'
    },
    ]
  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-start justify-between'>
      <div className='gap-24 flex items-center'>
        <Image src='/logo.png' width={70} height={70} alt='Logo' />
        <div className='flex gap-6 items-center'>
            {headerMenu.map((item)=>(
                <div key={item.id} className='flex gap-2 items-center' >
                    <Image src={item.icon} width={17} height={17} alt={item.name} />
                    <h2 className="text-[14px] font-medium"></h2>
                </div>
            ))}
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default Header
