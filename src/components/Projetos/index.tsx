'use client'
import React, { useEffect, useState } from 'react'
import fetchDataFromApi from '@/lib/datoCMS'
import { Container } from './styles'

import SectionTitle from '../SectionTitle'
import ProjetoItem from './ProjetoItem'

import { motion } from 'framer-motion'

import Link from 'next/dist/client/link'

export function Projetos() {
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setProjetos(data)
      })
      .catch((error) => {
        console.error('Erro ao obter dados:', error)
      })
  }, [])

  return (
    <Container>
      <SectionTitle title="#Últimos Projetos" />
      <section>
        {projetos.slice(-3).map((projeto: any) => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            description={projeto.description}
            img={projeto.imgurl}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href={'/projetos'}>Veja todos os projetos</Link>
      </button>
    </Container>
  )
}
