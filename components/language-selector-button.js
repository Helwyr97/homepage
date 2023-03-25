import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSelectorButton = () => {
  const { locale, locales, pathname } = useRouter()

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
        {locales.map(l => (
          <Link key={l} href={pathname} locale={l}>
            <MenuItem
              backgroundColor={
                l === locale ? useColorModeValue('gray.300', 'gray.500') : null
              }
            >
              {l}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  )
}

export default LanguageSelectorButton
