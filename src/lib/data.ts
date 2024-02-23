import type { NextApiRequest, NextApiResponse } from 'next'

// const API_TOKEN = process.env.VERCEL_TOKEN
const API_TOKEN = 'VznVBTGIwXdZYV1VQfkdrMaI'

export default async function getProjects(
  request: NextApiRequest,
  response: NextApiResponse<{}>,
) {
  const result = await fetch(`https://api.vercel.com/v9/${request}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'get',
  })
  const data = await result.json()
  response.status(200).json(data)
}
