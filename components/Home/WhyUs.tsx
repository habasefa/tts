import { Row, Image, Col } from 'antd'
import WhyUsComponent from './WhyUsComponent'

const WhyUs = () => {
  return (
    <div className="my-20  bg-[#EAEDF1] py-12">
      <header className="mx-5 pt-1 pb-11 font-serif text-3xl font-semibold text-blue-900 md:mx-16 md:text-5xl">
        Why Us?
      </header>
      <div className="mx-5 mt-5 md:mx-16">
        <Row gutter={[8, 8]} justify={'space-between'}>
          <Col xs={12} xl={6} md={6}>
            <WhyUsComponent
              title="Handpicked Tutors"
              description="The best tutor selected from 10,000 of our tutors."
              image="/passionate.png"
            />
          </Col>

          <Col xs={12} xl={6} md={6}>
            <WhyUsComponent
              title="Decent"
              description="A tutor with good character, mindset and discipline."
              image="/suitcase.png"
            />
          </Col>

          <Col xs={12} xl={6} md={6}>
            <WhyUsComponent
              title="Progress Tracked"
              description="Every topic covered are stored in our database so that the parent could check."
              image="/neprogree.png"
            />
          </Col>

          <Col xs={12} xl={6} md={6}>
            <WhyUsComponent
              title="Trained"
              description="Equipped with methods, techniques and ways to give the highest quality tutoring in the country."
              image="/upstair.png"
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default WhyUs
