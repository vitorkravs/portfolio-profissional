import { HomeContainer } from '../styles/HomeStyles'
import { Header } from '@/components/Header'
import { HomeHero } from '@/components/HomeHero'
import { Projetos } from '@/components/Projetos'
import { Conhecimentos } from '@/components/Conhecimentos'
import { FormContato } from '@/components/FormContato'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Home - Portfólio',
}

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeHero />
      <Projetos />
      <Conhecimentos />
      <FormContato />
      <Footer />
    </HomeContainer>
  )
}
