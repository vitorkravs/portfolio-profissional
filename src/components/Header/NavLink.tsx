'use client'
import { NavLinkContainer } from './styles'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
  title: string
  path: string
  includes?: boolean
}

export default function NavLink({ title, path, includes = false }: Props) {
  const pathname = usePathname()

  function verifyIfIsActive() {
    if (includes) {
      return pathname.includes(path)
    }
    return path == pathname
  }

  const isActive = verifyIfIsActive()
  return (
    <NavLinkContainer $isActive={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  )
}
