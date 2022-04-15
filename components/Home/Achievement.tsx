import { Button, List, Col, Row } from 'antd'
import Stats from './Statistics'
const Achievement = () => {
  return (
    <div className="via-black-900 bg-gradient-to-r from-[#142F43] to-black pb-40 pt-9 font-serif ">
      <div className="mx-5 md:mx-16">
        <Col sm={24} style={{ justifyContent: 'center' }}>
          <div>
            <h1 className="text-bold pt-4  pb-1 text-3xl text-white sm:text-2xl  md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl  ">
              {' '}
              We are the little angel of your kids but we can only help if you
              let us{' '}
            </h1>
            <p className="pt-0 text-lg  text-gray-400  sm:text-xl md:text-xl lg:text-2xl  xl:text-3xl 2xl:pr-96  2xl:text-4xl ">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawlds jog,
              flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
              For nymphs grap quick-jived{' '}
            </p>
          </div>
        </Col>

        <Row gutter={[16, 16]}>
          <Stats text="FAMILIES" numbers="350+"></Stats>
          <Stats text="SCHOOLS" numbers="50+"></Stats>
          <Stats text="TUTORS" numbers="10,000+"></Stats>
          <Stats text="VISION" numbers="1"></Stats>
        </Row>
      </div>
    </div>
  )
}
export default Achievement
