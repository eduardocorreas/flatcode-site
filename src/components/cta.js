import React from 'react'

import SocialIcons from '../components/socialIcons'

export default function CTA() {
  return (
    <div className="text-center sm:pl-48 sm:pr-48 sm:pb-32">
      <p className="text-white p-10 text-xl">
        E aí, como podemos ajudar a sua empresa?{' '}
      </p>
      <br />
      <div className="mb-10 sm:mb-0">
        <SocialIcons />
      </div>
    </div>
  )
}
