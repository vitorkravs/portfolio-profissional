'use client'
import { Header } from '@/components/Header'
import { ProjetoContainer } from '@/styles/ProjetosStyles'
import { GlobalStyle } from '@/styles/global'

export default function projetos() {
  return (
    <ProjetoContainer>
      <GlobalStyle />
      <Header />
      <h1>olá mundo</h1>
    </ProjetoContainer>
  )
}
