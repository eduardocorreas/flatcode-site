import React from 'react'
import SocialIcons from './socialIcons'

export default function Contact() {
  return (
    <div className="text-center pl-48 pr-48 pb-20">
      <h2 className="title-section text-white">Fale conosco</h2>
      <p className="text-white p-10 text-xl">
        Entre em contato conosco e vamos vamos juntos levar a sua empresa para o
        próximo nível!
      </p>
      <div>
        <SocialIcons />
      </div>
    </div>
  )
}
