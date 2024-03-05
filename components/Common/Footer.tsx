import { FaTiktok } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#142F43] to-black pt-0 font-minionPro  xl:pb-40">
      <div className="mx-9 py-10 md:mx-20">
        <div className="mt-10 lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-4 font-minionPro">
              <div>
                <a className="font-typograhica text-xl font-bold text-white hover:text-gray-700 dark:hover:text-gray-300  lg:text-2xl 2xl:text-3xl">
                  temaribet
                </a>
              </div>

              <div className="mx-2 mt-4 mb-10 ml-0 flex justify-start  font-minionPro text-lg lg:text-xl 2xl:text-2xl">
                <a
                  href="https://www.tiktok.com/@temaribettutoringservice"
                  className="mx-2 text-white hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-label="Tiktok"
                >
                  <FaTiktok size={30} />
                </a>

                <a
                  href="https://t.me/temaribet_et"
                  className="mx-2 text-white hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-label="Telegram"
                >
                  <FaTelegram size={30} />
                </a>
                <a
                  href="https://et.linkedin.com/company/temaribet"
                  className="mx-2 text-white hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="font-sans text-lg uppercase text-white opacity-90 dark:text-white">
                  Tutoring
                </h3>
                <a className="mt-2 block text-white opacity-80 ">Get a tutor</a>
                <a className="mt-2 block text-white opacity-80 ">
                  Become a tutor
                </a>
                <a className="mt-2 block text-white opacity-80 ">
                  Partner with us
                </a>
              </div>
              <div>
                <h3 className="font-sans text-lg uppercase text-white opacity-90 dark:text-white">
                  Contact Us
                </h3>
                <a className="mt-2 block text-white opacity-80 ">
                  Besides Andualem Cafe, Jan Meda
                </a>
                <a className="mt-2 block text-white opacity-80 ">
                  Addis Ababa, Ethiopia
                </a>

                <a className="mt-7 block text-white opacity-80 ">
                  +251940120591
                </a>
                <a className="mt-2 block text-white opacity-80 ">
                  nazrihabtish@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-10 text-center  text-lg text-white opacity-80 dark:text-white lg:text-2xl">
            © 2024 Temaribet Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
