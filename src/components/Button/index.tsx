'use client'

import { FaAddressBook, FaBriefcase, FaHouse, FaUser } from 'react-icons/fa6'
import { ButtonContainer } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon: 'user' | 'house' | 'addressBook' | 'briefcase' | undefined
}

export function Button({ text, icon, ...props }: ButtonProps) {
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
    default:
      seletedIcon = ''
      break
  }
  return (
    <ButtonContainer {...props}>
      {text}
      {seletedIcon && <i>{seletedIcon}</i>}
    </ButtonContainer>
  )
}
