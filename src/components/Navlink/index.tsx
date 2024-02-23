import Link from 'next/link'
import { NavlinkContainer } from './styles'
import { FaBriefcase, FaHouse } from 'react-icons/fa6'
// FaAddressBook,FaUser

export function Navlink() {
  return (
    <NavlinkContainer>
      <Link href="/">
        <FaHouse size={24} /> <span>Home</span>
      </Link>
      {/* <Link href="/about">
        <FaUser size={24} /> <span>About</span>
      </Link> */}
      <Link href="/portfolio">
        <FaBriefcase size={24} /> <span>Portfolio</span>
      </Link>
      {/* <Link href="/contact">
        <FaAddressBook size={24} />
        <span>Contact</span>
      </Link> */}
    </NavlinkContainer>
  )
}
