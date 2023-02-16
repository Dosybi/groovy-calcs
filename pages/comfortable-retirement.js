import { useState, useEffect } from 'react'
import Description from '../components/Description'

import Layout from '../components/Layout'
import Inputs from '../components/comfortable-retirement/Inputs'
import Result from '../components/comfortable-retirement/Result'

import { description, info } from '../data/comfortable-retirement'
import MethodInfo from '../components/comfortable-retirement/MethodInfo'

const ComfortableRetirement = () => {
  const [retirementAge, setRetirementAge] = useState(60)
  const [totalAge, setTotalAge] = useState(80)
  const [monthlyIncome, setMonthlyIncome] = useState(1000000)
  const [startAge, setStartAge] = useState(18)
  const [result, setResult] = useState()

  useEffect(() => {
    setRetirementAge(60)
    setTotalAge(80)
    setMonthlyIncome(1000000)
    setResult(
      Math.round(
        (monthlyIncome * ((totalAge - retirementAge) * 12)) /
          ((retirementAge - startAge) * 12)
      )
    )
  }, [])

  const handleRetirementAgeChange = (age) => {
    if (age > startAge) {
      setRetirementAge(age)
      setResult(
        Math.round(
          (monthlyIncome * ((totalAge - retirementAge) * 12)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }
  const handleTotalAgeChange = (age) => {
    if (age > retirementAge) {
      setTotalAge(age)
      setResult(
        Math.round(
          (monthlyIncome * ((totalAge - retirementAge) * 12)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }
  const handleMonthlyIncomeChange = (income) => {
    setMonthlyIncome(income)
    setResult(
      Math.round(
        (monthlyIncome * ((totalAge - retirementAge) * 12)) /
          ((retirementAge - startAge) * 12)
      )
    )
  }
  const handleStartAgeChange = (age) => {
    if (age < retirementAge) {
      setStartAge(age)
      setResult(
        Math.round(
          (monthlyIncome * ((totalAge - retirementAge) * 12)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }

  return (
    <>
      <Layout
        title="Сколько откладывать на безбедную старость"
        description="Сколько откладывать на безбедную старость"
      >
        <Description content={description} isInner />
        <Inputs
          retirementAge={retirementAge}
          totalAge={totalAge}
          monthlyIncome={monthlyIncome}
          startAge={startAge}
          handleRetirementAgeChange={handleRetirementAgeChange}
          handleTotalAgeChange={handleTotalAgeChange}
          handleMonthlyIncomeChange={handleMonthlyIncomeChange}
          handleStartAgeChange={handleStartAgeChange}
        />
        <Result age={retirementAge} income={monthlyIncome} result={result} />
        <MethodInfo info={info} />
      </Layout>
    </>
  )
}

export default ComfortableRetirement
