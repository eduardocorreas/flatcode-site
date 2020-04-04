import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import CTA from '../components/cta'
import UseCases from '../components/useCases'
import Clients from '../components/clients'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <CTA />
    <UseCases />
    <Clients />
    <Contact />
  </Layout>
)

export default IndexPage
