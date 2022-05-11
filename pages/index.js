import { 
    Container, 
    Box, 
    Heading, 
    Image,
    useColorModeValue
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return (
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center"
            >
                Hello, I&apos;m a full-stack developer based in Coruña!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Xoel Otero
                    </Heading>
                    <p>Developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            borderRadius="full"
                            src="/images/me.jpg"
                            alt="Profile Image"
                        />  
                    </Box>    
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Paragraph</Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                   Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Portono, Galicia, Spain
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Complete the higher level vocational training of
                    Administration of Computer Network Systems in
                    IES Chan do Monte
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Studying the last year of Degree in Software
                    Engineering in Universidade da Coruña
                </BioSection>
            </Section>
            
        </Container>
    )
}
 
export default Page