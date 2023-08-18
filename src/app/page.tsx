import { GlobalStyle } from '@/styles/global'
import { HomeContainer } from '../styles/HomeStyles'
import { Header } from '@/components/Header'
import { HomeHero } from '@/components/HomeHero'
import { Projetos } from '@/components/Projetos'
import { Conhecimentos } from '@/components/Conhecimentos'
import { FormContato } from '@/components/FormContato'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Header />
      <HomeHero />
      <Projetos />
      <Conhecimentos />
      <FormContato />
      <Footer />
    </HomeContainer>
  )
}
