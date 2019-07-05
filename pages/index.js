import { PageTemplate, ListTemplate } from 'components/templates'
import { ListContainer } from 'containers/organisms'
import { Search } from 'components/atoms'

export default () => (
  <PageTemplate>
    <ListTemplate>
      <Search />
      <ListContainer />
    </ListTemplate>
  </PageTemplate>
)
