import { useState } from "react"

interface ProductData {
    id: number
    nome: string
    descricao: string
    preco: number
}

const Produto = () =>{
    const [produto, SetProduto] = useState<ProductData>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 0
    }
    )
    return (
        <div>
            <h3>{produto.nome}</h3>
            <h3>{produto.id}</h3>
            <p>{produto.descricao}</p>
            <h4>{produto.preco}</h4>
        </div>
    )
}

export default Produto