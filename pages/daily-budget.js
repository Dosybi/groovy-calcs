import { useState } from 'react'

import Layout from '../components/Layout'
import Description from '../components/Description'
import Inputs from '../components/daily-budget/Inputs'
import Result from '../components/daily-budget/Result'

import { description, categories } from '../data/daily-budget'

const DailyBudget = () => {
  const [result, setResult] = useState()

  const handleResult = (result) => setResult(result)

  return (
    <>
      <Layout
        title="Сколько вы тратите пока зарабатываете"
        description="Сколько вы тратите пока зарабатываете"
      >
        <Description content={description} isInner />
        <Inputs handleResult={handleResult} />
        <Result {...result} />
      </Layout>
    </>
  )
}

export default DailyBudget
