import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" marginTop={5}>
      &copy; {new Date().getFullYear()} Xoel Otero. All Rights Reserved
    </Box>
  )
}

export default Footer
