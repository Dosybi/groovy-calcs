export const products = [
  {
    label: 'Хлеб',
    previousPrice: 78,
    currentPrice: 341,
  },
  {
    label: 'Казы, кг',
    previousPrice: 2054,
    currentPrice: 12000,
  },
  {
    label: 'Молоко, л',
    previousPrice: 118,
    currentPrice: 320,
  },
  {
    label: 'Говядина, кг',
    previousPrice: 1129,
    currentPrice: 2600,
  },
  {
    label: 'Донер',
    previousPrice: 200,
    currentPrice: 1300,
  },
  {
    label: 'Водка, л',
    previousPrice: 1170,
    currentPrice: 6784,
  },
  {
    label: 'Айфон',
    previousPrice: 60000,
    currentPrice: 400000,
  },
  {
    label: 'Картофель, кг',
    previousPrice: 70,
    currentPrice: 182,
  },
  {
    label: 'Доллар',
    previousPrice: 150,
    currentPrice: 473,
  },
  {
    label: 'Евро',
    previousPrice: 191,
    currentPrice: 496,
  },
  {
    label: 'Рубль',
    previousPrice: 4.8,
    currentPrice: 7.5,
  },
  {
    label: '1 м² в Алматы',
    previousPrice: 142500,
    currentPrice: 595000,
  },
  {
    label: 'Год в вузе',
    previousPrice: 450000,
    currentPrice: 700000,
  },
]

export const description = {
  title: `Инфляция в Казахстане в донерах, айфонах и казы: узнайте как
  изменился ваш уровень жизни за 10 лет`,
  text: [
    `В 2022 году цены выросли на 19,6%, а годом ранее — на 8,4%. Жизнь постоянно дорожает, но ведь и зарплата тоже меняется, поэтому оценить масштаб инфляции сложно.`,
    `Калькулятор считает, как изменился ваш уровень жизни за 10 лет: что вы могли бы купить на зарплату в 2012 и сейчас.`,
  ],
}

export const inputs = {
  title: 'Зарплата раньше и сейчас',
  fields: [
    {
      year: '2012',
      placeholder: '100 000 тенге/мес',
      type: 'previousSalary',
    },
    {
      year: '2022',
      placeholder: '400 000 тенге/мес',
      type: 'currentSalary',
    },
  ],
}

export const generalStatistics = {
  title: 'Зарплата выросла',
  text: 'но это без учёта инфляции',
  paragraph:
    'Теперь посмотрим, как для вас изменилась доступность товаров и услуг. Сравним, сколько того или иного товара вы могли купить на всю зарплату в 2012 и сколько сейчас.',
}
