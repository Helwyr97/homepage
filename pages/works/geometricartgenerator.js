import { useState, useEffect } from 'react'
import { Box, VStack, Button } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

// const colors = ['#01d2fd', '#ffc700', '#fe9f12', '#06d0c7']
const colors = ['#ffc700', 'pink.400', '#01d2fd']

const shapes = [
  'circle(100% at 0 0)',
  'circle(100% at 100% 0)',
  'circle(100% at 100% 100%)',
  'circle(100% at 0 100%)',
  'polygon(0 0, 0% 100%, 100% 0)',
  'polygon(0 0, 100% 0%, 100% 100%)',
  'polygon(0 100%, 100% 0%, 100% 100%)',
  'polygon(0 0, 0% 100%, 100% 100%)',
  'circle(48%)',
  null
]

const Cell = ({ seed }) => {
  const [i, setI] = useState(Math.floor(Math.random() * shapes.length))
  const [j, setJ] = useState(Math.floor(Math.random() * colors.length))

  const refreshPattern = () => {
    setI(Math.floor(Math.random() * shapes.length))
    setJ(Math.floor(Math.random() * colors.length))
  }

  useEffect(() => {
    refreshPattern()
  }, [seed])

  return (
    <Box
      cursor={'pointer'}
      height={'100%'}
      width={'100%'}
      onClick={refreshPattern}
    >
      <Box
        position={'relative'}
        height={'100%'}
        width={'100%'}
        backgroundColor={colors[j]}
        clipPath={shapes[i]}
      />
    </Box>
  )
}

const GeometricArtGenerator = () => {
  const [seed, setSeed] = useState(0)

  const refreshPattern = () => {
    setSeed(s => s + 1)
  }

  return (
    <VStack>
      <Box
        backgroundColor={'black'}
        display={'grid'}
        height={'calc(14vmin * 5)'}
        width={'calc(14vmin * 4)'}
        gridTemplateColumns={'repeat(4, 1fr)'}
        padding={'15px'}
        gap={'10px'}
        borderRadius={'10px'}
      >
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
        <Cell seed={seed} />
      </Box>
      <Button onClick={refreshPattern}>
        <FormattedMessage id="works.work.geometricartgenerator.btn.generate" />
      </Button>
    </VStack>
  )
}

export default GeometricArtGenerator
