import { useState } from "react";
import "../../styles/formulario.css";

function FormularioProduto({ voltar }) {
    function salvar(e) {
        e.preventDefault();

        if (nome === "" || categoria === "" || preco === "" || estoque === "" || descricao === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const produto = {
            nome,
            categoria,
            preco,
            estoque,
            descricao,
            estado,
            ativo
        };

        console.log(produto);

        alert("Produto cadastrado!")

        setNome("");
        setCategoria("");
        setPreco("");
        setEstoque("");
        setDescricao("");
        setEstado("Novo");
        setAtivo(false);
    }

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estado, setEstado] = useState("Novo");
    const [ativo, setAtivo] = useState(false);

    return (
        <div>
            <h1>Exemplo 13</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>Cadastro de Produto</h2>

            <form className="formulario" onSubmit={salvar}>
                <input className="formularioinput"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <select className="formularioselect" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Informática">Informática</option>
                    <option value="Periféricos">Periféricos</option>
                    <option value="Monitores">Monitores</option>
                </select>
                <input className="formularioinput"
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
                <input className="formularioinput"
                    type="number"
                    placeholder="Estoque"
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                />
                <br />
                <textarea className="formulariotextarea"
                    rows="5"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <label>
                    <input
                        type="radio"
                        name="condicao-de-uso"
                        value="Novo"
                        checked={estado === "Novo"}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    Novo
                </label>
                <label>
                    <input
                        type="radio"
                        name="condicao-de-uso"
                        value="Usado"
                        checked={estado === "Usado"}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    Usado
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={ativo}
                        onChange={(e) => setAtivo(e.target.checked)}
                    />
                    Ativo
                </label>

                <br /><br />
                <button className="botao">
                    Cadastrar
                </button>
            </form>

            <p>Produto: {nome}</p>
            <p>Categoria: {categoria}</p>
            <p>Preço: {preco}</p>
            <p>Estoque: {estoque}</p>
            <p>Descrição: {descricao}</p>
            <p>Estado: {estado}</p>
            <p>Ativo: {ativo ? "Sim" : "Não"}</p>

        </div>
    );
}

export default FormularioProduto;