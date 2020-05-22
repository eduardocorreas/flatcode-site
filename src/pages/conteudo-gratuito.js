import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/conteudogratuito/heroEmailMarketing'

import UseCases from '../components/useCases'
import Clients from '../components/clients'
import Contact from '../components/contact'

const ConteudoGratuito = () => (
  <Layout>
    <SEO title="Conteúdo Gratuito - Marketing e Empreendedorismo" />
    <Hero title="Cadastre-se e fique por dentro de todos os nossos conteúdos gratuitamente" />
    <UseCases />
    <Clients />
    <Contact />
  </Layout>
)

export default ConteudoGratuito
