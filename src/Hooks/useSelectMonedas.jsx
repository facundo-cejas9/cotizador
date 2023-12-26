import { useState } from 'react'
import styled from '@emotion/styled'

const InputStyled = styled.label`
    width: 100%;
    background-color: 'lightblue';
    font-size: 25px;
    fontfamily: 'lato', sans-serif;
    color: white;
    display: block;
    margin: 15px 0px
`

const SelectStyled = styled.select`
    width: 100%;
    fontsize: 18px;
    padding: 10px;
    border-radius: 10px;
    

`

export const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState()

    const SelectMonedas = () => (
        <>
            <InputStyled>{label}</InputStyled>
            <SelectStyled
                    value={ state }
                    onChange={ e => setState( e.target.value)}
            
            >
                <option  value='' >Seleccionar </option>

                {
                    opciones.map(opcion => (
                        <option key={opcion.id}  value={opcion.id}> {opcion.nombre}</option>
                    ))
                }


            </SelectStyled>
        </>
    )

    return [state, SelectMonedas]

}
