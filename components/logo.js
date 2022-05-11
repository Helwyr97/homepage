import Image from "next/image"
import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
    transition: 200ms ease;
    }
    &:hover img {
    transform: rotate(-20deg);
    }
`
const Logo = () => {
    const logoImg = `/images/logo${useColorModeValue('','-dark')}.png`
    
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logoImg} width={30} height={30} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Space Mono'
                        fontWeight='bold'
                        ml={3}
                    >
                        Xoel Otero
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo