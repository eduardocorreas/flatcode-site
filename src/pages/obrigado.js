import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/conteudogratuito/heroObrigado'

import UseCases from '../components/useCases'
import Clients from '../components/clients'
import Contact from '../components/contact'

const Obrigado = () => (
  <Layout>
    <SEO title="Muito obrigado" />
    <Hero title="Seja bem-vindo(a) a nossa lista exclusiva! " />
    <UseCases />
    <Clients />
    <Contact />
  </Layout>
)

export default Obrigado
