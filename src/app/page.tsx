import { HomeContainer, HomeContent, HomeImage } from './styles'
import Image from 'next/image'
// import { Button } from '@/components/Button'
import prisma from '@/lib/prisma'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: { name: 'Leandro Martins' },
  })

  const router = useRouter()

  function handleClick() {
    router.push('/about')
  }

  return (
    user && (
      <HomeContainer>
        <HomeImage>
          <Image
            alt="Leandro Martins"
            src="/leandro_portfolio_.png"
            width={700}
            height={700}
          />
        </HomeImage>
        <HomeContent>
          <h3>hi, i am {user?.name}</h3>
          <div className="wrapper">
            <span className="typed-out">{user?.skill}</span>
          </div>
          <p>{user?.bio}</p>
          <Button onClick={handleClick} text="about me" icon="user" />
        </HomeContent>
      </HomeContainer>
    )
  )
}
