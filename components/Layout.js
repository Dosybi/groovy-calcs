import Script from 'next/script'

import Head from 'next/head'
import Copyright from './Copyright'
import MoreSection from './MoreSection'
import Navigation from './Navigation'

const googleAnalytics = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SNWYD5KHZ9');
`

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SNWYD5KHZ9"
      />
      <Script
        id="G-SNWYD5KHZ9"
        dangerouslySetInnerHTML={{ __html: googleAnalytics }}
      />
      <div className="m-auto max-w-2xl p-4">
        <Navigation />
        {children}
        <MoreSection />
        <Copyright />
      </div>
    </>
  )
}

export default Layout
