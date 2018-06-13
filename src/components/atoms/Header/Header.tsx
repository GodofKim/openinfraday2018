import styled, { css } from 'styled-components'
import { ON_MOBILE } from 'styles/constants'

const Header = styled.div`
  font-size: 55px;
  font-weight: 900;

  @media ${ON_MOBILE} {
    font-size: 40px;
  }

  ${({ white }: { white?: boolean }) =>
    white &&
    css`
      color: white;
    `};
`

export default Header
