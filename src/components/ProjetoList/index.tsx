import { Container } from './styles'

import Link from 'next/link'

interface ProjetosListProps {
  title: string
  description: string
  imgUrl: string
  slug: string
}

export function ProjetoList({
  title,
  description,
  imgUrl,
  slug,
}: ProjetosListProps) {
  return (
    <Container $imgurl={imgUrl}>
      <Link href={`${slug}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
      </Link>
    </Container>
  )
}
