import { Button } from 'components/atoms'
import Link from 'next/link'

const Editor = ({ query }) => {
  console.log(query)
  return (
    <div>
      <Link
        replace
        as="/post/groot"
        href={{ pathname: '/post', query: { id: '1234' } }}
      >
        <Button theme="default">Button</Button>
      </Link>
    </div>
  )
}

Editor.getInitialProps = ({ query }) => {
  return { query }
}

export default Editor
