export const description = {
  title: 'Сколько вы тратите пока зарабатываете',
  text: [
    'Работа стоит денег и съедает часть зарплаты.',
    'Калькулятор считает, сколько вы получаете на самом деле с учётом расходов, связанных с работой.',
  ],
}

export const categories = [
  {
    title: 'Зарплата на руки',
    description:
      'За вычетом налогов и других отчислений. Если оклад нестабильный, укажите среднемесячный.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Еда 🍱',
    description:
      'Посчитайте, сколько в день вы тратите на перекусы и обеды на работе, будь то еда из местного кафе или контейнеры из дома.',
    isDaily: true,
    amount: '0',
  },
  {
    title: 'Транспорт 🚌',
    description:
      'Такси или общественный транспорт на работу и домой. Если добираетесь на своей машине, укажите стоимость топлива.',
    isDaily: true,
    amount: '0',
  },
  {
    title: 'Образование 🎓',
    description:
      'Сколько стоят курсы, тренинги, мастер-классы и книги, которые работодатель вам не оплачивает.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Одежда и макияж 👔',
    description:
      'Деловые костюмы, сменная обувь, спецодежда или любая другая одежда, которая нужна вам для работы.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Жильё 🏡',
    description:
      'Если вы сняли жильё рядом с работой и теперь платите за аренду больше чем прежде, укажите разницу в цене.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Инструменты 🛠',
    description:
      'Подписки на сервисы для работы, специальные приложения или ПО, которое вы покупаете за свой счёт.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Дети 👶',
    description:
      'Возможно, пока вы на работе, за ребёнком присматривает няня или воспитатель в детском саду. Сколько это стоит?',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Подарки коллегам 🍻',
    description:
      'Обычно на подарки коллегам и корпоративы скидывается весь офис — посчитайте сколько денег на это уходит. А ещё вы, возможно, накрываете стол на свой день рождения.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Терапия 🤦‍♂️',
    description:
      'Запишите расходы на психотерапевта, если основной предмет разговоров с ним — начальник, коллеги и выгорание.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Дополнительно 💵',
    description: 'Вспомните, какие ещё расходы вы несёте из-за работы.',
    isMonthly: true,
    amount: '0',
  },
]
