'use client'
import { Heading } from '@/components/Heading'
import {
  AboutContainer,
  AboutRow,
  Box,
  BoxContainer,
  CountBox,
  CountContainer,
  InfoContainer,
  SkillContainer,
  SkillBox,
} from './styles'
import { Button } from '@/components/Button'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <AboutContainer>
        <Heading textBlue="About" textWhite="Me" />
        <AboutRow>
          <InfoContainer>
            <h1>personal info</h1>

            <BoxContainer>
              <Box>
                <h3>
                  <span>name:</span> leandro martins
                </h3>
                <h3>
                  <span>age:</span> 37
                </h3>
                <h3>
                  <span>email:</span> leandro.martins.85@gmail.com
                </h3>
                <h3>
                  <span>address:</span> porto alegre, brazil
                </h3>
              </Box>
              <Box>
                <h3>
                  <span>freelance:</span> available
                </h3>
                <h3>
                  <span>skill:</span> front-end developer
                </h3>
                <h3>
                  <span>experience:</span> 2 years
                </h3>
                <h3>
                  <span>language:</span> portuguese, english
                </h3>
              </Box>
            </BoxContainer>

            <Button href="#" icon="addressBook" text="download cv" />
          </InfoContainer>
          <CountContainer>
            <CountBox>
              <h3>2+</h3>
              <p>years of experience</p>
            </CountBox>
            <CountBox>
              <h3>2+</h3>
              <p>years of experience</p>
            </CountBox>
            <CountBox>
              <h3>2+</h3>
              <p>years of experience</p>
            </CountBox>
            <CountBox>
              <h3>2+</h3>
              <p>years of experience</p>
            </CountBox>
          </CountContainer>
        </AboutRow>
      </AboutContainer>
      <SkillContainer>
        <Heading textBlue="my" textWhite="skills" />
        <div>
          <SkillBox>
            <Image src="/icon-react.png" alt="React" width={80} height={80} />
            <h3>React</h3>
          </SkillBox>
          <SkillBox>
            <Image src="/icon-js.png" alt="Javascript" width={80} height={80} />
            <h3>Javascript</h3>
          </SkillBox>
          <SkillBox>
            <Image src="/icon-css.png" alt="CSS" width={80} height={80} />
            <h3>CSS</h3>
          </SkillBox>
          <SkillBox>
            <Image src="/icon-jquery.png" alt="JQuery" width={80} height={80} />
            <h3>JQuery</h3>
          </SkillBox>
          <SkillBox>
            <Image src="/icon-sass.png" alt="Sass" width={80} height={80} />
            <h3>html</h3>
          </SkillBox>
          <SkillBox>
            <Image src="/icon-html.png" alt="HTML" width={80} height={80} />
            <h3>html</h3>
          </SkillBox>
        </div>
      </SkillContainer>
    </>
  )
}
