import React from 'react'
import { UTLEQUIPAMENTOS_MOCK } from '../../../src/mock/UtlEquipamentosMock'
import { DESCARTAVEIS_MOCK } from '../../../src/mock/DescartaveisMock'
import LinhaDivisoraCardapio from '../../../src/components/LinhaDivisoraCardapio/LinhaDivisoraCardapio'

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
          <LinhaDivisoraCardapio />
          {item.map((item, idx) => (
            <div key={idx}>
              {item.nome}
              R${item.preco}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Ued