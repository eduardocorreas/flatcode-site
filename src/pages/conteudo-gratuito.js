import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/conteudogratuito/heroEmailMarketing'

import Contact from '../components/contact'

const ConteudoGratuito = () => (
  <Layout>
    <SEO title="Conteúdo Gratuito - Marketing e Empreendedorismo" />
    <Hero title="Cadastre-se e fique por dentro de todos os nossos conteúdos gratuitamente" />
    <Contact />
  </Layout>
)

export default ConteudoGratuito
