import React from 'react'

const Bebidas = ( { data } ) => {
    console.log(data)
    const filters = {
        'Café': data.filter((bebida) => bebida.tipo === 'Café'),
        'Refrigerante': data.filter((bebida) => bebida.tipo === 'Refrigerante'),
        'Suco': data.filter((bebida) => bebida.tipo === 'Suco'),
        'Água': data.filter((bebida) => bebida.tipo === 'Água'),
        'Leite': data.filter((bebida) => bebida.tipo === 'Leite'),
        'Chá': data.filter((bebida) => bebida.tipo === 'Chá'),
    }

  return (
    <div>
        {Object.entries(filters).map(([nome, item]) => (
            <div key={nome}>
                <h1>{nome}</h1>
                {item.map((item, idx) => (
                    <li key={idx}>
                        {item.nome}
                        R${item.preco}
                    </li>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Bebidas