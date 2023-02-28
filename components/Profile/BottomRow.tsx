import React from 'react'
import { Row, Col } from 'antd'
import BottomCard from './childComponents/BottomCard'
import 'antd/dist/antd.css'

const BottomRow = (props: any) => {
  return (
    <section className="container mx-auto text-black">
      <div className="flex w-full items-center justify-center">
        <div className="xs:grid-cols-1 mt-8 grid w-full justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full">
            <BottomCard title="Available in" type="location" location ={props.userData?.location} />
          </div>

          <div className="w-full">
            <BottomCard
              title="Best At"
              type="bestat"
              subjects={props.userData?.subjects}
            />
          </div>

          <div className="w-full ">
            <BottomCard title=" Contact's Information" type="ContactInformation" contact ={[
          ['contactName', props.userData?.contactName],
          ['telegramUsername',props.userData?.telegramUsername],
          ['contactPhone1', props.userData?.contactPhone1],
          ['contactPhone2', props.userData?.contactPhone2],
          ['contactEmail', props.userData?.contactEmail]
        ]} />
          </div>

          <div className="w-full ">
            <BottomCard
              title="Hobby"
              type="hobby"
              hobby={props.userData?.hobby}
            />
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default BottomRow
