import styled from 'styled-components'
import theme from '@/styles/theme'

export const LoadingSpinnerr = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${theme.primary};
    font-weight: bold;
  }
`
