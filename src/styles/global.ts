'use client'

import { createGlobalStyle } from 'styled-components'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
})

export const GlobalStyles = createGlobalStyle`
  * {
    ${poppins.style};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    text-transform: capitalize;
    color: ${(props) => props.theme.white};
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  html::-webkit-scrollbar {
    width: 1rem;
  }

  html::-webkit-scrollbar-track {
    background: #20232A;
  }

  html::-webkit-scrollbar-thumb {
    background: #64DAFB;
    border-radius: 5rem;
  }

  html body {
    background: #20232A;
    padding-bottom: 6.5rem;
  }

  html section {
    padding: 5rem 9%;
  }
`
