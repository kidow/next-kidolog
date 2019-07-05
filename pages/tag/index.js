import { PageTemplate, ListTemplate } from 'components/templates'
import { List } from 'components/organisms'
import { withRouter } from 'next/router'
import { Search } from 'components/atoms'

const TagPage = ({ router }) => {
  const { tag } = router.query
  return (
    <PageTemplate>
      <ListTemplate>
        <Search />
        <List tag={tag} />
      </ListTemplate>
    </PageTemplate>
  )
}

export default withRouter(TagPage)
