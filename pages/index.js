import Head from 'next/head'

import Description from '../components/Description'
import Card from '../components/Card'
import Author from '../components/Author'
import Copyright from '../components/Copyright'

import { calcs, description } from '../data/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Калькуляторы для тех, кто не любит таблички в Экселе</title>
        <meta
          name="description"
          content="Калькуляторы для тех, кто не любит таблички в Экселе"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white px-4 pt-4 lg:max-w-3xl">
        <Description content={description} />
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          {calcs.map((calc) => {
            return <Card {...calc} key={calc.name} />
          })}
        </div>
        <Author />
        <Copyright />
      </main>
    </>
  )
}
