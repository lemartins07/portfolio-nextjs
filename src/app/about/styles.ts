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
export const EducationContainer = styled.section`
  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`

export const EducationBox = styled.div`
  flex: 1 1 40rem;
  margin-left: 2rem;
  padding-top: 0;
  padding-left: 3.5rem;
  padding-bottom: 3rem;
  border-left: 0.1rem solid #6d6d6d;
  position: relative;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    background: #64dafb;
    color: #ffffff;
    position: absolute;
    top: -1rem;
    left: -2.5rem;
  }

  span {
    font-size: 1.7rem;
    color: #ffffff;
    border-radius: 5rem;
    padding: 0.5rem 1.5rem;
    background: #282c34;
  }

  h3 {
    font-size: 2rem;
    padding: 1rem 0;
    color: #ffffff;
    padding-top: 3rem;
    font-weight: normal;
  }

  p {
    font-size: 1.5rem;
    color: #6d6d6d;
    line-height: 2;
  }
`
