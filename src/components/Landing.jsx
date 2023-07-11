import React from 'react'

const Landing = () => {
  return (
    <div className='bg-deepBlue text-white'>

    <div className= "w-[95vw] h-[90vh]  "> 
<div className='grid grid-cols-2 pl-20 pt-10'>
    <div className='text-left flex flex-col gap-5 justify-center al' >
        <h1 className=' leading-tight flex flex-col gap-5' > 
        <span className='text-secondary font-semibold text-6xl'> Gauge Water Purifier </span>
        <span className='font-light text-4xl'>"Puts An End To R.O. Service Pain"</span>
        </h1>
        <div className=' flex flex-col border-l-[4px] border-trasp border-l-indigo-500 p-0 pl-2 text-slate-400      '>

        <span className=''>Fully automatic water purifier provides the highest water <br /> savings while ensuring a seamless service experience.</span>
        <span className='mt-1'>Experience Convenience Like Never Before <br /> With Our Smart Water Purifier.</span>
        </div>

        
            <a  href="#section2">
        <button    className='h-10 w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 hover:to-indigo-500 ease-linear rounded-md font-semibold ' style={{cursor:"pointer"}}>

            Take A Product Tour
            
            </button>
        </a>
    </div>
    <div className='w-[45vw]'>
        <img src="./Images/mobile-landing.png" className='drop-shadow-[0_35px_35px_rgba(1,1,1,0.25)] w-5/6 '  alt="" />
    </div>
</div>
    </div>
    <div className='w-screen h-[10vh] flex justify-center' >
        <a href="#section2">

        <img src="./Images/scrollDown.png" className='w-[25px] h-[25px] animate-bounce'  style={{cursor:"pointer"}}   alt="" />
        </a>
    </div>
    </div>

  )
}

export default Landing