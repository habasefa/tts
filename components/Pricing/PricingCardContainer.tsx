import React, { useState } from 'react'
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
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setSelectedCard(index)
  }

  return (
    <div className="pricing-card-container">
      <h2 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
        Pricing Per Hour
      </h2>
      <p className="mt-2 text-center text-lg text-gray-600 md:mt-4">
        Sessions are in ETB per hour for direct 1:1 tutor-student time.
      </p>

      <div className="relative flex flex-wrap justify-center gap-4 bg-gray-50 p-10">
        {pricingData.map((data, index) => (
          <PricingCard
            key={index}
            title={data.title}
            price={data.price}
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default PricingCardContainer
