import Head from 'next/head'
import Copyright from './Copyright'
import MoreSection from './MoreSection'
import Navigation from './Navigation'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
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
