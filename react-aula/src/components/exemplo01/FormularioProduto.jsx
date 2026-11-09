import { useState } from "react";
import "../../App.css";

function FormularioProduto({ voltar }) {
    const [nome, setNome] = useState("");

    return (
        <div>
            <h1>Exemplo 01</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>
            
            <h2>Cadastro de Produto</h2>
            
            <input
                type="text"
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            
            <p>Produto: {nome}</p>
        </div>
    );
}

export default FormularioProduto;