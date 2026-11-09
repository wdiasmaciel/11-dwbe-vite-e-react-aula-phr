import './App.css'
import { useState } from 'react'
import FormularioProduto01 from './components/exemplo01/FormularioProduto.jsx'

function App() {
  const [exemplo, setExemplo] = useState('inicio')

  if (exemplo === 'exemplo01') {
    return <FormularioProduto01 voltar={() => setExemplo('inicio')} />
  }

  return (
    <>
      <h1>Prática 11</h1>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo01')}>
        Exemplo 01
      </button>
    </>
  )
}

export default App
