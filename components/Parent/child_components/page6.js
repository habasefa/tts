const Page6 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1 className="text-3xl text-[#1A3765] font-bold ">I AM YONATAN.</h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">I am coordinator at Temaribet</p>
      </div>
      <div className=" flex justify-start">
        <button className=" text-4xl bg-white  text-[#1A3765] font-bold mr-4 my-6 px-10 py-6">
          Girl
        </button>

        <button className="text-4xl bg-white text-[#707070] font-bold ml-4 my-6  px-10 py-6">
          Boy
        </button>
      </div>
      <div className = "mt-12 text-center lg:text-left">
          <label className = "tracking-wide font-bold text-2xl" for="phoneN">What is child's name?</label>
          <br></br>
          <input className="mt-4 py-5 w-full" type="text" id="phoneN" placeHolder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;FirstName&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;LastName "></input></div>
  
        <div className = "mt-8 text-center lg:text-left">
          <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            CONTINUE
          </button>
        </div>
    </div>
  );
};

export default Page6;
