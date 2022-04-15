import Footer from "./Footer"
import Header from "../HomePageComponents/Header"
import Container from "./Container"
import SuccessMain from "./SuccessMain"

export default function Success() {
  return (
    <div className=" shadow-lg px-1 md:px-10 lg:px-44 xl:px-64 2xl:px-96 mt-44  ">
    <Header/>
    <SuccessMain/>
    <Footer/>
    </div>
  
  )
}
