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
          Apareça para os seus seguidores através das Redes Sociais e alcance
          mais clientes através de publicações e conteúdos.
        </p>
      </div>
      <div className="sm:w-1/3 bg-white rounded-lg shadow-md p-10 text-center mb-2 sm:ml-2 sm:mr-2">
        <img src={iconConsulting} alt="Desenvolvimento de Site" />
        <h1 className="text-xl text-gray-800 mb-5">Planejamento Estratégico</h1>
        <p>
          Planeje, organize, conheça seu público e tenha resultados mais
          efetivos em menos tempo.
        </p>
      </div>
      <div className="sm:w-1/3 bg-white-500 bg-white rounded-lg shadow-md p-10 text-center mb-2 sm:ml-2 sm:mr-2">
        <img src={iconSite} alt="Desenvolvimento de Site" />
        <h1 className="text-xl text-gray-800 mb-5">Website</h1>
        <p>
          Ganhe autoridade perante seus clientes e concorrentes. Mostre todo o
          potencial dos seus produtos e serviços.
        </p>
      </div>
    </div>
  )
}
