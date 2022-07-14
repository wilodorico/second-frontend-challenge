import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  )
}

const Main = styled.main`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

`

export default Layout