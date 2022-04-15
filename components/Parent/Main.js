import Image from "next/image";
import Page1 from "./child_components/page1";
function Main(props) {

  return <div class="font-miniPro flex rounded-lg shadow-lg w-full  bg-white sm:mx-0" style={{height: "680px"}}>
              <div class="flex flex-col w-full  lg:w-1/2 xl:w-3/5  py-16 px-14 bg-[#FED607]">
                  <div class="flex flex-col flex-1 mb-8">
                      
                      <div class="w-full ">

                          {props.children}

                      </div>
                  </div>
              </div>
              <div class="hidden lg:block md:w-4/5 rounded-r-lg  " style={{background: `url("/parents4.jpg")`, backgroundPosition: "top right" }}></div>
          </div>
     
  
  

}

export default Main;
