import Head from 'next/head'
import Script from 'next/script'

import Description from '../components/Description'
import Card from '../components/Card'
import Author from '../components/Author'
import Copyright from '../components/Copyright'

import { calcs, description } from '../data/index'

const googleAnalytics = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SNWYD5KHZ9');
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Калькуляторы для тех, кто не любит таблички в Экселе</title>
        <meta
          name="description"
          content="Калькуляторы для тех, кто не любит таблички в Экселе"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SNWYD5KHZ9"
      />
      <Script
        id="G-SNWYD5KHZ9"
        dangerouslySetInnerHTML={{ __html: googleAnalytics }}
      />
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
