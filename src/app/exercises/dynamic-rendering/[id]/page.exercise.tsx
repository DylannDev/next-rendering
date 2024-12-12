import RenderTime from '@/components/render-time'
import {getPostById, getPosts} from '@/db/sgbd'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

export async function generateMetadata(props: {
  params: Promise<{id: string}>
}): Promise<Metadata> {
  const params = await props.params
  const post = await getPostById(params.id)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This post does not exist.',
    }
  }

  return {
    title: post.title,
    description: 'A detailed post on a specific topic.',
  }
}

export const revalidate = 10

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts?.map((post) => ({
    params: {id: post.id},
  }))
}

const Page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params //next 15

  const post = await getPostById(params.id)
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Dynamic Rendering Posts By ID
      </h1>
      <ul className="list-disc p-4 pl-4">
        <li key={post?.title}>
          {post?.title} (id : {post?.id})
        </li>
      </ul>
      <RenderTime />
    </div>
  )
}
export default Page
