import Header from '../Common/Header'
import Footer from './Footer'
import SuccessMain from './SuccessMain'

export default function Success() {
  return (
    <div className=" mt-44 px-1 shadow-lg md:px-10 lg:px-44 xl:px-64 2xl:px-96  ">
      <Header />
      <SuccessMain />
      <Footer />
    </div>
  )
}
