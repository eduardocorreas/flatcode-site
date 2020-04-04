import React from 'react'
import SplitText from 'react-pose-text'

import Particles from 'react-particles-js'

export default function Hero({ title, wordHighlight }) {
  const charPoses = {
    exit: { opacity: 0, y: 10 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 60,
    },
  }
  return (
    <div className="hero-blog">
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
        <h2 className="text-3xl sm:text-4xl text-white font-bold">{title}</h2>
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text-3xl sm:text-4xl sm:text-10xl text-white text-orange-600 font-bold"
        >
          {wordHighlight}
        </SplitText>
        <h2 className="text-3xl sm:text-4xl text-white font-bold">
          Veja mais sobre este caso.
        </h2>
      </div>
      <div className="arrow-down"></div>
    </div>
  )
}
