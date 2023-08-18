'use client'
import styled from 'styled-components'
import theme from '@/styles/theme'

interface ContainerProps {
  $imgurl: string
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    height: 10rem;
    padding: 1.5rem;
    background: url(${(props) => props.$imgurl}) no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 0.5rem;
    border: 1px solid ${theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: white;
      }
      p {
        color: white;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${theme.gradientSecondary};
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`
