import { Menu,MenuButton,MenuList,MenuItem, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Link from 'next/link'

const LanguageSelectorButton = () => {

    const router = useRouter()

    const { locale, locales, pathname } = router

    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="outline"
                aria-label="Language"
                p={0}
                ml={2}
            >
                {locale}
            </MenuButton>
            <MenuList>
            {locales.map(l =>
                locale != l ? 
                <Link key={l} 
                    href={pathname} 
                    locale={l}
                >
                    <MenuItem>
                        {l}
                    </MenuItem>
                </Link> 
                : undefined   
            )}
            </MenuList>
        </Menu>
    )
}

export default LanguageSelectorButton