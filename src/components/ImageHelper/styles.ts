import styled from 'styled-components'

export const ImageHelperWrapper = styled.div`
  display: grid;

  img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }
`

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme['gray-700']} 0px,
    ${(props) => props.theme['gray-800']} 50%,
    ${(props) => props.theme['gray-700']} 100%
  );
  background-color: ${(props) => props.theme['gray-700']};
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`
