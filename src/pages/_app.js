import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import { Hero } from '../components/Hero'

const App = () => {
  return (
    <>
      <Head>
        <title>Emaun Hyde | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  )
}

export default App
