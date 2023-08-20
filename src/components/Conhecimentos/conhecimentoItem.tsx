'use client'
import { ReactNode } from 'react'
import { ConhecimentoContainer } from './styles'

import { motion } from 'framer-motion'

interface ConhecimentoProps {
  title: string
  icon: ReactNode
}

export default function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
  return (
    <ConhecimentoContainer>
      <p>{title}</p>
      <i>{icon}</i>
    </ConhecimentoContainer>
  )
}
