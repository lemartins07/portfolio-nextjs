import Link from "next/link";
import { NavlinkContainer } from "./styles";

export function Navlink() {
  return (
    <NavlinkContainer>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </NavlinkContainer>
  )
}