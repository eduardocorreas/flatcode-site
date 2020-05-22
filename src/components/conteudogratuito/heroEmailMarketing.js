import React from 'react'
import FormMailRelay from '../conteudogratuito/formMailRelay'

export default function HeroEmailMarketing({ title }) {
  return (
    <div className="hero-blog">
      <div className="pt-10 pb-10 px-5 sm:pt-20  sm:px-24">
        <h1 className="text-xl text-center sm:text-4xl text-white ">{title}</h1>
        <FormMailRelay />
      </div>
    </div>
  )
}