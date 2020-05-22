import React from 'react'
import SocialIcons from '../../components/socialIcons'

export default function HeroEmailMarketing({ title }) {
  return (
    <div className="hero-blog">
      <div className="pt-10 pb-10 px-5 sm:pt-20  sm:px-24">
        <h1 className="text-xl text-center sm:text-4xl text-white ">{title}</h1>
        <br />
        <p className="text-white text-center">
          É com grande alegria que lhe recebemos em nossa comunidade, você está
          mais próximo de se tornar um empreendedor de sucesso!
        </p>
        <br />
        <p className="text-white text-center">
          Acabei de lhe enviar um e-mail contendo um link de confirmação. Por
          favor, clique para oficializar o seu ingresso.
        </p>
        <br />
        <p className="text-white text-center">
          Esse é o mecanismo que temos para garantir que todos os conteúdos
          cheguem com segurança e você não perca nada!
        </p>
        <br />
        <p className=" font-bold text-white text-center">
          Uma grande saudação de toda equipe{' '}
          <span className="font-bold text-orange-500">Flatcode!</span>
        </p>
        <br />
        <br />
        <SocialIcons />
      </div>
    </div>
  )
}
