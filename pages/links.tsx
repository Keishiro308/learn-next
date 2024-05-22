import Link from "next/link";


const Links = () => {
  return (
    <div>
      <Link href="/ssg">
        Go to SSG
      </Link>
      <br />
      <Link href={{
        pathname: '/posts/[id]',
        query: { id: '1' },
      }}>
        Go to Post
      </Link>
      <br />
      <Link href="/isr">
        <button>Go to ISR</button>
      </Link>
    </div>
  )
}

export default Links;