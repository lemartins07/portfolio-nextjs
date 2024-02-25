'use client'

import styled, { keyframes } from 'styled-components'
import { bounceIn, fadeIn, fadeInUp } from 'react-animations'

const bounceAnimation = keyframes`${bounceIn}`
const fadeInAnimation = keyframes`${fadeIn}`
const fadeUpAnimation = keyframes`${fadeInUp}`

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
    opacity: 0;
    animation: 2s ${bounceAnimation} forwards;
    animation-delay: 2s;

    @keyframes heroTitle {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
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

    opacity: 0;
    animation: 2s ${fadeUpAnimation} forwards;
    animation-delay: 5s;

    @keyframes heroTitle {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .typed-out {
    overflow: hidden;
    border-right: 0.15em solid ${(props) => props.theme['blue-500']};
    white-space: nowrap;
    animation: typing 2s steps(20, end) forwards;
    animation-delay: 3s;
    width: 0;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 5rem;
    }
    span {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
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
    animation: 2s ${fadeInAnimation};
  }

  @media (max-width: 768px) {
    img {
      height: 30rem;
      width: 30rem;
    }
  }
`
