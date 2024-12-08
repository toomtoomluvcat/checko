import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <nav className='bg-white'>
            <ul className=' font-kanit font-medium my-[30px] flex justify-end relative right-[20px] md:justify-center gap-x-[7px] md:gap-x-[90px]'>
                <Link href='/'><li className='hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Home</li></Link>
                <Link href='/form'><li className='hidden md:block hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Form</li></Link>
                <Link href='/howToUse'><li className='hidden md:block hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>How to use</li></Link>
                <Link target='blank' href='https://physics.sc.kku.ac.th/?page_id=727'><li className='hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Help & support</li></Link>
            </ul>
           
        </nav>
    </div>
    
  )
}

export default Nav