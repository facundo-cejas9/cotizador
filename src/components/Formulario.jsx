import { useEffect, useState, useSyncExternalStore } from 'react'

import styled from '@emotion/styled'

import { useSelectMonedas } from '../Hooks/useSelectMonedas'
import { Error } from './Error'
import Swal from 'sweetalert2'





const InputSubmit = styled.input`
   border: none; 
   background-color: #9796ff;
   border-radius: 2px;
   padding: 10px;
   width: 100%;
   font-weight: 700;
   text-transform: uppercase;
   fontsize: 20px;
   color: #FFF;
   transition: background-color .3s ease;
   margin-top:  30px;
   &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
   }
`

export const Formulario = ({ setCambioDolar, setCambioCripto }) => {

    const monedas = [

        { id: 'ARS', nombre: 'Dolar a pesos argentinos' },
        { id: 'CRIPTO', nombre: 'Criptomoneda a pesos argentinos' },

    ]





    const [dolar, setDolar] = useState('')
    const [cripto, setCripto] = useState('')
    const [moneda, SelectMonedas] = useSelectMonedas("Elige tú conversion ", monedas)
    const [tipoDolar, SelectTipoDolar] = useSelectMonedas("Elige tipo de dolar ", dolar)
    const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas("Elige la criptomenda", cripto)



    useEffect(() => {



        const apiCripto = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resp = await fetch(url)
            const resultado = await resp.json()

            const resultsCriptos = resultado.Data.map(res => {
                const objeto = {
                    id: res.CoinInfo.Name,
                    nombre: res.CoinInfo.FullName
                }
                return objeto

            })
            setCripto(resultsCriptos)



        }
        apiCripto()









    }, [moneda])


    useEffect(() => {

        const consultarAPi = async () => {
            const url = "https://dolarapi.com/v1/dolares"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayResults = resultado.map(res => {

                const object = {
                    id: res.casa,
                    nombre: res.nombre,
                    compra: res.compra,
                    venta: res.venta,
                    fecha: res.fechaActualizacion,
                }



                return object;
            })

            setDolar(arrayResults)



        }
        consultarAPi()

    }, [moneda])








    const handleSubmit = (e) => {
        e.preventDefault()

        if (moneda === undefined || moneda === '') {
            Swal.fire({
                icon: "error",
                title: "Debes elegir un tipo de conversión!",
                text: "No dejes la opcón vacía!",

            });
            return
        }

        if (moneda === 'ARS') {
            if (tipoDolar === undefined || tipoDolar === '') {
                Swal.fire({
                    icon: "error",
                    title: "Debes elegir un tipo de conversión!",
                    text: "No dejes la opcón vacía!",

                });
            }



            setCambioDolar({
                tipoDolar
            })





        }


        if (moneda === 'CRIPTO') {
            if (criptoMoneda === undefined || criptoMoneda === '') {
                Swal.fire({
                    icon: "error",
                    title: "Debes elegir un tipo de conversión!",
                    text: "No dejes la opcón vacía!",

                });
            }
        }


        setCambioCripto({
            criptoMoneda
        })



    }

    





    return (
        <>

            <form
                onSubmit={handleSubmit}

            >
                <SelectMonedas />
                {

                    moneda === 'ARS' && (
                        <SelectTipoDolar />
                    )



                }

                {
                    moneda === 'CRIPTO' && (
                        <SelectCriptoMoneda />
                    )
                }


                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    )
}
