import styled from "@emotion/styled"

export const ResultadoDolares = ({ resultado }) => {

  const Resultado =styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
  `

  const Texto = styled.p`
  font-Size: 25px;
  span {
    font-weight: 600;
  }
  `

  const Precio = styled.p`
    font-Size: 30px;
    span {
      font-weight: 700;
    }
  `

  
  const { casa, nombre, compra, venta, fechaActualizacion } = resultado

  return (
    <Resultado>
        <Precio>Tipo de dolar: <span>{ casa }</span></Precio>
        <Texto>Precio Venta: <span>{ venta }</span>$</Texto>
        <Texto>Precio Compra: <span>{ compra }</span>$</Texto>
        <p>Actualizado el: <span>{ fechaActualizacion }</span></p>
    </Resultado>
  )
}
