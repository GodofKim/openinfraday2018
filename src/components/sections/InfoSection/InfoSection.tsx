import React, { Component } from 'react'
// import styled from 'styled-components'
import Container from 'components/atoms/Container'
import Header from 'components/atoms/Header'
import styled from 'styled-components'

const StyledContainer = Container.extend`
  background: #dc3b3b;
`

const Row = styled.div`
  margin-top: 50px;
`

const TopRow = Row.extend`
  margin-top: 120px;
`

const Label = styled.div`
  text-align: right;
  font-size: 26px;
  color: white;
`

const Line = styled.hr`
  border-top: 6px solid white;
`

const Para = styled.p`
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 300;
  word-break: keep-all;
`

interface InfoSectionProps {}

class InfoSection extends Component<InfoSectionProps> {
  render() {
    return (
      <StyledContainer>
        <Header white={true}>Information</Header>
        <TopRow>
          <Label>OpenInfra Days Korea 2018</Label>
          <Line />
          <Para>
            주제 - OpenStack Next: Embracing the Cloud Universe<br />
            주최 - OpenStack 한국 커뮤니티, OpenStack Foundation, CNCF 한국
            커뮤니티<br />
            주관 - OpenStack 한국 커뮤니티, CNCF 한국 커뮤니티, OpenStack
            Foundation, 한국정보통신산업진흥원<br />
          </Para>
        </TopRow>
        <Row>
          <Label>일시 및 장소</Label>
          <Line />
          <Para>
            2018년 6월 28일(목) - 29일(금) 09:00~18:00<br />코엑스 3층
            컨퍼런스룸 E (구 Hall E)
          </Para>
        </Row>
      </StyledContainer>
    )
  }
}

export default InfoSection
