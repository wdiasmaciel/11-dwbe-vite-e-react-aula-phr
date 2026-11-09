import { useState } from "react";
import "../../App.css";

function FormularioProduto({ voltar }) {
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");

    return (
        <div>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>Cadastro de Produto</h2>

            <div>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Estoque"
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                />
            </div>

            <p>Produto: {nome}</p>
            <p>Categoria: {categoria}</p>
            <p>Preço: {preco}</p>
            <p>Estoque: {estoque}</p>
            
        </div>
    );
}

export default FormularioProduto;