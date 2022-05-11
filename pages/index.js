import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

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
            
        </Container>
    )
}
 
export default Page