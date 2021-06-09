import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Altaf | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This blog is created with django rest framework and next.js.The frontend part is hosted in netlify  and backend hosted  
        in heroku.So it will maybe slow little bit.</p>
        <p className={styles.text}>This is just for demo purpose.For more projets and update have look in my protfolio.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See blog Listing</a>
        </Link>
      </div>
    </>
  )
}
