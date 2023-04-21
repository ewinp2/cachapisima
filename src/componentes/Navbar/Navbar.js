import React from 'react'
import styled from 'styled-components'

export const Navbar = ()=>{
    return(
        <Titulo>
         <Logo>
                
        </Logo>   
        <NavWrapper></NavWrapper>
        </Titulo>
    )
}

const Titulo = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   background-color: lightgray;
`

const Logo = styled.div`
   width: 20%;
   background-color: blue;
`

const NavWrapper = styled.div`
   width: 80%;
   background-color: red;
`