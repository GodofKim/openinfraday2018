import styled from 'styled-components'
import { ON_MOBILE } from 'styles/constants'

export default styled.div`
  padding: 60px 90px;

  @media ${ON_MOBILE} {
    padding: 40px 24px;
  }
`
