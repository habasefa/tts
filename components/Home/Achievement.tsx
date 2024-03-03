import { Button, List, Col, Row } from 'antd'
import Stats from './Statistics'
const Achievement = () => {
  return (
    <div className="via-black-900 pb:24 bg-gradient-to-r from-[#142F43] to-black pt-9 xl:pb-40  ">
      <div className="mx-9 md:mx-20">
        <Col sm={24}>
          <div>
            <h1 className="text-bold pt-4  pb-1  font-minionPro text-3xl font-bold text-white md:text-4xl xl:text-5xl 2xl:text-6xl  ">
              {' '}
              Our goal
              {/* <br />{' '}
              <p className="font-sans text-lg text-cyan-200 lg:pt-5">
                Our way: First Principles
              </p>{' '} */}
            </h1>
            <p className=" pt-0 text-left font-minionPro  text-lg  text-gray-400  md:text-xl lg:mt-0 xl:text-2xl  2xl:pr-96  2xl:text-3xl   ">
              We break down complex concepts into their fundamental building
              blocks, making learning engaging and interactive. Then, we guide
              our students in building up their knowledge, step by step, using
              these foundational principles. !{' '}
            </p>
          </div>
        </Col>

        <Row>
          <Stats text="FAMILIES" numbers="500+"></Stats>
          <Stats text="SCHOOLS" numbers="50+"></Stats>
          <Stats text="TUTORS" numbers="2,000+"></Stats>
          <Stats text="VISION" numbers="1"></Stats>
        </Row>
      </div>
    </div>
  )
}
export default Achievement
