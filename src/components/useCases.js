import React from 'react'
import UseCaseItem from './useCaseItem'

import { useStaticQuery, graphql } from 'gatsby'
export default function UseCases() {
  const data = useStaticQuery(graphql`
    query {
      pojo: file(name: { eq: "pojo_jump" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="bg-white w-full p-10 sm:p-20">
      <h2 className="title-section text-gray-800">
        Casos <span style={{ color: '#ff7400' }}>de uso</span>
      </h2>
      <p className="text-gray-800 p-5 pb-10 sm:p-10 text-xl text-center">
        Os nossos resultados na história de nossos clientes{' '}
      </p>
      <div>
        <UseCaseItem
          imgNode={data.pojo}
          caption={'Pojo Personal'}
          title={
            'Um salto para a consultoria online: A trajetória de um personal trainer no mundo digital'
          }
          description={
            'Que é fundamental estar nas redes sociais todo mundo sabe! Que é preciso vender todo mundo sabe! Mas e quando você se vê cercado de muitos produtos e profissionais no mesmo ramo? Esse foi o grande desafio do nosso cliente Pedro Pojo: se destacar em um mundo onde existem muitas referências e produtos iguais, mas você precisa se diferenciar!'
          }
          link={'/cases/um-salto-para-a-consultoria-online'}
        />
      </div>
    </div>
  )
}
