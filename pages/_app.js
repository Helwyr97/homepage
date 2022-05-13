import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import messages from '../lib/messages'

const Website = ({Component, pageProps, router}) => {
    
    const { locale } = useRouter()

    return (
        <ChakraProvider theme={theme}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence> 
                </Layout>
            </IntlProvider>
        </ChakraProvider>
    )
}

export default Website