import { PageTemplate, ListTemplate } from 'components/templates'
import { SearchContainer, ListContainer } from 'containers'

export default () => (
  <PageTemplate>
    <ListTemplate>
      <SearchContainer />
      <ListContainer />
    </ListTemplate>
  </PageTemplate>
)
