import { useState } from 'react'
import FormularioProduto01 from './components/exemplo01/FormularioProduto.jsx'
import FormularioProduto02 from './components/exemplo02/FormularioProduto.jsx'
import FormularioProduto03 from './components/exemplo03/FormularioProduto.jsx'
import FormularioProduto04 from './components/exemplo04/FormularioProduto.jsx'
import FormularioProduto05 from './components/exemplo05/FormularioProduto.jsx'
import FormularioProduto06 from './components/exemplo06/FormularioProduto.jsx'
import FormularioProduto07 from './components/exemplo07/FormularioProduto.jsx'
import FormularioProduto08 from './components/exemplo08/FormularioProduto.jsx'

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

  if (exemplo === 'exemplo05') {
    return <FormularioProduto05 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo06') {
    return <FormularioProduto06 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo07') {
    return <FormularioProduto07 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo08') {
    return <FormularioProduto08 voltar={() => setExemplo('inicio')} />
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
      <button className="botao" type="button" onClick={() => setExemplo('exemplo05')}>
        Exemplo 05
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo06')}>
        Exemplo 06
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo07')}>
        Exemplo 07
      </button>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo08')}>
        Exemplo 08
      </button>
    </>
  )
}

export default App
