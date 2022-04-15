import React from 'react'
import { Row, Col } from 'antd'
import ProfileCard from './childComponents/ProfileCard'
var places = [
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
  {
    name: 'BOLE MICHAEL',
    description:
      'asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfjlasjdf ljskdjf lsjlsasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhdasjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd',
  },
]

const CardView = () => {
  return (
    <div className="mt-6">
      <Row gutter={[8, 20]} justify={'space-between'}>
        {places.map((item: any, idx: any) => (
          <Col key={idx} xs={24} xl={8} md={12}>
            <ProfileCard place={item.name} description={item.description} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CardView
