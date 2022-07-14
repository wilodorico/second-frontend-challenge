import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const Circle = ({ balise, children, className, onClick }) => {
  return (
    <>
      {balise === "li" ? <li className={className} onClick={onClick}>{children}</li> : <div className={className}>{children}</div>}
    </>
  )
}

export default styled(Circle)`
   background: ${colors.darkBlue};
   width: 47px;
   height: 47px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
`