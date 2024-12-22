import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTableList,
  faArrowTrendUp,
  faBoltLightning,
  faUsers,
  faLightbulb,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

const MenuComp = ({ title, icon }) => {
  return (
    <a href="#" className="flex items-center font-semibold text-gray-500">
      {/* Ensure consistent icon size and color */}
      <FontAwesomeIcon icon={icon} size="1x" className="text-black" />

      {/* Ensure consistent spacing between icon and text */}
      <span className="ml-3">{title}</span>
    </a>
  )
}
const UserCard = ({ name, index }) => {
  return (
    <div className="relative bottom-0 w-full border-t-2 pt-3 pr-3">
      <div className=" ml-2 mt-5 mb-2 flex h-20 items-center ">
        <div className="flex w-full flex-col  gap-2 rounded-2xl">
          <img
            src={`https://i.pravatar.cc/50?img=${index + 1}`}
            alt={name}
            className="ml-0 h-10 w-10 rounded-full"
          />
          <div className="mt-3 ">
            <h2 className="text-sm font-bold text-gray-700">{name}</h2>
            <p className="text-sm text-gray-500">ebaadisu@email.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="fixed  hidden h-4/5 w-64 flex-col justify-between rounded-3xl bg-white p-8 md:flex">
      <div>
        <h1 className=" text-4xl font-bold text-yellow-500">temaribet</h1>
        <nav className="flex flex-col">
          <ul>
            <li className="mb-6">
              <MenuComp title={'Reports'} icon={faArrowTrendUp} />
            </li>
            <li className="mb-6">
              <MenuComp title={'Library'} icon={faBoltLightning} />
            </li>
            <li className="mb-6">
              <MenuComp title={'People'} icon={faUsers} />
            </li>
            <li className="mb-6">
              <MenuComp title={'Activities'} icon={faTableList} />
            </li>
          </ul>
          <div className="mb-6">
            <h2 className="mb-3 text-gray-400">Support</h2>
            <ul>
              <li className="mb-3">
                <MenuComp title={'Get Started'} icon={faLightbulb} />
              </li>
              <li>
                <MenuComp title={'Get Started'} icon={faGear} />
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <UserCard name={'Eba Adisu Kenea'} />
    </div>
  )
}

function App2() {
  return (
    <div className="flex bg-gray-100 p-10">
      <div className="flex w-full rounded-3xl bg-gray-100 shadow-2xl">
        <Sidebar />

        <main className="ml-10 flex-1 overflow-y-auto md:ml-64 ">
          <Report report={report} />
        </main>
      </div>
    </div>
  )
}
export default Sidebar
