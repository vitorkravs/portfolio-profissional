'use client'
import React, { useEffect, useState } from 'react'

import fetchDataFromApi from '../../lib/datoCMS'

import { ProjetoContainer } from '@/styles/ProjetosStyles'
import { Header } from '@/components/Header'
import { ProjetoList } from '../../components/ProjetoList'

export default function Projetos() {
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
    <ProjetoContainer>
      <Header />
      <main className="container">
        {projetos.map((projeto: any) => (
          <ProjetoList
            key={projeto.slug}
            title={projeto.title}
            description={projeto.description}
            imgUrl={projeto.imgurl}
            slug={projeto.slug}
          />
        ))}
      </main>
    </ProjetoContainer>
  )
}
