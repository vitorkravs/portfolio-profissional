import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiStyledcomponents } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import SectionTitle from '../SectionTitle'
import ConhecimentoItem from './conhecimentoItem'
import { Container } from './styles'

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="#Conhecimentos" />
      <section>
        <ConhecimentoItem title="Html" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="Git" icon={<BsGit />} />
        <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem
          title="Styled Components"
          icon={<SiStyledcomponents />}
        />
      </section>
    </Container>
  )
}
