import { Container, Heading, SimpleGrid, } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import thumbmusicdiscovererWeb from '../public/images/works/musicdiscovererweb.png'
import { FormattedMessage } from "react-intl"

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    <FormattedMessage id="works.title" />
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="musicdiscovererweb" title="Music Discoverer Web" thumbnail={thumbmusicdiscovererWeb}>
                            <FormattedMessage id="works.work.1.description" />
                        </WorkGridItem>
                    </Section>
                    {/* <Section>
                        <WorkGridItem id="musicdiscovererMobile" title="Music Discoverer Android" thumbnail={thumbmusicdiscovererAndroid}>
                            App to discover music of all genres randomly, using the spotify api
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works