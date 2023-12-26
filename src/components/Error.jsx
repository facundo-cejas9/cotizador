
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color:#B7322C;
    color: #fff;
    padding: 10px;
    font-size: 22px;
    texttransform: uppercase;
    fontfamily: 'Lato', sans-serif;
    font-weight: 700;
    textalign: center;
`

export const Error = ({ children }) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}
