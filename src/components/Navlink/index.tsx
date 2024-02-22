import Link from 'next/link'
import { NavlinkContainer } from './styles'
import { FaAddressBook, FaBriefcase, FaHouse, FaUser } from 'react-icons/fa6'

export function Navlink() {
  return (
    <NavlinkContainer>
      <Link href="/">
        <FaHouse /> <span>Home</span>
      </Link>
      <Link href="/about">
        <FaUser /> <span>About</span>
      </Link>
      <Link href="/portfolio">
        <FaBriefcase /> <span>Portfolio</span>
      </Link>
      <Link href="/contact">
        <FaAddressBook />
        <span>Contact</span>
      </Link>
    </NavlinkContainer>
  )
}
