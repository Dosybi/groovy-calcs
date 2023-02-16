import { useState, useEffect } from 'react'

import Description from '../components/Description'
import Layout from '../components/Layout'
import Inputs from '../components/unearned/Inputs'
import ImageCardsWrapper from '../components/unearned/ImageCardsWrapper'
import Result from '../components/unearned/Result'

import { description, data } from '../data/unearned'

const Unearned = () => {
  const [series, setSeries] = useState(data)
  const [hours, setHours] = useState(0)
  const [money, setMoney] = useState(0)
  const [salary, setSalary] = useState(500000)

  const getSeries = (title) => {
    const newSeries = [...series]
    newSeries.forEach((series) => {
      if (series.title === title) {
        series.isChecked = !series.isChecked
      }
    })
    setSeries(newSeries)
  }

  const handleSalaryChange = (number) => {
    const newSalary = number
    setSalary(newSalary)
  }

  useEffect(() => {
    const newHours = series
      .map((series) => (series.isChecked === true ? series.length : 0))
      .reduce((acc, cur) => acc + cur)
    setHours(newHours)
    const newMoney = Math.round(
      series
        .map((series) =>
          series.isChecked === true ? series.length * (salary / 22 / 8) : 0
        )
        .reduce((acc, cur) => acc + cur)
    )
    setMoney(newMoney)
  }, [series, salary])

  return (
    <>
      <Layout
        title="Сколько денег вы потеряли из-за сериалов"
        description="Сколько денег вы потеряли из-за сериалов"
      >
        <Description content={description} isInner />
        <Inputs salary={salary} handleSalaryChange={handleSalaryChange} />
        <ImageCardsWrapper
          cards={series}
          salary={salary}
          handleButtonClick={getSeries}
          key={series.title}
        />
        <Result hours={hours} money={money} />
      </Layout>
    </>
  )
}

export default Unearned
