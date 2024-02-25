'use client'

import Image, { ImageProps } from 'next/image'

interface MyImageComponentProps extends ImageProps {
  // Você pode adicionar quaisquer outras props específicas do seu componente aqui
}

export default function MyImage(props: MyImageComponentProps) {
  const { src, alt, width, height } = props

  // Função para lidar com o erro de carregamento da imagem
  const handleImageError = () => {}

  return (
    <div>
      {/* Verifica se a imagem foi carregada com sucesso */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onError={handleImageError} // Define uma função para lidar com erros de carregamento da imagem
      />
    </div>
  )
}
