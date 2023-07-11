import React from "react";

const Section2 = () => {
  return (
    <div
      id="section2"
      className="w-screen h-[auto]  text-white flex justify-center flex-col gap-5 "
    >
      <div className="mt-1">
        <h1 className="text-lg tracking-[5px] textShadow" >FEATURES</h1>
      </div>
      <div className="flex   justify-center mt-5">
        <div className="w-[75vw] h-[80vh] bg-slate-200 rotate-[-1deg] translate-x-[-5px] hover:translate-y-[-10px]  z-10  rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:rotate-[0deg] hover:scale-x-[1.025] hover:scale-y-[1.025] flex ">
          <img
            src="./Images/water-lg.jpg"
            className="h-[100%] rounded-l-lg"
            alt=""
          />
          <div className="text-black text-left p-[15px] pt-[50px] flex flex-col gap-5 ">
            <div>
            <h1 className=" leading-tight flex flex-col  font-light text-3xl ">
              Take Control{" "}
              <a className="text-secondary font-semibold text-4xl">
                Monitor Usage & Change Filters
              </a>{" "}
              No Technician Needed.
            </h1>

            <span className="mt-5 text-slate-600">
              We have crafted a product that addresses the real frustrations of
              a customer. The first step is to ensure there are zero service
              delays.
            </span>

            </div>

            <div >
              <div className="bg-slate-200 p-3 rounded-lg flex gap-[5px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
                <img src="./Images/icons8-done.svg" className="w-5 h-5 mt-[5px]"  alt="" />
                <div>

                <h2 className="text-xl font-medium ">Smart Water Purifier With Self Servicing Capability</h2>{" "}
                <span className='mt-7 text-slate-600'>Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.

</span>
                </div>
              </div>
              <div className=" bg-slate-200 p-3 mt-2 rounded-lg flex gap-[5px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
                <img src="./Images/icons8-done.svg" className="w-5 h-5 mt-[5px]"  alt="" />
                <div>

                <h2 className="text-xl font-medium ">Compensation For Service Delays</h2>{" "}
                <span className='mt-7 text-slate-600'>You are entitled to a compensation of 100 Rs/Day if service is delayed for more than 24 hours.

</span>
                </div>
              </div>
             
            </div>
              <button    className='h-10 w-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 hover:to-indigo-500 ease-linear rounded-md font-semibold  text-white' style={{cursor:"pointer"}}>

Next

</button>
          </div>
        </div>
        <div className="w-[75vw] h-[80vh] bg-slate-300   absolute z-0 rounded-lg    drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rotate-[1.5deg]">
          <img
            src="./Images/pure-water.jpg"
            className="h-[100%] rounded-l-lg opacity-[0.9]"
            alt=""
          />
        </div>
      </div>
      <div className="mb-20 text-lg tracking-[5px] textShadow">
        {"<1/2>"}
      </div>
    </div>
  );
};

export default Section2;
