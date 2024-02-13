import React from 'react';
import LinhaDivisoraCardapio from '../../../src/components/LinhaDivisoraCardapio/LinhaDivisoraCardapio';
import "./index.scss"
const DocesEBolos = ({ data }) => {
  console.log(data);
  const filters = {
    'Mini Pudim': data.filter((docesEbolos) => docesEbolos.tipo === 'mini pudim'),
    'Trouxinha Folheada': data.filter((docesEbolos) => docesEbolos.tipo === 'trouxinha Folheada'),
    'Brigadeiro Gourmet': data.filter((docesEbolos) => docesEbolos.tipo === 'brigadeiro gourmet'),
    'Mini Brownie': data.filter((docesEbolos) => docesEbolos.tipo === 'mini brownie'),
    'Pão de Mel': data.filter((docesEbolos) => docesEbolos.tipo === 'pão de mel'),
    'Carolina': data.filter((docesEbolos) => docesEbolos.tipo === 'carolina'),
    'Mini Tortinha': data.filter((docesEbolos) => docesEbolos.tipo === 'mini tortinha'),
    'Bombom Tipo I': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom tipo I'),
    'Bombom Tipo II': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom tipo II'),
    'Bombom de Morango': data.filter((docesEbolos) => docesEbolos.tipo === 'bombom de morango'),
    'Trufas': data.filter((docesEbolos) => docesEbolos.tipo === 'trufa de chocolate'),
    'Bem Casado': data.filter((docesEbolos) => docesEbolos.tipo === 'bem casado'),
    'Doces': data.filter((docesEbolos) => docesEbolos.tipo === 'doce'),
    'Mini Bolos': data.filter((docesEbolos) => docesEbolos.tipo === 'mini bolo'),
    'Bolos Artesanais': data.filter((docesEbolos) => docesEbolos.tipo === 'bolo artesanal'),
  };

  return (
    <div className='docesEBolos'>
      {Object.entries(filters).map(([nome, itens]) => (
        <div key={nome}>
          <h1>{nome}</h1>
          <LinhaDivisoraCardapio />
            {itens.map((item, idx) => (
              <div key={idx} className='docesEBolos__item'>
                <p className='titleItem'>{item.nome}</p>
                <div>
                  <p>{item.preco && <span>R${item.preco}</span>}</p>
                  <p>{item.precoFesta && <span>Preço para festa: R${item.precoFesta}</span>}</p>
                  <p>{item.precoMedio && <span>Preço médio: R${item.precoMedio}</span>}</p>
                  <p>{item.precofatia20a25 && <span>Preço por fatia (20 a 25 pessoas): R${item.precofatia20a25}</span>}</p>
                  <p>{item.precofatia25a30 && <span>Preço por fatia (25 a 30 pessoas): R${item.precofatia25a30}</span>}</p> 
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DocesEBolos;
