import styled, { css } from 'styled-components'
import { colors } from '../theme/colors'

const Card = ({ className, children, flexColCenter }) => {
  return (
    <CardTemplate className={className} flexColCenter={flexColCenter}>
      {children}
    </CardTemplate>
  )
}

const CardTemplate = styled.div`
  width: 400px;
  height: 420px;
  background: linear-gradient(
    -15deg,
    ${colors.veryDarkBlue},
    ${colors.veryDarkBlue} 10%,
    ${colors.darkBlue}
  );
  border-radius: 25px;
  margin: 10px;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.69);

  ${({ flexColCenter }) =>
    flexColCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}

  @media screen and (max-width: 375px) {
    padding: 25px;
  }
`
export default Card
