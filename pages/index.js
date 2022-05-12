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
                    mt={2} 
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
                        <SkillBox title="JavaScript" src="/images/skills/javascript.png" />
                        <SkillBox title="Java" src="/images/skills/java.png" />
                        <SkillBox title="Spring" src="/images/skills/spring.svg" />
                        <SkillBox title="Node.js" src="/images/skills/node.svg" />
                        <SkillBox title="React.js" src="/images/skills/react.svg" />
                        <SkillBox title="Kotlin" src="/images/skills/kotlin.svg" />
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