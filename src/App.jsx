import styled from "@emotion/styled"
import ImagenCripto from './img/imagen-criptos.png'
import { Formulario } from "./components/Formulario"
import { useState, useEffect } from "react"
import { ResultadoCripto } from "./components/ResultadoCripto"
import { ResultadoDolares } from "./components/ResultadoDolares"
import { Spinner } from "./components/Spinner"


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`

const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 80px;
font-size: 34px;

&::after {
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2fe;
  display: block;
  margin: 10px auto 0 auto;
}
`



function App() {


  const [cambioDolar, setCambioDolar] = useState({})
  const [cambioCripto, setCambioCripto] = useState({})

  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

 




  useEffect(() => {
    if (Object.keys(cambioDolar).length > 0) {
      setCargando(true);
      setResultado({});
      
      const cotizarDolares = async () => {
        try {
          const { tipoDolar } = cambioDolar;
          const urlDolar = `https://dolarapi.com/v1/dolares/${tipoDolar}`;

          const respuesta = await fetch(urlDolar);
          const resultado = await respuesta.json();

          setResultado(resultado);
        } catch (error) {
          console.error("Error al cotizar dólares:", error);
        } finally {
          setCargando(false);
        }
      };

      cotizarDolares();
    }
  }, [cambioDolar]);

  useEffect(() => {
    if (Object.keys(cambioCripto).length > 0) {
      const cotizarCripto = async () => {
        try {
          const { criptoMoneda } = cambioCripto;
          const urlCripto = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=ARS`;

          const respuestaCripto = await fetch(urlCripto);
          const resultadoCripto = await respuestaCripto.json();

          setResultado(resultadoCripto.DISPLAY[criptoMoneda]);
        } catch (error) {
          console.error("Error al cotizar criptomonedas:", error);
        } finally {
          setCargando(false);
          
        }
      };

      cotizarCripto();
    }
  }, [cambioCripto]);









  return (

    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="Imagen Criptomonedas"
      />
      <div>
        <Heading>Cotización Criptos y dolares</Heading>
        <Formulario setCambioCripto={setCambioCripto} setCambioDolar={setCambioDolar} />

        {cargando && <Spinner />}

       {
        resultado.ARS ? (
          <ResultadoCripto resultado={resultado} />
        ) : (
          resultado.casa && <ResultadoDolares resultado={resultado } />
        )
       }



      </div>
    </Contenedor>


  )
}

export default App
