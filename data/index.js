import InflationIcon from '../assets/icons/turkey.svg'
import MinorExpensesIcon from '../assets/icons/game.svg'
import ComfortableRetirementIcon from '../assets/icons/sunshade.svg'
import TrueSalaryIcon from '../assets/icons/up-and-down.svg'
import DailyBudgetIcon from '../assets/icons/wallet.svg'
import UnearnedIcon from '../assets/icons/sofa.svg'

const colors = {
  holly: 'bg-gradient-to-r from-blue-200 to-cyan-200',
  gold: 'bg-gradient-to-r from-amber-200 to-yellow-500',
  lime: 'bg-gradient-to-r from-teal-400 to-yellow-200',
  powder: 'bg-gradient-to-r from-violet-200 to-pink-200',
}

export const description = {
  title: 'Калькуляторы для тех, кто не любит Эксель',
  text: [
    'Например, они помогут посчитать, как дожить до зарплаты, сколько вы тратите пока зарабатываете, как накопить на комфортную старость, сколько денег съедают ежедневные приятные мелочи — и сколько вы могли бы накопить, отказавшись от них.',
  ],
}

export const calcs = [
  {
    name: 'Инфляция в Казахстане в донерах, айфонах и казы',
    description:
      'Как изменился ваш уровень жизни за 10 лет: что вы могли бы купить на зарплату в 2012 и сейчас.',
    link: '/inflation',
    icon: InflationIcon,
    color: colors.holly,
  },
  {
    name: 'Сколько накопится за год, если отказаться от мелких трат',
    description:
      'Калькулятор считает, сколько вы накопите, если откажетесь от приятных мелочей, которые незаметно съедают бюджет, и будете хранить сэкономленные деньги на депозите.',
    link: 'https://minor-expenses.vercel.app',
    icon: MinorExpensesIcon,
    color: colors.gold,
  },
  {
    name: 'Сколько откладывать на безбедную старость',
    description:
      'Прикиньте сумму, которая позволит вам комфортно отдохнуть на пенсии, а калькулятор посчитает, сколько для этого нужно откладывать каждый месяц, учитывая инфляцию и проценты на вкладе.',
    link: 'https://comfortable-retirement.vercel.app',
    icon: ComfortableRetirementIcon,
    color: colors.lime,
  },
  {
    name: 'Сколько вы тратите пока зарабатываете',
    description:
      'Калькулятор считает, сколько вы получаете на самом деле с учётом расходов, связанных с работой.',
    link: 'https://true-salary.vercel.app',
    icon: TrueSalaryIcon,
    color: colors.powder,
  },
  {
    name: 'Сколько вы можете тратить в день',
    description:
      'Укажите зарплату и обязательные расходы, а калькулятор посчитает, сколько вы можете тратить каждый день, чтобы не пришлось занимать.',
    link: 'https://daily-budget.vercel.app',
    icon: DailyBudgetIcon,
    color: colors.holly,
  },
  {
    name: 'Сколько вы могли заработать, если бы не смотрели сериалы',
    description:
      'Калькулятор считает, сколько вы могли заработать, если бы посвятили работе всё время, которое уходит на просмотр сериалов.',
    link: 'https://unearned.vercel.app/',
    icon: UnearnedIcon,
    color: colors.gold,
  },
]
