const Page2 = () => {
  return (
    <div className="bg-[#FED607]">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl text-[#1A3765] font-bold ">I AM YONATAN.</h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">
          I am coordinator at Temaribet
        </p>
      </div>
      
      <div className="mt-36 text-center lg:text-left">
        <label className="tracking-wide font-semibold text-2xl" for="phoneN">
          What is your name?
        </label>
        <br></br>
        <input className="mt-4 py-5 w-full" type="text" id="phoneN" placeHolder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;First name&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;Last name "></input>
      </div>

      <div className = "mt-8 text-center lg:text-left">
          <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            CONTINUE
          </button>
        </div>
    </div>
  );
};

export default Page2;
