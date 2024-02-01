
import React from 'react'

const Salgados = ( {data} ) => {

    const filters = {
        'Salgados Fritos': data.filter((Salgados) => Salgados.tipo === 'frito'),
        'Salgados Assados': data.filter((Salgados) => Salgados.tipo === 'assado'),
        'Canapés': data.filter((Salgados) => Salgados.tipo === 'canapé'),
        'Mini Sanduíche': data.filter((Salgados) => Salgados.tipo === 'mini sanduíche'),
    }

  return (
    <div>
        {Object.entries(filters).map(([key, index]) => (
            <div key={key}>
                <h1>{key}</h1>
                {index.map((item, idx) => (
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

export default Salgados