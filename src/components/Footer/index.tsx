'use client'
import { Container } from './styles';

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export function Footer() {
  function handleRedirect(url: string){
    window.open(url)
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className='container'>
        <button type='button' onClick={handleScrollTop}>Voltar ao topo</button>
        <section>
          <AiFillInstagram onClick={() => handleRedirect("https://www.instagram.com/vitorkravs")}/>
          <AiFillGithub onClick={() => handleRedirect("https://github.com/vitorkravs")}/>
          <AiFillLinkedin onClick={() => handleRedirect("https://www.linkedin.com/in/vitor-kravszenko-80748a234/")}/>
        </section>
      </div>
    </Container>
  );
}