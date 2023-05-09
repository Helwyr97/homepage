import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'
import { FormattedMessage } from 'react-intl'

const Work = () => {
  return (
    <Layout title="Notas">
      <Container>
        <Title>
          Notes <Badge>2021</Badge>
        </Title>
        <P>
          <FormattedMessage id="works.work.notes.description2" />
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://notes.xoelotero.dev">
              notes.xoelotero.dev <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Firebase</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/notes1.png" alt="Notes App 1" />
        <WorkImage src="/images/works/notes2.png" alt="Notes App 2" />
      </Container>
    </Layout>
  )
}

export default Work
