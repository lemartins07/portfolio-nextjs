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

export const PortfolioBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2.5rem;

  @media (max-width: 700px) {
    gap: 3rem;
  }

  margin-bottom: 2rem;
`
export const PortfolioBox = styled.div`
  height: 30rem;
  overflow: hidden;
  position: relative;
  //  border: 1px solid ${(props) => props.theme['gray-100']};
  box-shadow: ${(props) => props.theme['box-shadow']};

  &:hover {
    & {
      transform: scale(1.07);
      transition: 0.2s linear;
    }
    .box-content {
      transform: translateY(0);
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .box-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme['gray-500']};
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transform: translateY(-100%);
    transition: 0.2s linear;

    h3 {
      font-size: 2.5rem;
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
      font-weight: normal;
    }

    p {
      padding: 1rem 0;
      font-size: 1.4rem;
      line-height: 2;
      color: ${(props) => props.theme['gray-800']};
    }

    a {
      font-size: 2rem;
      color: ${(props) => props.theme['blue-500']};

      &:hover {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
