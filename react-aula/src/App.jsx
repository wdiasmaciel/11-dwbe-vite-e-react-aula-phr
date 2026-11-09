import { useState } from 'react'
import FormularioProduto01 from './components/exemplo01/FormularioProduto.jsx'
import FormularioProduto02 from './components/exemplo02/FormularioProduto.jsx'
import FormularioProduto03 from './components/exemplo03/FormularioProduto.jsx'
import FormularioProduto04 from './components/exemplo04/FormularioProduto.jsx'
import './App.css'

function App() {
  const [exemplo, setExemplo] = useState('inicio')

  if (exemplo === 'exemplo01') {
    return <FormularioProduto01 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo02') {
    return <FormularioProduto02 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo03') {
    return <FormularioProduto03 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo04') {
    return <FormularioProduto04 voltar={() => setExemplo('inicio')} />
  }

  return (
    <>
      <h1>Prática 11</h1>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo01')}>
        Exemplo 01
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo02')}>
        Exemplo 02
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo03')}>
        Exemplo 03
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo04')}>
        Exemplo 04
      </button>
      
    </>
  )
}

export default App
