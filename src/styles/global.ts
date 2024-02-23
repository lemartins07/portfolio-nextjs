'use client'

import { createGlobalStyle } from 'styled-components'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
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
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  html::-webkit-scrollbar {
    width: 1rem;
  }

  html::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-400']};
  }

  html::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['blue-500']};
    border-radius: 5rem;
  }

  html body {
    background: ${(props) => props.theme['gray-400']};
    padding-bottom: 6.5rem;
  }

  html section {
    padding: 5rem 9%;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 55%;
    }
    section {
      padding: 3rem 2rem;
    }
  }

  @media (max-width: 768px) {
  .heading {
    font-size: 12vw;
  }
  
  .contact .row form .inputBox input {
    width: 100%;
  }
}
@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
`
