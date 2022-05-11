import NextLink from 'next/link'
import {
    Text,
    Box,
    Heading,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">404 - Not Found</Heading>
            <Text>The page you&apos;re looking foor was not found</Text>
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