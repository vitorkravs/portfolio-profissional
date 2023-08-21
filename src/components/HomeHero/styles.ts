import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 4rem auto 0 auto;

  > .perfil {
    width: 25rem;
    height: auto;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1000px) {
    > .perfil {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;

    > .perfil {
      width: 15rem;
      border-radius: 100%;
    }
    > div {
      width: 100%;
    }
  }
`

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  background: ${theme.gradientSecondary};
  text-align: start;

  > h1 {
    font-size: 6.5rem;
    color: ${theme.textSecondary};
  }

  > h2 {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${theme.primary};
    border-top: 1px solid ${theme.backgroundLight};
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 5rem;
    }
    > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 700px) {
    text-align: center;
    > h1 {
      font-size: 3rem;
    }
    > h2 {
      font-size: 1.5rem;
    }
  }
`

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CodeItem = styled.pre`
  background: ${theme.gradientSecondary};
  padding: 0 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 28rem;
  align-self: flex-start;
  transition: 1s;
  padding: 1rem;

  @media (max-width: 1450px) {
    width: 28rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 19rem;
    font-size: 0.7rem;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  &:last-child {
    align-self: flex-end;
  }

  &:hover {
    filter: brightness(2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.theme-infos,
  span.theme-faculdade {
    color: ${theme.textSecondary};
  }

  span.theme-instituicao,
  span.theme-curso,
  span.theme-nome,
  span.theme-sobrenome {
    color: ${theme.textSecondary};
  }
`
