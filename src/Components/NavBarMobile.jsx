import React, { useState } from 'react'
import logo from '../assets/logo.svg'



const NavBarMobile = (props) => {
    const [hamburger,setHamburger] = useState(false)
 

    const handleHamburger = () => {
        setHamburger(!hamburger)
    }
  return (

 <nav className='flex justify-between w-screen px-3'>
    <div className='block scale-95'>
        <img src={logo} alt="" />
    </div>
    <div className="block space-y-1 cursor-pointer" onClick={handleHamburger}>
        <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' rotate-45 translate-y-[0.4rem] ' : ' ' )}></span>
        <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out duration-250 ' + (hamburger ? '  -rotate-45 -translate-y-[0.02rem] ' : '  ') }></span>
        <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' -rotate-45 -translate-y-[0.4rem]' : ' ')}></span>
    </div>
   


</nav>
  )
}

export default NavBarMobile