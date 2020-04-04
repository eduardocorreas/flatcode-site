import React from 'react'

export default function About() {
  return (
    <div className="text-center pl-48 pr-48">
      <h2 className="title-section text-white">Sobre nós</h2>
      <p className="text-white p-10 text-xl">
        Somos uma agência de{' '}
        <span style={{ color: '#ff7400' }}>
          Marketing Digital e Diferenciação
        </span>{' '}
        que ajuda pequenos e médio empreendedores a alavancarem suas marcas{' '}
        <span style={{ color: '#ff7400' }}>
          sem precisar gastar anos para alcançar seus resultados.
        </span>
      </p>
    </div>
  )
}
