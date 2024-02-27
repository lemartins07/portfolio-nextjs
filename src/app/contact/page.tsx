'use client'

import { Heading } from '@/components/Heading'
import {
  ContactContainer,
  InfoContainer,
  ContactBox,
  ContactShare,
  InputBox,
} from './styles'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa6'
import { Button } from '@/components/Button'

export default function Page() {
  return (
    <ContactContainer>
      <Heading textBlue="Contact" textWhite="me" />

      <div>
        <InfoContainer>
          <h1>get in touch</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            excepturi saepe eaque ducimus. Ab, at amet similique natus corporis
            et!
          </p>

          <div>
            <ContactBox>
              <i>
                <FaMap />
              </i>
              <div>
                <h3>address:</h3>
                <p>porto alegre, brazil</p>
              </div>
            </ContactBox>
            <ContactBox>
              <i>
                <FaEnvelope />
              </i>
              <div>
                <h3>address:</h3>
                <p>porto alegre, brazil</p>
              </div>
            </ContactBox>
            <ContactBox>
              <i>
                <FaPhone />
              </i>
              <div>
                <h3>address:</h3>
                <p>porto alegre, brazil</p>
              </div>
            </ContactBox>
          </div>

          <ContactShare>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </ContactShare>
        </InfoContainer>
      </div>

      <form>
        <InputBox>
          <input type="text" placeholder="your name" />
          <input type="number" placeholder="your number" />
        </InputBox>

        <InputBox>
          <input type="email" placeholder="your email" />
          <input type="text" placeholder="your subject" />
        </InputBox>

        <textarea
          name=""
          placeholder="your message"
          id=""
          cols={30}
          rows={10}
        ></textarea>

        <Button text="send message" icon={undefined} />
      </form>
    </ContactContainer>
  )
}
