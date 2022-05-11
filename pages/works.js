import { Container, Heading, SimpleGrid, } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import thumbmusicdiscovererWeb from '../public/images/works/prueba.png'
import thumbmusicdiscovererAndroid from '../public/images/works/prueba.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="musicdiscovererWeb" title="Music Discoverer Web" thumbnail={thumbmusicdiscovererWeb}>
                        Web app to discover music of all genres randomly, using the spotify api
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="musicdiscovererMobile" title="Music Discoverer Android" thumbnail={thumbmusicdiscovererAndroid}>
                        App to discover music of all genres randomly, using the spotify api
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works