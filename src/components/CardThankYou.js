import styled from 'styled-components'
import Card from '../UI/Card'
import illustrationThank from '../images/illustration-thank-you.svg'
import { colors } from '../theme/colors'

const CardThankYou = ({ note }) => {
  return (
    <CardThank flexColCenter>
      <img className='image' src={illustrationThank} alt='illustration svg' />
      <div className='label-note'>
        <span>You selected {note} out of 5</span>
      </div>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </CardThank>
  )
}

const CardThank = styled(Card)`
  img {
    width: auto;
    margin-top: 15px;
  }

  .label-note {
    background-color: ${colors.darkBlue};
    padding: 7px 20px;
    border-radius: 50px;
    color: ${colors.primary};
    margin: 35px 0;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    color: ${colors.mediumGrey};
    text-align: center;
    line-height: 25px;
    margin-top: 10px;
  }
`

export default CardThankYou
