import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate=useNavigate();
  return (
    <div className='h-screen sticky top-0' >
        <div>
            <div className='py-5'>
                <img src='logo.png' alt='logo' height={50} width={50} />
            </div>
            <div className='space-y-6'>

                {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 items-center'
                onClick={()=>item.title==="Profile"?navigate(`/profile/${5}`)
                :navigate(item.path)} >
                    {item.icon}
                    <p className='text-xl'>{item.title}</p>

                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Navigation