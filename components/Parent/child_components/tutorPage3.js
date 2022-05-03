const  TutoRep3 = () => {
    return (
      <div className = "bg-[#FED607]">
        <div className=" text-center lg:text-left">
          <h1 className="mt-10 text-center lg:text-left text-3xl text-[#1A3765] font-bold ">
              What subject do you tutor?
          </h1>
          <input className="mt-4 py-5 w-full" type="text" id="suggestion" placeHolder=" &nbsp;eg. Maths Physics English &nbsp;"></input>
      
          
        </div>
  
        <div className="mt-10 text-center lg:text-left" >
        <h1 className="mt-10 text-center lg:text-left text-3xl text-[#1A3765] font-bold ">
              What topics did you cover?
          </h1> 
          <textarea className="mt-4  py-5 w-full resize-none" type="text" id="phoneN" placeHolder=" &nbsp;eg. Linear Algebra  Second Law&nbsp;"></textarea>
        </div>
  
        <div className = "mt-8 text-center lg:text-left">
          <button className="bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            CONTINUE
          </button>
        </div>
      </div>
    );
  };
  
  export default TutoRep3;
  