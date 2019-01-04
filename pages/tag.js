import { PageTemplate, ListTemplate } from 'components/templates'
import { SearchContainer, ListContainer } from 'containers'
import { withRouter } from 'next/router'

const TagPage = ({ router }) => {
  const { tag } = router.query
  return (
    <PageTemplate>
      <ListTemplate>
        <SearchContainer />
        <ListContainer tag={tag} />
      </ListTemplate>
    </PageTemplate>
  )
}

export default withRouter(TagPage)
