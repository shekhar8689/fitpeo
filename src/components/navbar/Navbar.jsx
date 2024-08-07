import React from 'react'
import mainLogo from '../../assets/fit-high-resolution-logo-white-transparent.svg'
import icon1 from '../../assets/mail-line.svg'
import icon2 from '../../assets/settings-3-line.svg'
import icon3 from '../../assets/notification-4-line.svg'
import icon4 from '../../assets/user-line.svg'




const Navbar = () => {
    return (
        <div className=' bg-1f2029 h-14 items-center px-5 flex justify-between'>
            <div className='flex gap-5 '>
                <img className='h-10 ' src={mainLogo} alt="logo" />
                <input
                    type="text"
                    className="px-4 bg-44464a text-white  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search..."
                />
            </div>

            <div className='flex h-7 gap-3'>
                <img className='rounded-full bg-gray-400 px-1 py-1 hidden md:block' src={icon1} alt="icon1" />
                <img className='rounded-full bg-gray-400 px-1 py-1 hidden md:block' src={icon2} alt="icon2" />
                <img className='rounded-full bg-gray-400 px-1 py-1 hidden md:block' src={icon3} alt="icon3" />
                <img className='rounded-full bg-gray-400 px-1 py-1 ms-4 ' src={icon4} alt="icon4" />
            </div>
        </div>
    )
}

export default Navbar