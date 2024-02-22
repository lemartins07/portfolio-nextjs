import { HomeContainer, HomeContent, HomeImage } from './styles'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <HomeContainer>
      <HomeImage>
        <Image
          alt="Leandro Martins"
          src="/leandro_portfolio.jpg"
          width={700}
          height={700}
        />
      </HomeImage>
      <HomeContent>
        <h3>hi, i am leandro martins</h3>
        <span>front-end developer</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro
          facere expedita ab atque a consectetur odit vel soluta itaque.
        </p>
        <Button href="/about" text="about me" icon="user" />
      </HomeContent>
    </HomeContainer>
  )
}
