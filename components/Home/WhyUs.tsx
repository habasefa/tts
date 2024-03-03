import { Row, Image, Col } from 'antd'
import WhyUsComponent from './WhyUsComponent'
import { LuMousePointerClick } from 'react-icons/lu'
import { HiDocumentReport } from 'react-icons/hi'
import { GiProgression } from 'react-icons/gi'

const WhyUs = () => {
  return (
    <div className="my-15  bg-[#EAEDF1] py-12 font-minionPro">
      <header className="mx-9 pt-1 pb-0 font-minionPro  text-3xl font-bold text-[#1A3765] text-[#1A3765] md:mx-20 md:text-4xl xl:text-5xl 2xl:text-6xl ">
        Why Us?
      </header>
      <div className="mx-9 mt-5 md:mx-20">
        <Row gutter={[10, 24]} justify="space-around">
          <Col xs={24} xl={8}>
            <WhyUsComponent
              title="Handpicked Tutors"
              description="The right tutor to fit your child's need selected from thousands of our tutors"
            >
              <LuMousePointerClick size={90} color="#1A3765" />
            </WhyUsComponent>
          </Col>

          <Col xs={24} xl={8}>
            <WhyUsComponent
              title="Managed"
              description="We track every aspect of the tutoring. The tutoring session, topic covered and progress of your child."
            >
              <GiProgression size={90} color="#1A3765" />
            </WhyUsComponent>
          </Col>

          {/* <Col xs={16} xl={7}>
            <WhyUsComponent
              title="Progress Tracked"
              description="Every topic covered are stored in our database so that the parent could check."
              image="/neprogree.png"
            />
          </Col> */}

          <Col xs={24} xl={8}>
            <WhyUsComponent
              title="Report"
              description="You can find every single information you need about the tutoring just at your fingertip."
            >
              <HiDocumentReport size={90} color="#1A3765" />
            </WhyUsComponent>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default WhyUs
