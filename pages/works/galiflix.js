import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'
import { FormattedMessage } from 'react-intl'

const Work = () => {
  return (
    <Layout title="Galiflix">
      <Container>
        <Title>
          Galiflix <Badge>2022</Badge>
        </Title>
        <P>
          <FormattedMessage id="works.work.galiflix.description2" />
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://galiflix.xoelotero.dev">
              galiflix.xoelotero.dev <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Supabase</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/galiflix1.png" alt="Galiflix App 1" />
        <WorkImage src="/images/works/galiflix2.png" alt="Galiflix App 2" />
        <WorkImage src="/images/works/galiflix3.png" alt="Galiflix App 3" />
      </Container>
    </Layout>
  )
}

export default Work
