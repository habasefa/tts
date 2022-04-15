const Page9 = () => {
  return (
    <div className = "bg-[#FED607] font-miniPro">
      <div>
        <h1 className="text-3xl text-[#1A3765] font-bold " >In what area does your child</h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">need tutoring</p>
      </div>

      <div className="text-center md:text-left mt-10" >
        <input className="mr-2" type="radio" value="" name="" id="all" />

        <label className="text-xl text-[#5A5A5A]  font-semibold  pl-0 p-2" for="all">All subjects 2 in grade 6 </label>
        <br></br>
      </div>

      <div>
        <div className = "flex flex-row mt-4">
          <button className=" flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Math
          </button>

          <button className="flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Phyiscs
          </button>

          <button className="flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Chemistry
          </button>
        </div>

        <div className="flex flex-row my-4">
          <button className=" flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Biology
          </button>

          <button className="flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            History
          </button>

          <button className="flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Geography
          </button>
        </div>

        <div className="flex flex-row my-4">
          <button className=" flex-1 mr-2  text-lg bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Economics
          </button>

          <button className="flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            Civics
          </button>

          <button className=" flex-1  text-lg mr-2 bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
            SAT
          </button>
        </div>
      </div>

      <div className = "mt-8 text-center lg:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-2xl font-semibold py-2 px-6 ">
          + Add subject
        </button>
      </div>

      <div className = "mt-8 text-center lg:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page9;
