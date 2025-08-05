import React from 'react'
import { FiPackage } from 'react-icons/fi'
import { SiTicktick } from "react-icons/si";


export default function Container() {
  return (
    <div className='flex-1  mb-4 '>
        <div className='bg-primary-500 rounded-lg shadow p-6 '>
            <div className='flex items-start gap-4'>
                <FiPackage className='text-2xl bg-primary-100 rounded size-10 text-secondary-400' />
                <div>
                    <h2 className='text-xl font-semibold mb-2 text-secondary-400'>iHUZA INVENTORY - System Overview</h2>
                    <p className='text-secondary-400 mb-2'>Monitor your iHUZA inventory and product assignments in real-time.</p>
                    <div className='flex items-center gap-2'>
                       <SiTicktick className='text-2xl text-secondary-100' />
                        <span className='text-secondary-400'>All systems operational</span>
                    </div>
                </div>
            </div>
            
          </div>
    </div>
  )
}
