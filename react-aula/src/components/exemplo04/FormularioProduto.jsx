import { useState } from "react";
import "../../App.css";

function FormularioProduto({ voltar }) {
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [descricao, setDescricao] = useState("");

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
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="" selected>Selecione</option>
                    <option value="Informática">Informática</option>
                    <option value="Periféricos">Periféricos</option>
                    <option value="Monitores">Monitores</option>
                </select>
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
                <br />
                <textarea
                    rows="5"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <p>Produto: {nome}</p>
            <p>Categoria: {categoria}</p>
            <p>Preço: {preco}</p>
            <p>Estoque: {estoque}</p>
            <p>Descrição: {descricao}</p>

        </div>
    );
}

export default FormularioProduto;