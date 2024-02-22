'use client'

import { FaAddressBook, FaBriefcase, FaHouse, FaUser } from 'react-icons/fa6'
import { ButtonContainer } from './styles'

interface ButtonProps {
  href: string
  text: string
  icon: 'user' | 'house' | 'addressBook' | 'briefcase'
}

export function Button({ href, text, icon }: ButtonProps) {
  let seletedIcon

  switch (icon) {
    case 'user':
      seletedIcon = <FaUser />
      break
    case 'addressBook':
      seletedIcon = <FaAddressBook />
      break
    case 'briefcase':
      seletedIcon = <FaBriefcase />
      break
    case 'house':
      seletedIcon = <FaHouse />
      break
  }
  return (
    <ButtonContainer href={href}>
      {text}
      <i>{seletedIcon}</i>
    </ButtonContainer>
  )
}
