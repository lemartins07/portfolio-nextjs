'use client'

import styled from 'styled-components'

export const AboutContainer = styled.section``

export const AboutRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  flex: 1 1 42rem;

  h1 {
    font-size: 4rem;
    color: #ffffff;
    text-transform: uppercase;
    padding-bottom: 1rem;
  }
`

export const BoxContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Box = styled.div`
  flex: 1 1 20rem;

  h3 {
    font-size: 1.7rem;
    color: #ffffff;
    padding: 1rem 0;
    font-weight: normal;
  }

  span {
    color: #6d6d6d;
    font-weight: lighter;
  }
`
export const CountContainer = styled.div`
  flex: 1 1 42rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CountBox = styled.div`
  flex: 1 1 20rem;
  padding: 3rem 4rem;
  border-radius: 0.5rem;
  background: #282c34;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);

  h3 {
    font-size: 5rem;
    color: #64dafb;
  }

  p {
    font-size: 2rem;
    color: #6d6d6d;
  }
`

export const SkillContainer = styled.section`
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1.5rem;
  }
`
export const SkillBox = styled.div`
  padding: 2rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  background: #282c34;
  &:hover {
    background: #ffffff;
  }
  &:hover h3 {
    color: #20232a;
  }

  img {
    height: 7rem;
    margin-bottom: 1rem;
    max-width: 100px;
    max-height: 100px;
  }

  h3 {
    color: #ffffff;
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: normal;
  }
`
