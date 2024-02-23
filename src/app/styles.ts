'use client'

import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  min-height: calc(100vh - 6.5rem);

  @media (max-width: 768px) {
    text-align: center !important;
    gap: 2rem;
  }
`

export const HomeContent = styled.div`
  flex: 1 1 42rem;

  h3 {
    color: ${(props) => props.theme.white};
    font-size: 4rem;
    padding-bottom: 0.5rem;
  }

  span {
    font-size: 3rem;
    color: ${(props) => props.theme['blue-500']};
    padding: 0.5rem 0;
    display: block;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
    padding: 1rem 0;
    line-height: 2;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 3rem;
    }
    span {
      font-size: 2.5rem;
    }

    a {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const HomeImage = styled.div`
  flex: 1 1 42rem;
  text-align: center;

  img {
    height: 70%;
    width: 70%;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  @media (max-width: 768px) {
    img {
      height: 30rem;
      width: 30rem;
    }
  }
`
