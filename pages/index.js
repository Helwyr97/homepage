import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Button,
    useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const bioLines = [
    {
        year: '1997',
        p: 'Born in Portono, Galicia, Spain'
    },
    {
        year: '2018',
        p: 'Complete the higher level vocational training of Administration of Computer Network Systems in IES Chan do Monte'
    },
    {
        year: '2022',
        p: 'Studying the last year of Degree in Software Engineering in Universidade da Coruña'
    }
]

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
                <Paragraph>
                    I&apos;m a student of Software Engineering based in Coruña.
                    Passionate about solving everyday problems with code and keep
                    learning to improve my skills.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                        My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                   Bio
                </Heading>
                {
                    bioLines.map((l) => 
                        <BioSection key={l.year}>
                            <BioYear>{l.year}</BioYear>
                            {l.p}
                        </BioSection>
                
                    )
                }
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                   Skills
                </Heading>
                
            </Section>
            
        </Container>
    )
}
 
export default Page