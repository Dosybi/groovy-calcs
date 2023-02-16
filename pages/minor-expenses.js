import { useState } from 'react'

import { description, expenses as data } from '../data/minor-expenses'

import Description from '../components/Description'
import Layout from '../components/Layout'
import Inputs from '../components/minor-expenses/Inputs'
import Button from '../components/minor-expenses/Button'
import Result from '../components/minor-expenses/Result'

const MinorExpenses = () => {
  const [expenses, setExpenses] = useState(data)
  const [totalWeeklyExpenses, setTotalWeeklyExpenses] = useState(0)

  const handlePriceChange = (product, price) => {
    const newData = [...data]
    newData.find((item) => item.product === product).price = price
    setExpenses(newData)
    getTotalExpenses(data)
  }

  const handleAmountChange = (product, amount) => {
    const newData = [...data]
    newData.find((item) => item.product === product).amount = amount
    setExpenses(newData)
    getTotalExpenses(data)
  }

  const handleAddProduct = () => {
    const newProduct = prompt('Название траты')
    if (newProduct != null) {
      const newData = [...data]
      newData.push({
        product: newProduct,
        price: 0,
        amount: 1,
        isCustom: true,
      })
      setExpenses(newData)
      getTotalExpenses(data)
    }
  }

  const getTotalExpenses = (data) => {
    setTotalWeeklyExpenses(
      data
        .map((item) => item.price * item.amount)
        .reduce((acc, cur) => acc + cur)
    )
  }

  const handleDeleteProduct = (product) => {
    const newData = [...data]
    const productToDelete = newData.indexOf(product)
    newData.splice(productToDelete, 1)
    setExpenses(newData)
    getTotalExpenses(newData)
  }

  return (
    <>
      <Layout
        title="Сколько накопится за год, если отказаться от мелких трат"
        description="Сколько накопится за год, если отказаться от мелких трат"
      >
        <Description content={description} isInner />
        {expenses.map((item) => {
          return (
            <Inputs
              expense={item}
              handlePriceChange={handlePriceChange}
              handleAmountChange={handleAmountChange}
              handleDeleteProduct={handleDeleteProduct}
              key={item.product}
            />
          )
        })}
        <Button
          label="+ Добавить"
          handleClick={handleAddProduct}
          isPrimary={false}
        />
        <Result amount={totalWeeklyExpenses} />
      </Layout>
    </>
  )
}

export default MinorExpenses
