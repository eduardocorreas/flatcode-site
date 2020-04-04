import React from 'react'

import iconSite from '../images/icon-site.svg'
import iconMkt from '../images/icon-social-media.svg'
import iconConsulting from '../images/icon-consulting.svg'

export default function Services() {
  return (
    <div className="mb-5 sm:flex sm:pl-5 sm:pr-5 ml-5 mr-5">
      <div className="sm:w-1/3 bg-white rounded-lg shadow-md p-10 text-center mb-2 sm:ml-2 sm:mr-2">
        <img src={iconMkt} alt="Desenvolvimento de Site" />
        <h1 className="text-xl text-gray-800 mb-5">Marketing Digital</h1>
        <p>
          Estrutura completa para construir audiência e engajamento da sua
          empresa ou produto, gerando assim maior autoridade do seu negócio
        </p>
      </div>
      <div className="sm:w-1/3 bg-white rounded-lg shadow-md p-10 text-center mb-2 sm:ml-2 sm:mr-2">
        <img src={iconConsulting} alt="Desenvolvimento de Site" />
        <h1 className="text-xl text-gray-800 mb-5">Planejamento Estratégico</h1>
        <p>
          Através de reuniões com o cliente, estudamos todos os pontos que
          influenciam no seu negócio: identidade, público, etc.
        </p>
      </div>
      <div className="sm:w-1/3 bg-white-500 bg-white rounded-lg shadow-md p-10 text-center mb-2 sm:ml-2 sm:mr-2">
        <img src={iconSite} alt="Desenvolvimento de Site" />
        <h1 className="text-xl text-gray-800 mb-5">Website</h1>
        <p>
          O site gera autoridade perante sua concorrência e gera credibilidade
          com o seu público. Por isso o utilizamos como um grande aliado na
          estratégia.
        </p>
      </div>
    </div>
  )
}
