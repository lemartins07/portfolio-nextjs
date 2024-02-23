import { HomeContainer, HomeContent, HomeImage } from './styles'
import Image from 'next/image'
// import { Button } from '@/components/Button'
import prisma from '@/lib/prisma'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: { name: 'Leandro Martins' },
  })

  return (
    user && (
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
          <h3>hi, i am {user?.name}</h3>
          <span>{user?.skill}</span>
          <p>{user?.bio}</p>
          {/* <Button href="/about" text="about me" icon="user" /> */}
        </HomeContent>
      </HomeContainer>
    )
  )
}
