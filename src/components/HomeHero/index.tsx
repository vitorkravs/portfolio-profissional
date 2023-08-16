import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import Image from 'next/image'
import perfil from '../../assets/IMG_0614.jpg'

export function HomeHero() {
  return (
    <Container>
      <Image src={perfil} width={400} className="perfil" alt="Foto de perfil" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>devs and recruiters !</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="theme-infos">Infos</span> {'\u007B'}
            <div>
              <p>
                {' '}
                Nome: <span className="theme-nome">Vitor Cesar,</span>
              </p>
            </div>
            <div>
              <p>
                {' '}
                Sobrenome: <span className="theme-sobrenome">Kravszenko</span>
              </p>
            </div>
            <div>
              <p>
                {' '}
                Idade: <span className="theme-sobrenome">04/08/2003</span>
              </p>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="theme-faculdade">Faculdade</span> {'\u007B'}
            <div>
              <p>
                {' '}
                Instituição: <span className="theme-instituicao">UNINTER,</span>
              </p>
            </div>
            <div>
              <p>
                {' '}
                Curso:{' '}
                <span className="theme-curso">Engenharia de Software</span>
              </p>
            </div>
            <div>
              <p>
                {' '}
                Data de início: <span className="theme-curso">04 / 2023</span>
              </p>
            </div>
            <div>
              <p>
                {' '}
                Período: <span className="theme-curso">2 semestre</span>
              </p>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  )
}
