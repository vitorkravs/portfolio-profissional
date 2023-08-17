'use client'
import styled from 'styled-components'
import theme from '@/styles/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1 {
    text-align: center;
    color: ${theme.primary};
    font-size: 4.5rem;
  }

  h2 {
    text-align: center;
    color: ${theme.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`
