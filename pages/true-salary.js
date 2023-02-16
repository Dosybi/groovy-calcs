import Layout from '../components/Layout'
import { useState } from 'react'

import Description from '../components/Description'
import Inputs from '../components/true-salary/Inputs'
import Chart from '../components/true-salary/Chart'
import Result from '../components/true-salary/Result'

import { description, categories } from '../data/true-salary'

const TrueSalary = () => {
  const [result, setResult] = useState({ totalExpenses: 0, totalBalance: 0 })
  const [total, setTotal] = useState()
  const getResult = (result, total) => {
    setResult(result)
    setTotal(total)
  }

  return (
    <>
      <Layout
        title="Сколько вы тратите пока зарабатываете"
        description="Сколько вы тратите пока зарабатываете"
      >
        <Description content={description} isInner />
        <Inputs categories={categories} getResult={getResult} />
        <Chart data={result} />
        <Result
          totalExpenses={result.totalExpenses}
          totalBalance={result.totalBalance}
          income={total}
        />
      </Layout>
    </>
  )
}

export default TrueSalary
