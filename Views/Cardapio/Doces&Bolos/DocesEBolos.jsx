import React from 'react'

const DocesEBolos = ( { data } ) => {
  console.log(data)
  const filters = {
      'Mini Pudim': data.filter((docesEbolos) => docesEbolos.tipo === 'mini pudim'),
      'Trouxinha de Maçã': data.filter((docesEbolos) => docesEbolos.tipo === 'trouxinha de maça'),
      'Brigadeiro Gourmet': data.filter((docesEbolos) => docesEbolos.tipo === 'brigadeiro gourmet'),
      'Mini Brownie': data.filter((docesEbolos) => docesEbolos.tipo === 'mini brownie'),
      'pão de mel': data.filter((docesEbolos) => docesEbolos.tipo === 'pão de mel'),
      'Carolina': data.filter((docesEbolos) => docesEbolos.tipo === 'carolina'),
      'Mini Tortinha': data.filter((docesEbolos) => docesEbolos.tipo === 'mini tortinha'),
      'Bombom Tipo I': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom tipo I'),
      'Bombom Tipo II': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom tipo II'),
      'Bombom de Morango': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom de morango' ),
      'Trufas': data.filter((docesEbolos) => docesEbolos.tipo ==='trufa de chocolate'),
      'Bem Casado': data.filter((docesEbolos) => docesEbolos.tipo === "bem casado"),
      'Doces': data.filter((docesEbolos) => docesEbolos.tipo === 'doce'),
      'Mini bolos': data.filter((docesEbolos) => docesEbolos.tipo === 'mini bolo'),
      'Bolos Artesanais': data.filter((docesEbolos) => docesEbolos.tipo === 'bolo artesanal'),
  }

  return (
    <div>
      {Object.entries(filters).map(([nome, item]) => (
        <div key={nome}>
          <h1>{nome}</h1>
          {item.map((item, idx) => (
            <li key={idx}>
              {item.nome}
            </li>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DocesEBolos