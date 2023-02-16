import { useState } from 'react'

import Description from '../components/Description'
import InputsGroup from '../components/InputsGroup'
import GeneralStatistics from '../components/inflation/GenralStatistics'
import Products from '../components/inflation/Products'
import Purchases from '../components/inflation/Purchases'
import FinalStatistics from '../components/inflation/FinalStatistics'
import SourcesInfo from '../components/inflation/SourcesInfo'

import { products, description, inputs } from '../data/inflation'
import Layout from '../components/Layout'

const Inflation = () => {
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
    <>
      <Layout
        title="Инфляция в Казахстане в донерах, айфонах и казы: узнайте как изменился ваш уровень жизни за 10 лет"
        description="Инфляция в Казахстане в донерах, айфонах и казы: узнайте как изменился ваш уровень жизни за 10 лет"
      >
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
      </Layout>
    </>
  )
}

export default Inflation
