import React from 'react'

import Particles from 'react-particles-js'

export default function Hero() {
  return (
    <div className="hero">
      <Particles
        params={{
          interactivity: {
            events: { onhover: { enable: true, mode: 'bubble' } },
            modes: { bubble: { size: 20 } },
          },
          particles: { shape: { type: 'triangle' } },
        }}
        style={{ position: 'absolute', opacity: 0.4 }}
      />
      <div className="pt-10 pb-10 px-10 sm:pt-20  sm:px-24">
        <h2 className="text-3xl sm:text-4xl text-white font-bold">
          Por quanto tempo o seu negócio vai ficar
        </h2>
        <h2 className="text-3xl sm:text-8xl text-white text-orange-600 font-bold">
          fora da internet?
        </h2>
        <h2 className="text-3xl sm:text-4xl text-white font-bold">
          Entre agora no mundo Digital.
        </h2>
      </div>
      <div className="arrow-down"></div>
    </div>
  )
}
