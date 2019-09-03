import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import { withRouter } from 'next/router'
import Head from 'next/head'
import removeMd from 'remove-markdown'
import axios from 'axios'
import { Content } from 'components/molecules'
import { Comments } from 'components/organisms'

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Kidolog</title>
        <meta
          name="description"
          content={removeMd(post.markdown).slice(0, 190)}
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={removeMd(post.markdown).slice(0, 190)}
        />
        <meta property="og:image" content={post.thumbnail} />
        <meta property="og:url" content={`/post/${post._id}`} />
        <meta property="twitter:title" content={post.title} />
        <meta
          property="twitter:description"
          content={removeMd(post.markdown).slice(0, 190)}
        />
        <meta property="twitter:image" content={post.thumbnail} />
      </Head>
      <PostTemplate>
        <Logo theme="post" />
        <Content post={post} />
        {/* <Comments /> */}
      </PostTemplate>
    </>
  )
}

Post.getInitialProps = async ({ query }) => {
  if (!query.id) return {}
  const { data } = await axios.get(`${process.env.BASE_URL}/posts/${query.id}`)
  return { post: data }
}

export default withRouter(Post)
