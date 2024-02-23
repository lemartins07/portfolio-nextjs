import styled from 'styled-components'

export const PortfolioContainer = styled.section`
  .heading {
    text-align: center;
    font-size: 6vw;
    color: ${(props) => props.theme.white};
    margin-bottom: 3rem;
    text-transform: uppercase;

    span {
      text-transform: uppercase;
      color: ${(props) => props.theme['blue-500']};
    }
  }
`

export const BoxContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: $light-bg;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: translateY(-100%);
  transition: 0.2s linear;

  h3 {
    font-size: 2.5rem;
    color: $white;
    text-transform: uppercase;
    font-weight: normal;
  }

  p {
    padding: 1rem 0;
    font-size: 1.4rem;
    line-height: 2;
    color: $light-color;
  }

  a {
    font-size: 2rem;
    color: $primary-color;

    &:hover {
      color: $white;
    }
  }
`

export const PortfolioBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 1.5rem;

  margin-bottom: 2rem;
`
export const PortfolioBox = styled.div`
  height: 30rem;
  overflow: hidden;
  position: relative;

  &:hover {
    ${BoxContent.displayName} {
      transform: translateY(0);
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
