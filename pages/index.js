import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Button,
    useColorModeValue,
    Wrap
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

const skills = [
    {img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", name: "Javascript"},
    {img: "http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png", name: "Java"},
    {img: "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg", name: "Spring"},
    {img: "https://nodejs.org//static/images/logo.svg", name: "Node.js"},
    {img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K", name: "React.js"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", name: "Kotlin"},
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
                <Wrap align="center" spacing={4} justify="center">
                    {
                        skills.map(sk =>
                            <Box 
                                key={sk.name} 
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                p={2} 
                                textAlign="center"
                                w="100px"
                                borderRadius="lg"
                                borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.500')}
                                borderWidth={2}
                                borderStyle="solid"
                            >
                                <Image
                                    src={sk.img}
                                    h={10} 
                                    w={10} 
                                    alt={sk.name}
                                    display="inline"    
                                />
                                <p>{sk.name}</p>
                            </Box>
                        )
                    }
                </Wrap>
                
            </Section>
            
        </Container>
    )
}
 
export default Page