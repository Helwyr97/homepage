import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FormattedMessage } from 'react-intl'

const Work = () => {
    return (
        <Layout title="Pomotimer">
            <Container>
                <Title>
                Pomotimer <Badge>2022</Badge>
                </Title>
                <P>
                    <FormattedMessage id="works.work.pomotimer.description2" />
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Web</Meta>
                        <Link href="https://pomotimer.xoelotero.dev">
                            pomotimer.xoelotero.dev <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/pomotimer.png" alt="Pomotimer" />
                <WorkImage src="/images/works/pomotimer2.png" alt="Pomotimer" />
            </Container>
        </Layout>
    )
}

export default Work