import { useState, useEffect } from 'react'

import InputsGroup from './InputsGroup'

const content = [
  {
    title: 'Доходы',
    description: 'Укажите источники дохода в течение месяца.',
    categories: [
      {
        name: 'Зарплата',
        amount: 0,
      },
      {
        name: 'Подработка',
        amount: 0,
      },
    ],
  },
  {
    title: 'Расходы',
    description: 'Стабильные траты, которые вычитаются из дохода.',
    categories: [
      {
        name: 'Кредит',
        amount: 0,
        frequency: 'monthly',
      },
      {
        name: 'Еда',
        amount: 0,
        frequency: 'monthly',
      },
    ],
  },
  {
    title: 'Накопления',
    description: 'Сумма, которую вы откладываете ежемесячно.',
    categories: [
      {
        name: 'Вклад в банке',
        amount: 0,
      },
    ],
  },
]

const getResult = (data) => {
  const newData = data
  let totalExpenses = 0
  let totalIncom = 0
  let savings = 0
  newData.forEach((item) => {
    if (item.title === 'Доходы') {
      item.categories.forEach((category) => {
        totalIncom += +category.amount
      })
    } else if (item.title === 'Расходы') {
      item.categories.forEach((category) => {
        totalExpenses +=
          category.frequency === 'daily'
            ? +category.amount * 30
            : category.frequency === 'weekly'
            ? Math.random(+category.amount * 4.5)
            : category.frequency === 'monthly'
            ? +category.amount
            : Math.random(+category.amount / 12)
      })
    } else {
      item.categories.forEach((category) => {
        savings += +category.amount
        totalExpenses += +category.amount
      })
    }
  })
  return { totalIncom, totalExpenses, savings }
}

const Inputs = ({ handleResult }) => {
  const [data, setData] = useState(content)
  const [result, setResult] = useState({})

  const handleInputChange = (amount, name) => {
    const newData = data
    newData.forEach((item) => {
      item.categories.forEach((category) =>
        category.name === name ? (category.amount = amount) : category
      )
    })
    setData(newData)
    setResult(getResult(newData))
  }

  const handleFrequencyChange = (frequency, name) => {
    const newData = data
    newData[1].categories.forEach((category) =>
      category.name === name ? (category.frequency = frequency) : category
    )
    setData(newData)
    setResult(getResult(newData))
  }

  const handleAddCategory = (title) => {
    const newCategory = prompt('Название')
    if (newCategory != null) {
      const newData = data
      newData.forEach((item) => {
        item.title === title
          ? item.categories.push({
              name: newCategory,
              amount: 0,
              frequency: 'monthly',
            })
          : item
      })
      setData(newData)
      setResult(getResult(newData))
    }
  }

  const handleDeleteCategory = (category) => {
    const newData = data
    let categoryToDelete = 0
    let title = ''
    newData.forEach((item) => {
      item.categories.forEach((c) => {
        if (c.name === category) {
          categoryToDelete = item.categories.indexOf(c)
          title = item.title
        }
      })
    })
    const updated = newData.map((item) => {
      if (item.title === title) {
        item.categories = item.categories.filter(
          (c, i) => i != categoryToDelete
        )
        return item
      } else return item
    })
    setData(updated)
    setResult(getResult(updated))
  }

  useEffect(() => {
    handleResult(result)
  }, [data, result])

  return (
    <div>
      {data.map((item) => {
        return (
          <InputsGroup
            {...item}
            key={item.title}
            handleInputChange={handleInputChange}
            handleFrequencyChange={handleFrequencyChange}
            handleAddCategory={handleAddCategory}
            handleDeleteCategory={handleDeleteCategory}
          />
        )
      })}
    </div>
  )
}

export default Inputs
