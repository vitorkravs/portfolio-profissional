import { GlobalStyle } from '@/styles/global'
import { HomeContainer } from '../styles/HomeStyles'
import { Header } from '@/components/Header'
import { HomeHero } from '@/components/HomeHero'
import { Projetos } from '@/components/Projetos'

export default function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Header />
      <HomeHero />
      <Projetos />
    </HomeContainer>
  )
}
