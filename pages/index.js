import Head from 'next/head'

import Description from '../components/Description'
import Card from '../components/Card'
import Author from '../components/Author'

import InflationIcon from '../assets/icons/turkey.svg'
import MinorExpensesIcon from '../assets/icons/game.svg'
import ComfortableRetirementIcon from '../assets/icons/sunshade.svg'
import TrueSalaryIcon from '../assets/icons/up-and-down.svg'
import DailyBudgetIcon from '../assets/icons/wallet.svg'

const colors = {
  holly: 'bg-gradient-to-r from-blue-200 to-cyan-200',
  gold: 'bg-gradient-to-r from-amber-200 to-yellow-500',
  lime: 'bg-gradient-to-r from-teal-400 to-yellow-200',
  powder: 'bg-gradient-to-r from-violet-200 to-pink-200',
}

const calcs = [
  {
    name: 'Инфляция в Казахстане в донерах, айфонах и казы',
    description:
      'Как изменился ваш уровень жизни за 10 лет: что вы могли бы купить на зарплату в 2012 и сейчас.',
    link: 'https://inflation-pi.vercel.app',
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
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Калькуляторы для тех, кто не любит таблички в Икселе</title>
        <meta
          name="description"
          content="Калькуляторы для тех, кто не любит таблички в Икселе"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white px-4 pt-4 lg:max-w-3xl">
        <Description />
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          {calcs.map((calc) => {
            return <Card {...calc} key={calc.name} />
          })}
        </div>
        <Author />
      </main>
    </>
  )
}
