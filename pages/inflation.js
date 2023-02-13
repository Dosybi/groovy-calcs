/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import Head from 'next/head'

import Description from '../components/Description'
import InputsGroup from '../components/InputsGroup'
import GeneralStatistics from '../components/inflation/GenralStatistics'
import Products from '../components/inflation/Products'
import Purchases from '../components/inflation/Purchases'
import FinalStatistics from '../components/inflation/FinalStatistics'
import SourcesInfo from '../components/inflation/SourcesInfo'

import { products, description, inputs } from '../data/inflation'

const inflation = () => {
  const [salary, setSalary] = useState({
    previousSalary: 100000,
    currentSalary: 400000,
  })
  const [purchase, setPurchase] = useState('Хлеб')

  const onInputChange = (e) => {
    if (e.target.getAttribute('period') === 'previousSalary') {
      setSalary({
        ...salary,
        previousSalary: e.target.value,
      })
    }
    if (e.target.getAttribute('period') === 'currentSalary') {
      setSalary({ ...salary, currentSalary: e.target.value })
    }
  }

  const onTagSelect = (activeTag) => setPurchase(activeTag)

  return (
    <div>
      <Head>
        <title>Инфляция</title>
        <meta name="description" content="Инфляция" />
      </Head>
      <main className="m-auto mb-8 max-w-2xl p-8">
        <Description content={description} isInner />
        <InputsGroup inputs={inputs} onInputChange={onInputChange} />
        <GeneralStatistics
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <Products onTagSelect={onTagSelect} />
        <Purchases
          products={products}
          purchase={purchase}
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <FinalStatistics
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <SourcesInfo />
      </main>
    </div>
  )
}

export default inflation
