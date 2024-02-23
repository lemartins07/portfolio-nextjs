import { NextResponse } from 'next/server'

const API_TOKEN = process.env.VERCEL_TOKEN

export async function GET() {
  const result = await fetch(`https://api.vercel.com/v9/projects`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'GET',
  })
  const data = await result.json()

  return NextResponse.json(data)
}
