import React from 'react'
import { navigationMenu } from './NavigationMenu'

function Navigation() {
  return (
    <div className='h-screen sticky top-0' >
        <div>
            <div className='py-5'>
                <img src='logo.png' alt='logo' height={50} width={50} />
            </div>
            <div className='space-y-6'>
                {navigationMenu}
            </div>
        </div>
    </div>
  )
}

export default Navigation