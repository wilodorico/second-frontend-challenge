import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const Footer = ({className}) => {
  return (
    <div className={className}>
      Challenge by{' '}
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href='https://github.com/wilodorico' target="_blank" rel="noreferrer">wilodorico</a>.
    </div>
  )
}

export default styled(Footer)`
   color: ${colors.lightGrey};
   font-size: 0.8rem;

   a {
      font-weight: 700;
      color: ${colors.mediumGrey};
   }
`
