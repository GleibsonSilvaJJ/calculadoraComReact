import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [operacao, setOperacao] = useState('Somar')

  const calcular = () => {
    if (operacao === 'Somar') {
      return parseFloat(n1) + parseFloat(n2)
    } else if (operacao === 'Subtrair') {
      return parseFloat(n1) - parseFloat(n2)
    } else if (operacao === 'Multiplicar') {
      return parseFloat(n1) * parseFloat(n2)
    } else return parseFloat(n1) / parseFloat(n2)
  }

  useEffect(() => {
    setResultado(calcular())
  }, [n1, n2, operacao])

  return (
    <div class="box-degrade">
      <div className="App">
        <h1>Gleibson Silva</h1>
        <h2>Calculadora React</h2>
        <label>Primeiro Número</label>
        <input type="number" value={n1} onChange={e => setN1(e.target.value)} />
        <label>Segundo Número</label>
        <input type="number" value={n2} onChange={e => setN2(e.target.value)} />

        <select onChange={e => setOperacao(e.target.value)}>
          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label>Resultado {resultado}</label>
      </div>
    </div>
  )
}

export default App
