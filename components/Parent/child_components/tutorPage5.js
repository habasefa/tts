const TutorRep5 = () => {
    return (
      <div className="bg-[#FED607]">
        
      <div className="text-center lg:text-left">
        <h1 className="text-2xl  md:text-3xl text-[#1A3765] font-bold 2xl:pr-30">
         What are you going to do about it?
        </h1>
      </div>
  
        <div className = "flex flex-col ">
  
          <div className=" mt-4  lg:text-left">
          <h1 className="text-xl  md:text-2xl text-[#1A3765] font-bold 2xl:pr-30">
            Environmentals
          </h1>
          <input className="mt-4 py-5 w-full" type="text" id="suggestion" placeHolder=" &nbsp;eg. There was a lot of noise coming from &nbsp;"></input>
      
          </div>
          <div className=" mt-4 text-center lg:text-left">
          <h1 className="text-xl  md:text-2xl text-[#1A3765] font-bold 2xl:pr-30">
            On the Tutee side
          </h1>
          <input className="mt-4 py-5 w-full" type="text" id="suggestion" placeHolder=" &nbsp;eg.  She was very sleepy &nbsp;"></input>
      
          </div>
          <div className=" mt-4 text-center lg:text-left">
          <h1 className="text-xl  md:text-2xl text-[#1A3765] font-bold 2xl:pr-30">
            On your Side
          </h1>
          <input className="mt-4 py-5 w-full" type="text" id="suggestion" placeHolder=" &nbsp;eg.  I was very obessed with work issue &nbsp;"></input>
      
          </div>
        </div>
  
        <div className="mt-4 text-center lg:text-left">
          <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            CONTINUE
          </button>
        </div>
      </div>
    );
  };
  
  export default TutorRep5;
  