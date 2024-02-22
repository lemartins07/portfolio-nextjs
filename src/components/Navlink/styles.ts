'use client'

import styled from 'styled-components'

export const NavlinkContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1000;
  align-items: flex-end;

  & a {
    padding: 2rem;
    font-size: 2rem;
    background: ${(props) => props.theme['gray-500']};
    flex: 1;
    color: ${(props) => props.theme.white};
    text-align: center;
    transition: 0.2s linear;

    svg {
      color: ${(props) => props.theme['blue-500']};
      padding-right: 0.5rem;
    }

    &:hover {
      background: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['gray-400']};
      padding-bottom: 4rem !important;

      svg {
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }

  @media (max-width: 768px) {
    & a svg {
      padding: 0;
    }

    & a span {
      display: none;
    }

    & a:hover {
      padding-bottom: 2rem;
    }
  }
`
