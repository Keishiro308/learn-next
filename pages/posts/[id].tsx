import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PostProps = {
  id: string;
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
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
        <p>Post ID: {id}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  if (context.params === undefined) { return { props: { id: '0' } } }
  const id = Array.isArray(context.params['id']) ? context.params['id'][0] : context.params['id'];
  if (id === undefined) { return { props: { id: '0' } } }

  return {
    props: {
      id,
    }
  }
}

export default Post;