import React from 'react'
import logo from '../assets/logo.svg'
import '../NavBar.css';
import arrow from '../assets/icon-arrow-down.svg'
import todo from '../assets/icon-todo.svg'
import planning from '../assets/icon-planning.svg'
import reminders from '../assets/icon-reminders.svg'
import calendar from '../assets/icon-calendar.svg'

const NavBar = () => {
  return (
    <div className='flex justify-between px-14 text-sm'>
        <div className='flex gap-x-16 '>
            <img src={logo} alt="logo" className='cursor-pointer max-h-6'/>
            <ul className='flex md:gap-x-5 lg:gap-x-9 text-customgray'>
                <div className='drop relative'>
                <li className='droptitle  hover:text-customblack cursor-pointer pb-2'>Features <img src={arrow} alt="" className='arrowdrop inline pl-1 text-customgray'/></li>
                    <ul className='uldrop absolute w-36 top-6 right-0 px-4 py-4 rounded-lg hover:visible hover:transition-all bg-white drop-shadow-2xl '>
                        <li className='pb-4 pt-2 hover:text-customblack cursor-pointer'><img className='inline pr-2 w-6' src={todo} alt="/" /> Todo List</li>
                        <li className='pb-4 hover:text-customblack cursor-pointer'> <img className='inline pr-2 w-6' src={calendar} alt="/" /> Calendar</li>
                        <li className='pb-4 hover:text-customblack cursor-pointer'> <img className='inline pr-2 w-6' src={reminders} alt="/" /> Reminders</li>
                        <li className='pb-1 hover:text-customblack cursor-pointer'> <img className='inline pr-2 w-6' src={planning} alt="/" /> Planning</li>
                    </ul>
                </div>
                
                <div className='drop relative'>
                <li className='droptitle  hover:text-customblack cursor-pointer pb-2'>Company<img src={arrow} alt="" className='arrowdrop inline pl-1 text-customgray'/></li>
                    <ul className='uldrop absolute w-28 top-6 left-0 px-4 py-4 rounded-lg hover:visible hover:transition-all bg-white  drop-shadow-2xl'>
                        <li className='pb-4 pt-2 hover:text-customblack cursor-pointer'>Todo List</li>
                        <li className='pb-4 hover:text-customblack cursor-pointer'>Calendar</li>
                        <li className='pb-1 hover:text-customblack cursor-pointer'>Reminders</li>
                    </ul>
                </div>
                
                <li className='hover:text-customblack cursor-pointer'>Careers</li>
                <li className='hover:text-customblack cursor-pointer'>About</li>
            </ul>
        </div>

        <div className='flex text-customgray md:gap-x-2 gap-x-8'>
        <div className='cursor-pointer hover:text-customblack pl-4'>Login</div>
        <div className='cursor-pointer rounded-xl border-2 px-5 py-2 -mt-2.5 justify-center text-center hover:text-customblack hover:border-customblack '>Register</div>
        </div>    
        

    </div>
  )
}

export default NavBar