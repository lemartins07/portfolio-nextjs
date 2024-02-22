'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 162px;
  max-height: 54px;
  margin-top: 1rem;
  border-radius: 5rem;
  background: ${(props) => props.theme['blue-500']};
  padding: 0.7rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.7rem;
  padding-left: 2rem;

  & i {
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['blue-500']};
    border-radius: 50%;
    margin-left: 1rem;
    transition: 0.2s linear;
  }

  & svg {
    font-size: 1.7rem;
  }

  &:hover i {
    margin-left: 2rem;
  }
`
