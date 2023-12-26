import styled from "@emotion/styled"
import { useState } from "react"

export const ResultadoCripto = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado.ARS

  const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    @media (max-width: 768px) {
      font-Size: 17px;
      display:block;
      
    }
  `

  const Imagen = styled.img`
  display: block;
  width: 120px;
  @media (max-width: 500px) {
    width: 120px;
    margin-left: 100px
  }
`

  const Texto = styled.p`
  font-Size: 20px;
  span {
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-Size: 17px;
    
  }
  `

  const Precio = styled.p`
    font-Size: 25px;
    span {
      font-weight: 700;
    }
    @media (max-width: 500px) {
      font-Size: 20px;
    }
  `




  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}
