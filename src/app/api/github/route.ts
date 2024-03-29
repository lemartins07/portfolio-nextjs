import { unstable_noStore as noStore } from 'next/cache'
import { NextResponse } from 'next/server'

const API_GIT = process.env.GIT_API_KEY
const API_VERCEL = process.env.VERCEL_TOKEN

export async function GET() {
  noStore()
  const resultGithub = await fetch(
    `https://api.github.com/users/lemartins07/repos?sort=updated&per_page=100`,
    {
      headers: {
        Authorization: `${API_GIT}`,
      },
      method: 'GET',
    },
  )
  const dataGithub = await resultGithub.json()

  const resultVercel = await fetch(
    `https://api.vercel.com/v9/projects?limit=40`,
    {
      headers: {
        Authorization: `Bearer ${API_VERCEL}`,
      },
      method: 'GET',
    },
  )

  const dataVercel = await resultVercel.json()

  const filteredData = dataGithub.filter(
    (repo: { homepage: null | string }) => repo.homepage !== null,
  )

  const result = filteredData.filter((githubRepo) => {
    return dataVercel.projects.some((vercelRepo) => {
      return githubRepo.name === vercelRepo.link.repo
    })
  })

  console.log(result.length)

  console.log(filteredData.length)

  return NextResponse.json(result)
}
