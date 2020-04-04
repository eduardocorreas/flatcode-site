import React from 'react'
import SplitText from 'react-pose-text'

import Particles from 'react-particles-js'

export default function Hero() {
  const charPoses = {
    exit: { opacity: 0, y: 10 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 60,
    },
  }
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
      <div className="pt-20 pb-10 px-24">
        <h2 className="hero-subtitle text-white">
          Pronto para tornar sua marca
        </h2>
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="hero-title text-white"
        >
          inesquecível?
        </SplitText>
        <h2 className="hero-subtitle text-white">Comece agora.</h2>
      </div>
      <div className="arrow-down"></div>
    </div>
  )
}
