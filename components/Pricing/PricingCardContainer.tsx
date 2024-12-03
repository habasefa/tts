import React from 'react'
import PricingCard from './PricingCard'

interface PricingData {
  title: string
  price: string
}

const pricingData: PricingData[] = [
  { title: 'KG to Grade 5', price: '375' },
  { title: 'Grade 6 to Grade 10', price: '400' },
  { title: 'Grade 11 to Grade 12', price: '400' },
  { title: 'College', price: '500' },
]

const PricingCardContainer: React.FC = () => {
  return (
    <div className="bg-white py-8 px-4 text-center md:px-8">
      <h2 className="mb-4 text-3xl font-extrabold text-yellow-600 md:text-4xl">
        Pricing Per Hour
      </h2>
      <p className="mb-6 text-lg text-[#1A3765] md:text-xl">
        Sessions are in ETB per hour for direct 1:1 tutor-student time.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {pricingData.map((data, index) => (
          <PricingCard key={index} title={data.title} price={data.price} />
        ))}
      </div>
    </div>
  )
}

export default PricingCardContainer
