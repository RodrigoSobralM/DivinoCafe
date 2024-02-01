import React from 'react'
import { UTLEQUIPAMENTOS_MOCK } from '../../../src/mock/UtlEquipamentosMock'
import { DESCARTAVEIS_MOCK } from '../../../src/mock/DescartaveisMock'

const Ued = ({ data }) => {
  
  const filters = {
    "Utensilios & Equipamentos": UTLEQUIPAMENTOS_MOCK,
    "Descartaveis": DESCARTAVEIS_MOCK
  }

  return (
    <div>
      {Object.entries(filters).map(([index, item]) => (
        <div key={index}>
          <h1>{index}</h1>
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

export default Ued