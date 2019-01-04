import { Button } from 'components/atoms'
import Link from 'next/link'

const Editor = () => {
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

export default Editor
