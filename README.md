# 11-dwbe-vite-e-react-aula-phr

Material:

https://app.notion.com/p/Cap-tulo-8-Formul-rios-e-Componentes-Controlados-39644ced3625802384b7f6e606fd46bb

---

## Comandos

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm create vite@latest
```

Ao apresentar a mensagem abaixo, pressione a tecla `y`:

```text
Need to install the following packages:
create-vite@9.3.4
Ok to proceed? (y) 
```

Em seguida, informe o nome do projeto. Exemplo:

```text
react-aula
```

Depois, selecione o framework:

```text 
React
```

Na sequência, selecione a linguagem de programação:

```text
JavaScript
```

Na pergunta seguinte, selecione o linter:

```text
ESLint
```
Na pergunta abaixo, pressione a tecla `<ENTER>`, confirmando o `Yes` para a instalação:

```text
◆  Install with npm and start now?
│  ● Yes / ○ No
```

Depois da instalação, entre na pasta do projeto:

```bash
cd react-aula
```

```bash
npm install
```

```bash
npm run dev
```

```bash
git add . && git commit -m "Exemplo" && git push
```

---

# Exercícios 

1. Explique a diferença entre um formulário HTML tradicional e um formulário controlado pelo React.

2. Desenvolva um formulário de cadastro de clientes contendo:
    - Nome
    - E-mail
    - Telefone
    - Cidade
    - Estado (UF)

3. Crie um formulário de cadastro de alunos contendo:
    - Nome
    - Curso
    - Período
    - Situação (Ativo/Inativo)

4. Implemente validações para impedir o envio do formulário quando houver campos obrigatórios vazios.

5. Após o envio do formulário, limpe automaticamente todos os campos.

6. Como desafio, utilize um único estado (`useState`) para armazenar todos os campos do formulário em um objeto, em vez de criar um estado para cada campo. Pesquise como atualizar propriedades de objetos utilizando o operador **spread (`...`)**.