import { Button, List, Col, Row } from 'antd'
import Stats from './Statistics'
const Achievement = () => {
  return (
    <div className="via-black-900 bg-gradient-to-r from-[#142F43] to-black pb:24 xl:pb-40 pt-9  ">
      <div className="mx-9 md:mx-20">
        <Col sm={24} style={{ justifyContent: 'center' }}>
          <div>
            <h1 className="text-bold pt-4  pb-1  text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-minionPro  ">
              {' '}
              We are the little angel of your kids but we can only help if you
              let us{' '}
            </h1>
            <p className="pt-0 text-lg  text-gray-400  text-center text-lg md:text-xl xl:text-2xl 2xl:text-3xl  font-minionPro  2xl:pr-96   ">
            We'll take the monotony out of studying by creating lessons that are engaging and interactive while still teaching real world concepts in a structured way so that students 
            may see immediate results in improved performance while still having fun!{' '}
            </p>
          </div>
        </Col>

        <Row>
          <Stats text="FAMILIES" numbers="100+"></Stats>
          <Stats text="SCHOOLS" numbers="50+"></Stats>
          <Stats text="TUTORS" numbers="2,000+"></Stats>
          <Stats text="VISION" numbers="1"></Stats>
        </Row>
      </div>
    </div>
  )
}
export default Achievement
