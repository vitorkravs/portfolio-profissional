'use client'
import { darken } from 'polished'
import styled from 'styled-components'
import theme from '@/styles/theme'

interface ProjetosProps {
  $imgurl: string
}

export const Container = styled.div`
  width: 90%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }
  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${theme.primary};
    transition: 0.5s;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

    &:hover {
      background: ${darken(0.1, theme.primary)};
    }

    a {
      color: ${theme.secondary};
    }
  }
`

export const ProjetoContainer = styled.div<ProjetosProps>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 25rem;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.4;
      }
    }

    > button a {
      color: ${theme.primary};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${(props) => props.$imgurl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background: ${theme.gradientSecondary};
      opacity: 0.75;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;

      h1 {
        color: ${theme.primary};
        font-size: 2rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: ${theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 3rem 5rem 0 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          width: 100%;
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  > section > div.text {
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 490px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
        width: 10rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`
