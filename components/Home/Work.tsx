import { Button, List, Col, Row } from 'antd'
import Link from 'next/link'
import WorkTogatherCard from './WorkCard'
import { MdContactPage } from 'react-icons/md'
import { TbEyeSearch } from 'react-icons/tb'
import { GiGraduateCap } from 'react-icons/gi'

import 'antd/dist/antd.css'
import { useRouter } from 'next/router'
const Work = () => {
  const router = useRouter()
  return (
    <div className="mx-9 mt-20 mb-20 font-minionPro md:mx-20 2xl:mt-40 2xl:mb-40">
      <header className="font-minionPro text-3xl font-bold text-[#1A3765] md:text-4xl xl:text-5xl 2xl:text-6xl ">
        How to start?
      </header>
      <Row gutter={[10, 0]} justify="space-around">
        <Col xs={16} xl={7}>
          <WorkTogatherCard title="Register" description="Fill all the form.">
            <MdContactPage size={90} color="#1A3765" />
          </WorkTogatherCard>
        </Col>

        <Col xs={16} xl={7}>
          <WorkTogatherCard
            title="Find a match"
            description="We select the perfect tutor in 48 hours."
          >
            <TbEyeSearch size={90} color="#1A3765" />
          </WorkTogatherCard>
        </Col>

        <Col xs={16} xl={7}>
          <WorkTogatherCard
            title="Academic success"
            description="You will witness your kid performing excellent."
          >
            <GiGraduateCap size={90} color="#1A3765" />
          </WorkTogatherCard>
        </Col>
      </Row>
      <p className="text-black-900 mt-10 text-center  text-2xl font-medium xl:text-3xl">
        Ready to excel your child?{' '}
        <Link href={'studentRegistration'}>
          <button
            onClick={() => router.push('/studentRegistration')}
            className=" text-2xl text-blue-700 xl:text-4xl xl:font-bold"
          >
            Get tutor
          </button>
        </Link>
      </p>
    </div>
  )
}
export default Work
