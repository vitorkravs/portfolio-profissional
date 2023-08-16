'use client'
import styled from 'styled-components'

export const ProjetoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin: 5rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`
