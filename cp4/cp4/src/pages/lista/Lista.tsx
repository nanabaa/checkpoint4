import './lista.css'

import { Link } from 'react-router-dom'
const Lista = () => {
  return (
    <>
      <h1>Lista de Produtos</h1>
      <div class="cardproduto">
        <img></img>
        <h2>id + nome</h2>
        <h3>descriçao</h3>
        <h2>preço</h2>
        <button >remover produto</button>

        <Link to='/addproduto'>adicionar produto</Link>
          </div>
    </>
  )
}

export default Lista