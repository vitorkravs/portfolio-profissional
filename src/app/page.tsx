import { GlobalStyle } from '@/styles/global'
import { HomeContainer } from '../styles/HomeStyles'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Header />
    </HomeContainer>
  )
}
