'use client'
import { darken } from 'polished'
import styled from 'styled-components'
import theme from '@/styles/theme'

export const Container = styled.section`
  margin: 2.7rem auto 0;
  width: 90%;
`

export const SectionTitleForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${theme.primary};
    font-size: 4.5rem;
  }

  h2 {
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

export const FormContainer = styled.form`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > button {
    border: none;
    margin: 0 auto;
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
      background: ${darken(0.05, theme.primary)};
    }
  }

  > p {
    text-align: center;
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`

export const Input = styled.input`
  height: 3rem;
  width: 60%;
  margin: 0 auto;
  background: ${theme.secondary};
  border: 5px solid ${theme.border};
  padding: 1.7rem 1.5rem;
  color: ${theme.primary};
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${theme.primary};
  }

  &::placeholder {
    border-color: ${theme.primary};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`
export const TextArea = styled.textarea`
  height: 10rem;
  width: 60%;
  margin: 0 auto;
  background: ${theme.secondary};
  border: 5px solid ${theme.border};
  padding: 1.7rem 1.5rem;
  color: ${theme.primary};
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;

  grid-column: 1/3;

  &:focus {
    border-color: ${theme.primary};
  }

  &::placeholder {
    border-color: ${theme.primary};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`
