import { Box, useColorModeValue } from '@chakra-ui/react'

const SkillBox = ({children}) => {
    return (
        <Box
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={2} 
            textAlign="center"
            w="100px"
            borderRadius="lg"
            borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.500')}
            borderWidth={2}
            borderStyle="solid"
        >
            {children}
        </Box>
    )
}

export default SkillBox