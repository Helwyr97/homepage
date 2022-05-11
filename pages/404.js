import NextLink from 'next/link'
import {
    Text,
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Image,
    SimpleGrid 
} from '@chakra-ui/react'

const NotFound = () => {
    const img = `/images/robot.png`
    return (
        <Container maxW="container.md">
            <SimpleGrid columns={2} spacing={0}>
                <Box>
                    <Image 
                        src={img}
                        width={60}
                        height={60}
                        alt="404"
                        display="inline"
                    />
                </Box>
                <Box mt={20}>
                    <Heading as="h1">404 - Not Found</Heading>
                    <Text>The page you&apos;re looking foor was not found</Text>
                </Box>
            </SimpleGrid>
            
            <Divider my={6} />
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="blue">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound