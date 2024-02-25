'use client'

import Image, { ImageProps } from 'next/image'
import { SyntheticEvent, useState } from 'react'
import { ImageHelperWrapper, Skeleton } from './styles'

interface ImageHelperComponentProps extends ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function ImageHelper({
  src,
  alt,
  width,
  height,
  ...props
}: ImageHelperComponentProps) {
  const [skeleton, setSkeleton] = useState(true)
  const [imageError, setImageError] = useState(false)

  function handleLoad(event: SyntheticEvent<HTMLImageElement, Event>) {
    const targetElement = event.target as HTMLElement

    setSkeleton(false)
    targetElement.style.opacity = '1'
  }

  function handleError() {
    console.log('Error')
    setImageError(true)
    setSkeleton(false)
  }

  return (
    <ImageHelperWrapper>
      {skeleton && <Skeleton />}
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          {...props}
          onError={handleError}
        />
      ) : (
        <Image
          src="/img-1.jpg"
          width={width}
          alt="Imagem padrão"
          height={height}
          style={{ opacity: '1' }}
        />
      )}
    </ImageHelperWrapper>
  )
}
