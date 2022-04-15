const Page8 = () => {
  return (<div className = "bg-[#FED607]">
        <div>
        <h1 className="text-2xl  md:text-3xl text-[#1A3765] font-bold 2xl:pr-30">In what area does your child</h1>
        <p className=" text-lg md:text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">need tutoring.</p>
      </div>

      <div className = "mt-8 text-center lg:text-left">
          <button className="  text-4xl shadow-lg bg-white w-34  text-[#1A3765] font-bold  py-6 pl-16 pr-12  ">
          Academic
          </button>
        </div>
        <div className = "mt-8 text-center lg:text-left">
          <button className=" text-4xl shadow-lg bg-white w-max text-[#1A3765] font-bold  py-6 pl-16 pr-24  ">
            Coding
          </button>
        </div>
        <div className = "mt-8 text-center lg:text-left">
          <button className=" text-4xl shadow-lg bg-white  text-[#1A3765] font-bold  py-6 pl-16 pr-12">
            Language
          </button>
        </div>
      </div>
    

      
  );
};

export default Page8;
