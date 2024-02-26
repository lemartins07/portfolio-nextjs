import styled from 'styled-components'

export const HeadingContainer = styled.h1`
  text-align: center;
  font-size: 6vw;
  color: ${(props) => props.theme.white};
  margin-bottom: 3rem;
  text-transform: uppercase;

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme['blue-500']};
  }
`
