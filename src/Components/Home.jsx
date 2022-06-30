import React,  {useState} from 'react'
import NavBar from './NavBar'
import heroimg from '../assets/image-hero-desktop.png'
import heroimgmobile from '../assets/image-hero-mobile.png'
import databiz from '../assets/client-databiz.svg'
import audiophile from '../assets/client-audiophile.svg'
import meet from '../assets/client-meet.svg'
import maker from '../assets/client-maker.svg'
import logo from '../assets/logo.svg'
import arrow from '../assets/icon-arrow-down.svg'
import todo from '../assets/icon-todo.svg'
import planning from '../assets/icon-planning.svg'
import reminders from '../assets/icon-reminders.svg'
import calendar from '../assets/icon-calendar.svg'


const Home = () => {
  const [hamburger,setHamburger] = useState(false)
  const [list,setList] = useState(false)
  const [list2,setList2] = useState(false)

  const handleHamburger = () => {
    setHamburger(!hamburger)}

  const toggleLi = () => {
    setList(!list)}
  
  const toggleLi2 = () => {
    setList2(!list2)}

  const handleClickList = () => {
    handleHamburger()
    setList(false)
    setList2(false)
  }


  return (
  <div className='font-Epilogue  md:px-10 lg:px-24 xl:px-36 max-h-screen max-w-screen overflow-x-hidden md:overflow-y-hidden md:pt-8 md:pb-10 bg-customwhite'>
    <div className='hidden md:block'>
      <NavBar /> 
    </div>
    <div className='block md:hidden'>
    <ul className={!hamburger ? 'absolute opacity-0 right-0 ' : 'h-screen absolute top:0 right-0 opacity-100 pl-6 pt-14 delay-75 duration-700 transition-all w-3/5 bg-white text-customgray z-10'}>
      <div>
       <li  onClick={toggleLi} className='text-customgray cursor-pointer pb-4'>Features <img src={arrow} alt="" className={list ? 'rotate-x-180 transition-all duration-300 ease-in-out inline pl-1 text-customgray':'inline pl-1 text-customgray'}/></li>
                    <ul  className={!list ? 'hidden' : 'rounded-lg  hover:transition-all bg-white'}>
                        <li className='pb-4 pl-4 text-customgray cursor-pointer' onClick={handleClickList}><img className='inline pr-2 w-6' src={todo} alt="/" /> Todo List</li>
                        <li className='pb-4 pl-4 text-customgray cursor-pointer' onClick={handleClickList}> <img className='inline pr-2 w-6' src={calendar} alt="/" /> Calendar</li>
                        <li className='pb-4 pl-4 text-customgray cursor-pointer' onClick={handleClickList}> <img className='inline pr-2 w-6' src={reminders} alt="/" /> Reminders</li>
                        <li className='pb-4 pl-4 text-customgray cursor-pointer' onClick={handleClickList}> <img className='inline pr-2 w-6' src={planning} alt="/" /> Planning</li>
                    </ul>
      </div>
                
      <div>
                <li onClick={toggleLi2} className='text-customgray cursor-pointer pb-4'>Company<img src={arrow} alt="/" className={list2 ? 'rotate-x-180 transition-all duration-300 ease-in-out inline pl-1 text-customgray':'inline pl-1 text-customgray'}/></li>
                  <ul  className={!list2 ? 'hidden' : 'rounded-lg hover:transition-all bg-white'}>
                          <li className='pb-4 pl-4 hover:text-customblack cursor-pointer' onClick={handleClickList}>Todo List</li>
                          <li className='pb-4 pl-4 hover:text-customblack cursor-pointer' onClick={handleClickList}>Calendar</li>
                          <li className='pb-4 pl-4 hover:text-customblack cursor-pointer' onClick={handleClickList}>Reminders</li>
                  </ul>
      </div>
                
                <li className='hover:text-customblack cursor-pointer pb-4' onClick={handleClickList}>Careers</li>
                <li className='hover:text-customblack cursor-pointer pb-4' onClick={handleClickList}>About</li>
          <div className='flex flex-col justify-center items-center text-customgray pt-5 pr-6'>
            <div className='cursor-pointer pb-2'>Login</div>
            <div className='cursor-pointer rounded-xl border-2 border-customgray px-16 py-2 justify-center text-center'>Register</div>
          </div>

    </ul>

    <nav className='flex justify-between w-screen px-5 pt-4'>
        <div className='block scale-95'>
            <img src={logo} alt="" />
        </div>

        <div className="block space-y-1 cursor-pointer z-10" onClick={handleHamburger}>
            <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' rotate-45 translate-y-[0.4rem] ' : ' ' )}></span>
            <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out duration-250 ' + (hamburger ? '  -rotate-45 -translate-y-[0.02rem] ' : '  ') }></span>
            <span className={' flex w-6 h-[0.15rem] rounded-full bg-customblack transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' -rotate-45 -translate-y-[0.4rem]' : ' ')}></span>
        </div>
      </nav>

    </div>

    <div className='flex flex-col md:flex-row md:mt-6 lg:mt-10 xl:mt-0 2xl:mt-0 md:px-4 sm:px-30'>
    <div className='flex w-screen md:hidden py-4'>
      <img src={heroimgmobile} alt="/"/>
    </div> 

      <div className='flex flex-col md:w-3/5 sm:px-4 md:px-8 lg:px-20 md:pt-8 lg:pt-28  '>
        <h1 className='hidden md:block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black font-Epilogue'>Make</h1>
        <h1 className='hidden md:block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black font-Epilogue'>remote work</h1>
        <h1 className='md:hidden text-3xl font-black font-Epilogue text-center pb-4'>Make remote work</h1>
        <div className='sm:w-78 md:w-96 lg:w-50 xl:w-96'>
          <p className='font-lg text-customgray text-center px-5 sm:px-0 xs:text-justify sm:text-start sm:pt-8 md:pt-4 lg:pt-12 xl:pt-14'>Get you team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        </div>

        <div className='flex  justify-center sm:justify-start pt-6 md:pt-4 lg:pt-8 xl:pt-12 pb-20 sm:pb-0 font-Epilogue'>
          <button className='rounded-lg md:rounded-md bg-customblack text-customwhite px-5 py-3 border-2 border-customblack hover:text-customblack hover:bg-customwhite hover:border-2  hover:ease-in-out transition duration-300'>Learn more</button>
        </div>

        <div className='flex flex-row justify-between sm:justify-start px-4 sm:px-0 md:gap-x-8 lg:gap-x-12 h-full items-end'>
          <img src={databiz} alt='/' className='w-20'/>
          <img src={audiophile} alt='/' className='w-12'/>
          <img src={meet} alt='/' className='w-16'/>
          <img src={maker} alt='/' className='w-16'/>
        </div>

      </div>

    <div className='flex flex-1 md:flex-col max-h-max p-2'>
      <img src={heroimg} alt="/" className='hidden md:block'/>
    </div> 

    
    </div>

  </div>
)
  }


export default Home