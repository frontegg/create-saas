import * as React from 'react';
import { PricingSmallCards, PricingRowCards, PricingLargeCards } from '../../../Components/PricingComponents'

export interface ICardSmallLarge {
  data: ICardSLData[]
}

export interface ICardSLData {
  name: string,
  descs: { label: string, approve: boolean }[]
  price: number
}

export interface ICardRow {
  data: ICardRowData[]
}

export interface ICardRowData {
  descs: { label: string, approve: boolean }[]
  cards: { name: string, price: number }[]
}

const cards1: ICardSLData[] = [
  {
    name: 'basic',
    descs: [
      {
        label: 'Lorem ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor ipsum dolor',
        approve: false
      },
      {
        label: 'Ipsum ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor lorem dolor',
        approve: false
      },
      {
        label: 'Dolor ipsum lorem',
        approve: true
      },
      {
        label: 'ipsum lorem dolor',
        approve: true
      }
    ],
    price: 90

  },
  {
    name: 'plus',
    descs: [
      {
        label: 'Lorem ipsum dolor',
        approve: false
      },
      {
        label: 'Dolor ipsum dolor',
        approve: false
      },
      {
        label: 'Ipsum ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor lorem dolor',
        approve: false
      },
      {
        label: 'Dolor ipsum lorem',
        approve: true
      },
      {
        label: 'ipsum lorem dolor',
        approve: true
      }
    ],
    price: 120

  },
  {
    name: 'pro',
    descs: [
      {
        label: 'Lorem ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor ipsum dolor',
        approve: false
      },
      {
        label: 'Ipsum ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor lorem dolor',
        approve: false
      },
      {
        label: 'Dolor ipsum lorem',
        approve: true
      },
      {
        label: 'ipsum lorem dolor',
        approve: false
      }
    ],
    price: 180
  },
  {
    name: 'premium',
    descs: [
      {
        label: 'Lorem ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor ipsum dolor',
        approve: true
      },
      {
        label: 'Ipsum ipsum dolor',
        approve: true
      },
      {
        label: 'Dolor lorem dolor',
        approve: true
      },
      {
        label: 'Dolor ipsum lorem',
        approve: true
      },
      {
        label: 'ipsum lorem dolor',
        approve: true
      }
    ],
    price: 320
  }
]

const cards2: ICardRowData = {
  descs: [
    {
      label: 'Lorem ipsum dolor',
      approve: true
    },
    {
      label: 'Dolor ipsum dolor',
      approve: false
    },
    {
      label: 'Ipsum ipsum dolor',
      approve: true
    },
    {
      label: 'Dolor lorem dolor',
      approve: false
    },
    {
      label: 'Dolor ipsum lorem',
      approve: true
    },
    {
      label: 'ipsum lorem dolor',
      approve: true
    }
  ],
  cards: [
    {
      name: 'basic',
      price: 60
    },
    {
      name: 'plus',
      price: 120
    },
    {
      name: 'pro',
      price: 240
    },
  ]
}




const PricingPage: React.FC = () => {

  return (
    <div className="sampleformpage">
      <div className="section-title">
        <div className="category">
          PAGES
        </div>
        <div className="section-name">
          Pricing
        </div>
      </div>
      <div className="main">
        <PricingSmallCards data={cards1} />
        <PricingRowCards data={cards2} />
        <PricingLargeCards data={cards1} />
      </div>
    </div>
  )
}

export default PricingPage;