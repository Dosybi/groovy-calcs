import { useState } from 'react'

import SingleInput from './SingleInput'

const Inputs = ({ categories, getResult }) => {
  const [data, setData] = useState(categories)

  const handleInputChange = (title, amount) => {
    const newData = data.map((item) =>
      item.title === title ? { ...item, amount: amount } : item
    )
    setData(newData)
    const newResult = {
      totalExpenses: Math.round(
        newData
          .filter((_, i) => i != 0)
          .map((item) => {
            let total = 0
            if (item.isDaily) {
              total += item.amount * 22
            } else if (item.isWeekly) {
              total += item.amount * 4.5
            } else if (item.isYearly) {
              total += item.amount / 12
            } else total += item.amount
            return total
          })
          .reduce((acc, cur) => +acc + +cur)
      ),
      totalBalance: Math.round(
        newData[0].amount -
          newData
            .filter((_, i) => i != 0)
            .map((item) => {
              let total = 0
              if (item.isDaily) {
                total += item.amount * 22
              } else if (item.isWeekly) {
                total += item.amount * 4.5
              } else if (item.isYearly) {
                total += item.amount / 12
              } else total += item.amount
              return total
            })
            .reduce((acc, cur) => +acc + +cur)
      ),
    }
    getResult(newResult, newData[0].amount)
  }

  return (
    <>
      {data.map((category) => {
        return (
          <SingleInput
            {...category}
            handleInputChange={handleInputChange}
            key={category.title}
          />
        )
      })}
    </>
  )
}

export default Inputs
