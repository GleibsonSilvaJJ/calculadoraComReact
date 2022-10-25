import Navbar from "../components/Navbar"

import React, { useState } from 'react'


const CalculoImc = () => {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [resultado, setResultado] = useState(0)
    
    const imc = () => {

        if (peso <= 0){
            alert("Insira um Peso válido")
            return
        }
        if (altura <= 0){
            alert("Insira uma Altura válida")
            return            
            
        }
        const resultadoImc = peso / (altura * altura)
        setResultado(resultadoImc.toFixed(2))

    }    
    return (
        <div>
            <Navbar/>
            <div className="App">
                <h1>Calculo de IMC</h1>
                <label>Informe seu Peso</label>
                <input type="number"  value={peso} placeholder="Peso (kg)" onChange={e => setPeso(e.target.value)}/>
                <label>Informe sua altura</label>
                <input type="number" value={altura} placeholder="Altura (m)" onChange={e => setAltura(e.target.value)}/>
    
                <button className="button" onClick={imc}>Calcular</button>
    
                <label className="result">Resultado {resultado}</label>
    
            </div>
        </div>
    )
     
}

export default CalculoImc