import { PageTemplate, ListTemplate } from 'components/templates'
import { ListContainer } from 'containers/organisms'
import { SearchContainer } from 'containers/atoms'

export default () => (
  <PageTemplate>
    <ListTemplate>
      <SearchContainer />
      <ListContainer />
    </ListTemplate>
  </PageTemplate>
)
