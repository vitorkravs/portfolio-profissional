'use client'
import SectionTitle from '../SectionTitle'
import Form from './Form'
import { Container } from './styles'

export function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            <p>Precisa dos</p>
            <p>Meus serviços?</p>
          </>
        }
        description={
          <>
            <p>Prencha o formulário abaixo que</p>
            <p>Irei retornar em breve</p>
          </>
        }
      />

      <Form />
    </Container>
  )
}
