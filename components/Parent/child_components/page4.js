const Page4 = () => {
  return (
<div className = "bg-[#FED607]">
      <div>
        <h1 className="text-center lg:text-left text-3xl text-[#1A3765] font-bold ">Our office is located at</h1>
        <p className="text-center lg:text-left text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">Office number, 206 Dream bldg, CMC</p>
      </div>

      <div className="mt-28 text-center lg:text-left" >
        <label className="tracking-wide  text-[#1A3765] font-semibold text-2xl " for="phoneN">Your location</label>
        <br></br>
        <input className="mt-4 py-5 w-full" type="text" id="phoneN" placeHolder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Addis Ababa&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;Adress "></input>
      </div>

      <div className = "mt-8 text-center lg:text-left">
        <button className="bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page4;
