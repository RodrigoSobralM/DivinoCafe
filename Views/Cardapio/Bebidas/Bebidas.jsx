import React from 'react'
import LinhaDivisoraCardapio from '../../../src/components/LinhaDivisoraCardapio/LinhaDivisoraCardapio'
import "./index.scss"

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
    <div className='bebidas'>
        {Object.entries(filters).map(([nome, item]) => (
            <div key={nome} className=''>
                <h1>{nome}</h1>
                <LinhaDivisoraCardapio />
                {item.map((item, idx) => (
                    <div key={idx} className='bebidas__item'>
                        <p>{item.nome}</p>
                        <p>R${item.preco}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Bebidas