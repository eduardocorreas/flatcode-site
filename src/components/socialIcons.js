import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

export default function SocialIcons() {
  return (
    <div className="flex pl-20 pr-20 justify-center">
      <a
        href="https://www.youtube.com/channel/UCG75Q-Pk2QHvoBSRQaNmHtg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-white w-8 mr-5 ml-5"
        />
      </a>
      <a
        href="https://instagram.com/flatcodelab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white w-8  mr-5 ml-5"
        />
      </a>

      <a
        href="mailto:contato@flatcodelab.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-white w-8 mr-5 ml-5"
        />
      </a>
    </div>
  )
}
