'use client'

import { useEffect, useState } from 'react'
import {
  BoxContent,
  PortfolioBox,
  PortfolioBoxContainer,
  PortfolioContainer,
} from './styles'
import Image from 'next/image'

interface Projects {
  id: string
  name: string
}

export default function Page() {
  const [projects, setProjects] = useState<Projects[]>([])

  useEffect(() => {
    // Ao montar o componente, faça a chamada para a API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()

        console.log(data.projects)
        setProjects(data.projects) // Define os projetos no estado local
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    fetchProjects() // Chama a função para buscar os projetos
  }, []) // Executa apenas uma vez, quando o componente é montado

  return (
    <PortfolioContainer>
      <h1 className="heading">
        <span>my</span> portfolio
      </h1>

      <PortfolioBoxContainer>
        {projects &&
          projects.map((project) => (
            <PortfolioBox key={project.id}>
              <Image
                src="/img-1.jpg"
                alt={project.name}
                width={626}
                height={469}
              />
              <BoxContent>
                <h3>{project.name}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit incidunt assumenda voluptatem.
                </p>
                <a href="#">read more</a>
              </BoxContent>
            </PortfolioBox>
          ))}
      </PortfolioBoxContainer>
    </PortfolioContainer>
  )
}
