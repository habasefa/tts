import { Button, List, Col, Row } from 'antd'
import Link from 'next/link'
import WorkTogatherCard from './WorkCard'

import 'antd/dist/antd.css'
const Work = () => {
  return (
    <div className="mx-9 md:mx-20 mt-20 mb-20 2xl:mt-40 2xl:mb-40">
      <header className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#1A3765] font-bold font-minionPro text-[#1A3765] ">
        How we will work together?
      </header>
      <Row gutter={[10, 24]} justify="space-around">
        <Col xs={16} xl={6}>
          <WorkTogatherCard
            title="Register"
            description="Fill all the necessary info about your kid."
            image="/sheet1.png"
          />
        </Col>

        <Col xs={16} xl={6}>
          <WorkTogatherCard
            title="Find a match"
            description="We select the perfect tutor in 48 hours."
            image="/findamatch.jpg"
          />
        </Col>

        <Col xs={16} xl={6}>
          <WorkTogatherCard
            title="Academic success"
            description="You will witness your kid performing excellent."
            image="/surge1.png"
          />
        </Col>
      </Row>
      <p className="text-black-900 mt-10 text-center  text-xl font-medium xl:text-3xl">
        Ready to excel your child?{' '}
        <Link href={'#'}>
          <a className="font-serif text-2xl text-blue-700 xl:text-4xl xl:font-bold">
            Get tutor
          </a>
        </Link>
      </p>
    </div>
  )
}
export default Work
