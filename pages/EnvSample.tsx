import { NextPage } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.NEXT_PUBLIC_ENV_VARIABLE:', process.env.NEXT_PUBLIC_TEST)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>hi</div>
          <div>{process.env.NEXT_PUBLIC_TEST}</div>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return {
    props: {},
  }
}

export default EnvSample;