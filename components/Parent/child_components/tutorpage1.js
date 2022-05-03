const  TutoRep1 = () => {
    return (
      <div className = "bg-[#FED607]">
        <div>
          <h1 className="mt-10 text-center lg:text-left text-3xl text-[#1A3765] font-bold ">
              What subject do you tutor?
          </h1>
        </div>
  
        <div className="mt-28 text-center lg:text-left" >
          <input className="mt-4 py-5 w-full" type="text" id="phoneN" placeHolder=""></input>
        </div>
  
        <div className = "mt-8 text-center lg:text-left">
          <button className="bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            CONTINUE
          </button>
        </div>
      </div>
    );
  };
  
  export default TutoRep1;
  