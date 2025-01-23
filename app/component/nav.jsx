import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <nav className='relative bg-white z-index-40'>
            <ul className=' font-kanit font-medium my-[30px] flex justify-end relative right-[20px] md:justify-center gap-x-[7px] md:gap-x-[90px]'>
                <Link href='/'><li className='hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Home</li></Link>
                <Link href='/form'><li className='hidden md:block hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Form</li></Link>
                <Link href='https://github.com/toomtoomluvcat/checko'><li className='hidden md:block hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>GitHub</li></Link>
                <Link target='blank'
                 href='/history'
                 ><li className='hover:text-[#5a5a5a] transition-all duration-300 ease-in-out'>Submit history</li>
                 </Link>
            </ul>
        </nav>
    </div>
    
  )
}

export default Nav