import { Box, useColorModeValue, Image } from '@chakra-ui/react'

const SkillBox = ({title, src}) => {
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
            <Image
                src={src}
                h={10} 
                w={10} 
                alt={title}
                display="inline"  
                placeholder="blur"  
            />
            <p>{title}</p>
        </Box>
    )
}

export default SkillBox