import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Button,
    useColorModeValue,
    Wrap,
    List,
    ListItem,
    Link,
    Icon
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import SkillBox from "../components/skill"
import Layout from "../components/layouts/article"
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

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
        <Layout>
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
                            <SkillBox>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                    h={10} 
                                    w={10} 
                                    alt="Javascript"
                                    display="inline"    
                                />
                                <p>Javascript</p>
                            </SkillBox>
                            <SkillBox>
                                <Image
                                    src="http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"
                                    h={10} 
                                    w={10} 
                                    alt="Java"
                                    display="inline"    
                                />
                                <p>Java</p>
                            </SkillBox>
                            <SkillBox>
                                <Image
                                    src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
                                    h={10} 
                                    w={10} 
                                    alt="Spring"
                                    display="inline"    
                                />
                                <p>Spring</p>
                            </SkillBox>
                            <SkillBox>
                                <Image
                                    src="https://nodejs.org//static/images/logo.svg"
                                    h={10} 
                                    w={10} 
                                    alt="Node.js"
                                    display="inline"    
                                />
                                <p>Node.js</p>
                            </SkillBox>
                            <SkillBox>
                                <Image
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                                    h={10} 
                                    w={10} 
                                    alt="React.js"
                                    display="inline"    
                                />
                                <p>React.js</p>
                            </SkillBox>
                            <SkillBox>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
                                    h={10} 
                                    w={10} 
                                    alt="Kotlin"
                                    display="inline"    
                                />
                                <p>Kotlin</p>
                            </SkillBox>
                    </Wrap>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                    On the net
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Helwyr97" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @Helwyr97
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/XoelOtero" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    @XoelOtero
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/xoel_otero" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @xoel_otero
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.com/users/Helwyr#6097" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<Icon as={IoLogoDiscord} />}
                                >
                                    @Helwyr#6097
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
                
            </Container>
        </Layout>
    )
}
 
export default Page