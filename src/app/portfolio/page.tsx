'use client'

import { useEffect, useState } from 'react'
import {
  PortfolioBox,
  PortfolioBoxContainer,
  PortfolioContainer,
} from './styles'
import ImageHelper from '@/components/ImageHelper'
import { Heading } from '@/components/Heading'

interface Projects {
  id: string
  name: string
  latestDeployments: [{ alias: string }]
}

export default function Page() {
  const [projects, setProjects] = useState<Projects[]>([])

  useEffect(() => {
    // Ao montar o componente, faça a chamada para a API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()

        console.log('DATA: ', data.projects)
        setProjects(data.projects) // Define os projetos no estado local
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    fetchProjects()
    // Chama a função para buscar os projetos
  }, []) // Executa apenas uma vez, quando o componente é montado

  return (
    <PortfolioContainer>
      <Heading textBlue="My" textWhite="Portfolio" />
      <PortfolioBoxContainer>
        {projects &&
          projects.map((project) => (
            <PortfolioBox key={project.id}>
              <ImageHelper
                src={`/${project.name}.png`}
                alt={project.name}
                width={500}
                height={480}
              />
              <div className="box-content">
                <h3>{project.name}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit incidunt assumenda voluptatem.
                </p>
                <a
                  href={`https://${project.latestDeployments[0].alias[0]}`}
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </PortfolioBox>
          ))}
      </PortfolioBoxContainer>
    </PortfolioContainer>
  )
}
