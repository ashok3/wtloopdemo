import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
       <script type="text/javascript" src="/post.js"></script>
        <title>WT Loop First Class Lounge Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the First Class Lounge!" />
        <p className="description">
           You have successfully scanned the passenger!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
