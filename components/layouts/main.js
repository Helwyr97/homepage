import Head from "next/head"
import Navbar from "../navbar"
import Footer from "../footer"
import { Box, Container } from "@chakra-ui/react"

const Main = ({children, router}) => {
    return (
        <Box as="main" pb="8">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Xoel Otero - HomePage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={16}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main