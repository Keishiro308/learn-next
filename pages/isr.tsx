import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
  message: string;
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはインクリメンタルサーバーレンダリングによって描画されたページです。</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `This page was rendered at ${timestamp}`;
  console.log(message);

  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default ISR;