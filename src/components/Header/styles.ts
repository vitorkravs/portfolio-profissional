'use client'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { lighten } from 'polished'

interface NavLinkProps {
  $isActive: boolean
}

export const Container = styled.header`
  background: ${theme.background};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-size: 1.3rem;
    color: ${(props) => (props.$isActive ? theme.primary : theme.text)};
    transition: 0.5s;

    &:hover {
      color: ${(props) =>
        props.$isActive
          ? lighten(0.5, theme.primary)
          : lighten(0.2, theme.text)};
    }
  }
`
