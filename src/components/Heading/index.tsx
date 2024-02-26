import { HeadingContainer } from './styles'

interface HeadingProps {
  textBlue: string
  textWhite: string
}

export function Heading({ textBlue, textWhite }: HeadingProps) {
  return (
    <HeadingContainer>
      <span>{textBlue}</span> {textWhite}
    </HeadingContainer>
  )
}
