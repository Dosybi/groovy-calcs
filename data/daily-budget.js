export const description = {
  title: 'Сколько вы можете тратить в день',
  text: [
    'Укажите зарплату и обязательные расходы, а калькулятор посчитает, сколько вы можете тратить каждый день, чтобы не пришлось занимать.',
  ],
}

export const categories = [
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
