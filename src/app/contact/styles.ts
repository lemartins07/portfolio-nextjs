'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section`
  & > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  form {
    flex: 1 1 42rem;

    textarea {
      border-radius: 5rem;
      padding: 1.2rem 1.8rem;
      font-size: 1.6rem;
      color: #ffffff;
      text-transform: none;
      margin: 0.7rem 0;
      background: #282c34;
      width: 100%;
      border-radius: 1rem;
      resize: none;
      height: 24rem;
    }
  }
`

export const InfoContainer = styled.div`
  width: 40rem;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #ffffff;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2;
    color: #6d6d6d;
    padding: 1rem 0;
  }

  & > div {
    padding: 2rem 0;
  }
`

export const ContactBox = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;

  i {
    font-size: 3rem;
    color: #64dafb;
  }

  h3 {
    font-size: 2rem;
    color: #ffffff;
  }
`

export const ContactShare = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border-radius: 50%;
    background: #282c34;
    color: #ffffff;
    text-align: center;
    margin-right: 0.3rem;
  }

  & a:hover {
    background: #64dafb;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    width: 49%;
    border-radius: 5rem;
    padding: 1.2rem 1.8rem;
    font-size: 1.6rem;
    color: #ffffff;
    text-transform: none;
    margin: 0.7rem 0;
    background: #282c34;
  }
`
