import { Global } from '@emotion/react'

const Fonts = () => {
    return (
        <Global
            styles={`
            @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap')
            `}
        />
    )
}

export default Fonts