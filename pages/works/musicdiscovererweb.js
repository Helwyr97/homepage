import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FormattedMessage } from 'react-intl'

const Work = () => {
    return (
        <Layout title="Music Discoverer (web)">
            <Container>
                <Title>
                Music Discoverer (web) <Badge>2021</Badge>
                </Title>
                <P>
                    <FormattedMessage id="works.work.musicdiscovererweb.description" />
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Web</Meta>
                        <Link href="https://musicdiscoverer.xoelotero.dev">
                            musicdiscoverer.xoelotero.dev <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/musicdiscovererweb.png" alt="Music Discoverer" />
            </Container>
        </Layout>
    )
}

export default Work